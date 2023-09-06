"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const date_1 = require("../../utils/date");
const uploadFile = (uploadDir = '', prefix = (0, date_1.getDate)() + '_') => {
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path_1.default.join(__dirname, `../../storage/${uploadDir}`));
        },
        filename: (req, file, cb) => {
            cb(null, prefix + file.originalname);
        },
    });
    return (0, multer_1.default)({ storage });
};
exports.default = uploadFile;
