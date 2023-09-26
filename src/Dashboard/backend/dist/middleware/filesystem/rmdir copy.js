"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rmdir = (dir) => {
    const rootDirectory = path_1.default.join(__dirname, `../../storage/${dir}`);
    return (req, res, next) => {
        if (fs_1.default.existsSync(rootDirectory)) {
            try {
                fs_1.default.rmdirSync(rootDirectory, { recursive: true });
                res.status(200).json({
                    state: true,
                    msg: 'Directory remove successfully.',
                    error: null
                });
            }
            catch (error) {
                res.status(200).json({
                    state: false,
                    msg: 'Directory remove terminated!',
                    error: error
                });
            }
        }
        next();
    };
};
exports.default = rmdir;
