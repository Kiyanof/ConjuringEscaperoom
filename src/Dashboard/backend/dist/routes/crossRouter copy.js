"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crossController_1 = require("../controllers/crossController");
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
router.get('/getAll', crossController_1.getAllCross);
router.post('/set/:id', crossController_1.setCrossByID);
router.post('/delete/:id', crossController_1.deleteCrossByID);
router.post('/add', crossController_1.addCross);
exports.default = router;
