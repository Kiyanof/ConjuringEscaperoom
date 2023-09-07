"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crossModel_1 = __importDefault(require("../../models/cross/crossModel"));
const getAllCross = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield crossModel_1.default.find();
        res.status(200).json({
            state: true,
            msg: 'Query Successful',
            result: result,
            error: null,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            msg: 'Query Unsuccessful',
            result: null,
            error: error,
        });
    }
});
const setCrossByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedCollection = req.body;
        const updateProcess = yield crossModel_1.default.findByIdAndUpdate(id, updatedCollection, { new: true });
        if (!updateProcess) {
            return res.status(404).json({
                status: false,
                error: 'updateProcess break!',
                newProcess: null,
            });
        }
        res.status(200).json({
            status: true,
            error: null,
            newProcess: updateProcess,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            error: error,
            newProcess: null,
        });
    }
});
