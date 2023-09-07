"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ScoreSchema = new mongoose_1.default.Schema({
    damage: Number,
    task: Number,
    cross: Number,
    relay: Number,
});
const schema = new mongoose_1.default.Schema({
    title: String,
    ip: String,
    bluetoothUUID: String,
    SensitiveCross: [Boolean],
    SensitiveRelay: [Boolean],
    active: Boolean,
    score: Number,
    injured: Number,
    buzzerDelay: Number,
    scoreVal: ScoreSchema,
    toCrossRSSI: [Number],
    toRelayRSSI: [Number],
});
const Cross = mongoose_1.default.model('Cross', schema);
exports.default = Cross;
