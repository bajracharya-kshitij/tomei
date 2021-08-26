import express = require("express");
import cors = require('cors')

export default function (database: any) {

    let expressApp = express();
    let sequelize = database;

    const middlewares = (): void => {
        expressApp.use(cors());
        expressApp.use(express.json());
        expressApp.use(express.urlencoded())
    }

    middlewares();

    return expressApp
}
