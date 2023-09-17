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
const deleteByID = (model) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Check if the document with the provided ID exists
        const existingCross = yield model.findById(id);
        if (!existingCross) {
            return res.status(404).json({
                status: false,
                error: 'Document not found',
                deletedDocument: null,
            });
        }
        // Delete the document by ID
        const deleteResult = yield model.findByIdAndRemove(id);
        if (deleteResult) {
            res.status(200).json({
                status: true,
                error: null,
                deletedDocument: deleteResult,
            });
        }
        else {
            return res.status(500).json({
                status: false,
                error: 'Failed to delete document',
                deletedDocument: null,
            });
        }
    }
    catch (error) {
        res.status(200).json({
            status: false,
            error: error,
            newItem: null,
        });
    }
});
exports.default = deleteByID;
