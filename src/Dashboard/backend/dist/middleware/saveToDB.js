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
Object.defineProperty(exports, "__esModule", { value: true });
const saveToDB = (model) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const storageDir = process.env.STORAGE_PATH;
    try {
        const data = req.body;
        const newItem = new model(Object.assign({}, data));
        const saveItem = newItem.save();
        res.status(201).json({
            message: "Data saved to MongoDB",
            data: req.body,
        });
        console.log('success');
    }
    catch (error) {
        res.status(500).json({
            msg: "An error occurred while saving to MongoDB",
            error: req.body,
        });
    }
});
exports.default = saveToDB;
