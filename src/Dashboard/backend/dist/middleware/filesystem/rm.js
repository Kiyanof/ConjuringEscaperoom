"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rm = (dir) => {
    const rootDirectory = path_1.default.join(__dirname, `../../storage/${dir}`);
    return (req, res, next) => {
        if (fs_1.default.existsSync(rootDirectory)) {
            try {
                fs_1.default.unlinkSync(rootDirectory);
                res.status(200).json({
                    state: true,
                    msg: 'File remove successfully.',
                    error: null
                });
            }
            catch (error) {
                res.status(200).json({
                    state: false,
                    msg: 'File remove terminated!',
                    error: error
                });
            }
        }
        next();
    };
};
exports.default = rm;
