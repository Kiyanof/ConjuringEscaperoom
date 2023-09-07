"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_LOCAL_PORT, DB_LOCAL_HOST } = process.env;
exports.default = {
    url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
};
