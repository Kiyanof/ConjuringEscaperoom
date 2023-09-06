"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { FRONTEND_URL, FRONTEND_PORT } = process.env;
exports.default = {
    origin: `${FRONTEND_URL}:${FRONTEND_PORT}` || 'localhost:3000',
    credential: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
};
