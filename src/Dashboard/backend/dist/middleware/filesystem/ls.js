"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ls = (dir) => {
    const rootDirectory = path_1.default.join(__dirname, `../../storage/${dir}`);
    return (req, res, next) => {
        try {
            const list = fs_1.default.readdirSync(rootDirectory, { withFileTypes: true });
            res.status(200).json({
                state: true,
                result: list
            });
        }
        catch (error) {
            res.status(200).json({
                state: false,
                result: []
            });
        }
        next();
    };
};
exports.default = ls;
