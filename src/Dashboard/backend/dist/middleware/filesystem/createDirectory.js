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
    const fullPath = path_1.default.join(__dirname, `../../${storageDir}/`, directroyPath);
    return (req, res, next) => {
        if (!fs_1.default.existsSync(fullPath)) {
            try {
                fs_1.default.mkdirSync(fullPath, { recursive: true });
                res.status(200).json({
                    state: true,
                    msg: "Directory create successfully.",
                    error: null,
                });
            }
            catch (error) {
                res.status(500).json({
                    state: false,
                    msg: "Error creating directory!",
                    error: error,
                });
            }
        }
        else {
            res.status(200).json({
                state: false,
                msg: "Directory already exists.",
                error: null,
            });
        }
    };
};
exports.default = createDir;
