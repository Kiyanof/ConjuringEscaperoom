"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAll_1 = __importDefault(require("../middleware/getAll"));
const updateByID_1 = __importDefault(require("../middleware/updateByID"));
const deleteByID_1 = __importDefault(require("../middleware/deleteByID"));
const saveToDB_1 = __importDefault(require("../middleware/saveToDB"));
const tagModel_1 = __importDefault(require("../models/tagModel"));
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
router.get('/getAll', (0, getAll_1.default)(tagModel_1.default));
router.post('/set/:id', (0, updateByID_1.default)(tagModel_1.default));
router.post('/delete/:id', (0, deleteByID_1.default)(tagModel_1.default));
router.post('/add', (0, saveToDB_1.default)(tagModel_1.default));
exports.default = router;
