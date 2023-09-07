import { NextFunction, Request, Response } from "express";
import Cross from "../models/crossModel";

export const addCross = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newItem = req.body
        const insertProcess = await new Cross(newItem).save()
        if(!insertProcess){
            res.status(200).json({
                status: false,
                error: 'insertProcess Terminated!', 
                newItem: null,
            })
        }

        res.status(200).json({
            status: true,
            error: null, 
            newItem: newItem,
        })
    } catch (error) {
        res.status(200).json({
            status: false,
            error: error, 
            newItem: null,
        })
    }
}

export const deleteCrossByID = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        // Check if the document with the provided ID exists
        const existingCross = await Cross.findById(id);
        if (!existingCross) {
            return res.status(404).json({
                status: false,
                error: 'Document not found',
                deletedDocument: null,
            });
        }

        // Delete the document by ID
        const deleteResult = await Cross.findByIdAndRemove(id);

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
}

export const getAllCross = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Cross.find()
        res.status(200).json({
            state: true,
            msg: 'Query Successful',
            result: result,
            error: null,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            msg: 'Query Unsuccessful',
            result: null,
            error: error,
        })
    }
}

export const setCrossByID = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const updatedCollection = req.body
        const updateProcess = await Cross.findByIdAndUpdate(
            id,
            updatedCollection,
            {new: true},
        )

        if(!updateProcess){
            return res.status(404).json({
                status: false,
                error: 'updateProcess break!',
                newProcess: null,

            })
        }

        res.status(200).json({
            status: true,
            error: null,
            newProcess: updateProcess,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            error: error,
            newProcess: null,
        })
    }
}
