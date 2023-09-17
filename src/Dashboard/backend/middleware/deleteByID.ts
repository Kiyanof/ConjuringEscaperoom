import { Request, Response, NextFunction } from "express";
import { Model, Schema } from "mongoose";

const deleteByID = (model: Model<any>) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    // Check if the document with the provided ID exists
    const existingCross = await model.findById(id);
    if (!existingCross) {
        return res.status(404).json({
            status: false,
            error: 'Document not found',
            deletedDocument: null,
        });
    }

    // Delete the document by ID
    const deleteResult = await model.findByIdAndRemove(id);

    if (deleteResult) {
        res.status(200).json({
            status: true,
            error: null,
            deletedDocument: deleteResult,
        });
    } else {
        return res.status(500).json({
            status: false,
            error: 'Failed to delete document',
            deletedDocument: null,
        });
    }
} catch (error) {
    res.status(200).json({
        status: false,
        error: error, 
        newItem: null,
    })
}
};


export default deleteByID;
