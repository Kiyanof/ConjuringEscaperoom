"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const downloadFiles = (downloadDir = "") => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(mp3Directory);
    try {
        fs_1.default.readdir(mp3Directory, (error, files) => {
            if (error) {
                console.error("Error reading directory:", error);
                res.status(500).json({
                    msg: "Internal Server Error during reading filesystem",
                    error: error,
                });
            }
            files.forEach((item, index) => {
                console.log(item);
            });
            const mp3Files = files.filter((file) => file.endsWith(".mp3"));
            res.status(200).json({ mp3Files });
        });
    }
    catch (error) {
        console.log("inja");
        console.error("Error fetching MP3 files:", error);
        res.status(500).json({ msg: "Internal Server Error", error: error });
    }
});
exports.default = downloadFiles;
