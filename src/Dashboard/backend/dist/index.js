"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./config/database"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_2 = __importDefault(require("./config/cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = parseInt(process.env.APP_PORT || '8000', 10);
mongoose_1.default.connect(database_1.default.url)
    .then(() => {
    console.log('Database:' + database_1.default.url + ' connected successfully.');
})
    .catch((err) => {
    console.log('Error while connecting to database, Error: ', err);
});
// Allow all origins - you might want to configure this to match your frontend's domain
app.use((0, cors_1.default)(cors_2.default));
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: true }));
// parse application/json
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`WhaleCMS port: ${port}`);
});
