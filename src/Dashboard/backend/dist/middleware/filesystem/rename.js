"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const rename = (newdir, olddir) => {
    let newDir = path_1.default.join(__dirname, `../../storage/${newdir}`);
    const oldDir = path_1.default.join(__dirname, `../../storage/${olddir}`);
    return (req, res, next) => {
        try {
            if (fs_1.default.existsSync(oldDir)) {
                fs_1.default.renameSync(oldDir, newDir);
                res.status(200).json({
                    state: true,
                    msg: "Directory rename successfully.",
                    error: null,
                });
            }
        }
        catch (error) {
            res.status(200).json({
                state: false,
                msg: "Directory rename terminated!",
                error: error,
            });
        }
        next();
    };
};
exports.default = rename;
