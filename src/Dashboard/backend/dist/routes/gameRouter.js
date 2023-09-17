"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAll_1 = __importDefault(require("../middleware/getAll"));
const playerModel_1 = __importDefault(require("../models/playerModel"));
const updateByID_1 = __importDefault(require("../middleware/updateByID"));
const deleteByID_1 = __importDefault(require("../middleware/deleteByID"));
const saveToDB_1 = __importDefault(require("../middleware/saveToDB"));
const teamModel_1 = __importDefault(require("../models/teamModel"));
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
router.get('/team/getAll', (0, getAll_1.default)(teamModel_1.default));
router.get('/player/getAll', (0, getAll_1.default)(playerModel_1.default));
router.post('/Player/set/:id', (0, updateByID_1.default)(playerModel_1.default));
router.post('/team/set/:id', (0, updateByID_1.default)(teamModel_1.default));
router.post('/player/delete/:id', (0, deleteByID_1.default)(playerModel_1.default));
router.post('/team/delete/:id', (0, deleteByID_1.default)(teamModel_1.default));
router.post('/team/add', (0, saveToDB_1.default)(teamModel_1.default));
router.post('/player/add', (0, saveToDB_1.default)(playerModel_1.default));
exports.default = router;
