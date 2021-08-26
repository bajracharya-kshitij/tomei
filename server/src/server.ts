import http = require("http");
import makeApp from "./app";
import Database from "./database";

require("dotenv").config();

const app = makeApp(new Database().sequelize)

const { SERVER_HOST, SERVER_PORT } = process.env;

const server = http.createServer(app);

server.listen(SERVER_PORT, () => {
    console.log(`Server started at ${SERVER_HOST}:${SERVER_PORT}`)
})