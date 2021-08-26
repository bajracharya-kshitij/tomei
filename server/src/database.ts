import { Sequelize, Error } from "sequelize";

const config = require("../config/database")

import { getDirectories } from "./utils/helper";
import { resolve } from "path";
import { readdirSync } from "fs";

const env = process.env.NODE_ENV || "development";

export default class Database {
    public config: any = config[env];
    public sequelize: Sequelize;
    public modules: any[] = getDirectories(resolve(`src/modules`));

    public constructor() {
        this.connect();
        this.verifyConnection();
        this.initModels();
    }

    public connect(): void {
        this.sequelize = new Sequelize({ ...this.config, logging: false });
    }

    public initModels(): void {
        try {
            this.modules.forEach(
                (module): void => {
                    const dir = `src/modules/${module}`;
                    readdirSync(resolve(dir)).forEach(
                        (filename): void => {
                            if (/.*.model/.test(filename)) {
                                const model = require(`./modules/${module}/${filename}`);
                                model.init(this.sequelize);
                            }
                        }
                    );
                }
            );
        } catch (err) {
            console.log("models init error:", err);
        }
    }

    public verifyConnection(): void {
        this.sequelize
            .authenticate()
            .then(
                (): void => {
                    console.log(
                        `Connection successful on database: ${this.sequelize.config.database
                        }`
                    );
                }
            )
            .catch(
                (error: Error): void => {
                    console.log(
                        `Connection failed on database: ${this.sequelize.config.database
                        }, ${error.message}`
                    );
                }
            );
    }
}
