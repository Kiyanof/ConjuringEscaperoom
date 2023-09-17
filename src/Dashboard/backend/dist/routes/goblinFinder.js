"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const goblinFinderController_1 = require("../controllers/goblinFinderController");
const uploadFiles_1 = __importDefault(require("../middleware/filesystem/uploadFiles"));
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
router.get('/musicFiles', goblinFinderController_1.fetchFiles);
router.get('/remove/:filename', goblinFinderController_1.removeFileByID);
router.post('/add', (0, uploadFiles_1.default)('goblinFinderMusicFiles', '').array('files', 10), goblinFinderController_1.addFiles);
exports.default = router;
