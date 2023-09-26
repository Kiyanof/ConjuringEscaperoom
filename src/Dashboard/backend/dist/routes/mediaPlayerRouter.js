"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mediaPlayerController_1 = require("../controllers/mediaPlayerController");
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
router.post('/add', mediaPlayerController_1.addPlaylist);
router.post('/:playlist/upload', mediaPlayerController_1.addMedia);
router.get('/:playlist/media/:media/get', mediaPlayerController_1.readMedia);
router.put('/:playlist/rename/:oldName/:newName', mediaPlayerController_1.renameFile);
router.delete('/:playlist/delete', mediaPlayerController_1.deletePlaylist);
router.delete('/:playlist/media/:name/delete', mediaPlayerController_1.deleteMedia);
router.get('/getAll', mediaPlayerController_1.listPlaylist);
router.get('/:playlist/listMedia', mediaPlayerController_1.listMedia);
exports.default = router;
