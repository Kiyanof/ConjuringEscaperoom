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
exports.fetchFiles = void 0;
const downloadFiles_1 = __importDefault(require("../middleware/filesystem/downloadFiles"));
const fetchFiles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            state: true,
            msg: 'Fetch music files are successful',
            files: (0, downloadFiles_1.default)('goblinFinderMusicFiles')
        });
    }
    catch (error) {
        res.status(500).json({
            state: false,
            msg: 'Error in fetchFiles function controller',
            files: null,
        });
    }
});
exports.fetchFiles = fetchFiles;
