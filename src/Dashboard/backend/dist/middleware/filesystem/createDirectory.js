"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/*
    Create directory on ./storage/{newDirs} to control access on storage dir
*/
const storageDir = process.env.STORAGE_PATH;
const createDir = (directroyPath) => {
    return (req, res, next) => {
        const fullPath = path_1.default.join(__dirname, `../../${storageDir}/`, directroyPath);
        if (!fs_1.default.existsSync(fullPath)) {
            fs_1.default.mkdirSync(fullPath, { recursive: true });
        }
        next();
    };
};
exports.default = createDir;
