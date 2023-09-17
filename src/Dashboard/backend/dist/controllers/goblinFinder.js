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
exports.removeFileByID = exports.fetchFiles = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const dirPath = "goblinFinderMusicFiles";
const fetchFiles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mp3Directory = path_1.default.join(__dirname, `../storage/${dirPath}`);
        fs_1.default.readdir(mp3Directory, (error, files) => {
            if (error) {
                console.error("Error reading directory:", error);
                res.status(500).json({
                    msg: "Internal Server Error during reading filesystem",
                    error: error,
                });
            }
            const mp3Files = files.filter((file) => file.endsWith(".mp3"));
            res.status(200).json({
                state: true,
                msg: "Fetch music files are successful",
                files: mp3Files,
            });
        });
    }
    catch (error) {
        res.status(500).json({
            state: false,
            msg: "Error in fetchFiles function controller",
            files: null,
        });
    }
});
exports.fetchFiles = fetchFiles;
const removeFileByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.params.filename;
    const mp3Directory = path_1.default.join(__dirname, `../storage/${dirPath}`, filename);
    fs_1.default.unlink(mp3Directory, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            res.status(500).json({ message: 'Error deleting file' });
        }
        else {
            console.log('File deleted successfully:', filename);
            res.status(200).json({ message: 'File deleted successfully' });
        }
    });
});
exports.removeFileByID = removeFileByID;
