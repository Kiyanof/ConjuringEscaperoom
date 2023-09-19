"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    age: String,
    name: String,
    exprience: String,
    date: String,
    reference: String,
});
const Player = mongoose_1.default.model('Player', schema);
exports.default = Player;
