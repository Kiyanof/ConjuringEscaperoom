"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    deviceName: String,
    ip: String,
    BlueUUID: String,
    RSSI: String,
    State: Boolean,
});
const Sender = mongoose_1.default.model('Sender', schema);
exports.default = Sender;
