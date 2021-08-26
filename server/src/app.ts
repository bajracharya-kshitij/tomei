import express = require("express");
import cors = require('cors')

import { getDirectories } from "./utils/helper";
import { resolve } from "path";
import { readdirSync } from "fs";

export default function (database: any) {

    let expressApp = express();
    let sequelize = database;
    let modules: any[] = getDirectories(resolve(`src/modules`));

    const middlewares = (): void => {
        expressApp.use(cors());
        expressApp.use(express.json());
        expressApp.use(express.urlencoded())
    }

    const routes = (): void => {
        try {
            modules.forEach(
                (module): void => {
                    const dir = `src/modules/${module}`;
                    readdirSync(resolve(dir)).forEach(
                        (filename): void => {
                            if (/.*.router/.test(filename)) {
                                const path = `/modules/${module}/${filename}`
                                const router = require(`.${path}`)
                                expressApp.use(`/api/${module}`, router)
                            }
                        }
                    );
                }
            );
        } catch (err) {
            console.log("Error initializing routes:", err);
        }
    }

    middlewares();
    routes();

    return expressApp
}
