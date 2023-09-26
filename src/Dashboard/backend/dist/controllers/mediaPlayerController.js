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
exports.listMedia = exports.listPlaylist = exports.deleteMedia = exports.deletePlaylist = exports.renameFile = exports.readMedia = exports.addMedia = exports.addPlaylist = void 0;
const createDirectory_1 = __importDefault(require("../middleware/filesystem/createDirectory"));
const uploadFiles_1 = __importDefault(require("../middleware/filesystem/uploadFiles"));
const rmdir_1 = __importDefault(require("../middleware/filesystem/rmdir"));
const rm_1 = __importDefault(require("../middleware/filesystem/rm"));
const ls_1 = __importDefault(require("../middleware/filesystem/ls"));
const rename_1 = __importDefault(require("../middleware/filesystem/rename"));
const path_1 = __importDefault(require("path"));
const addPlaylist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, createDirectory_1.default)(`mediaplayer/${req.body.title}`)(req, res, next);
});
exports.addPlaylist = addPlaylist;
const addMedia = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, uploadFiles_1.default)(`/mediaplayer/${req.params.playlist}/`, '').array('files', 32)(req, res, next);
});
exports.addMedia = addMedia;
const readMedia = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const media = req.params.media;
    const playlist = req.params.playlist;
    const filePath = path_1.default.normalize(path_1.default.join(__dirname, '../storage/mediaplayer', playlist, media));
    res.sendFile(filePath);
});
exports.readMedia = readMedia;
const renameFile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.playlist === 'null') {
        (0, rename_1.default)(`/mediaplayer/${req.params.newName}`, `/mediaplayer/${req.params.oldName}`)(req, res, next);
    }
    else {
        (0, rename_1.default)(`/mediaplayer/${req.params.playlist}/${req.params.newName}`, `/mediaplayer/${req.params.playlist}/${req.params.oldName}`)(req, res, next);
    }
});
exports.renameFile = renameFile;
const deletePlaylist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, rmdir_1.default)(`/mediaplayer/${req.params.playlist}`)(req, res, next);
});
exports.deletePlaylist = deletePlaylist;
const deleteMedia = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, rm_1.default)(`/mediaplayer/${req.params.playlist}/${req.params.name}`)(req, res, next);
});
exports.deleteMedia = deleteMedia;
exports.listPlaylist = (0, ls_1.default)(`/mediaplayer`);
const listMedia = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, ls_1.default)(`/mediaplayer/${req.params.playlist}`)(req, res, next);
});
exports.listMedia = listMedia;
