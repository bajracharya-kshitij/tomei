import { Sequelize, Error } from "sequelize";

const config = require("../config/database")

const env = process.env.NODE_ENV || "development";

export default class Database {
    public config: any = config[env];
    public sequelize: Sequelize;

    public constructor() {
        this.connect();
        this.verifyConnection();
    }

    public connect(): void {
        this.sequelize = new Sequelize({ ...this.config, logging: false });
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
