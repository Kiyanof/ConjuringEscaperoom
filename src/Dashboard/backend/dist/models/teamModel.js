"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: String,
    exprience: Number,
    date: String,
    reference: String,
});
const Team = mongoose_1.default.model('Team', schema);
exports.default = Team;
