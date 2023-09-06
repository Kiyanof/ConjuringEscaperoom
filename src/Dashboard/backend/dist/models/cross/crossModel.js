"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bluetoothSchema = new mongoose_1.default.Schema({
    DeviceUUID: String,
    ServiceUUID: String,
});
const ScoreSchema = new mongoose_1.default.Schema({
    damage: Number,
    task: Number,
    cross: Number,
    relay: Number,
});
const RSSI = new mongoose_1.default.Schema({
    signal: Number,
});
const schema = new mongoose_1.default.Schema({
    title: String,
    ip: String,
    bluetoothUUID: bluetoothSchema,
    SensitiveBluetoothUUID: [bluetoothSchema],
    active: Boolean,
    score: Number,
    injured: Number,
    buzzerDelay: Number,
    scoreVal: ScoreSchema,
    toCrossRSSI: [RSSI],
    toRelayRSSI: [RSSI],
});
const Cross = mongoose_1.default.model('Cross', schema);
