import { Request, Response, NextFunction } from "express";
import { Model, Schema } from "mongoose";

const updateByID = (model: Model<any>) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {id} = req.params
    const updatedCollection = req.body
    const updateProcess = await model.findByIdAndUpdate(
        id,
        {$set: {...updatedCollection}},
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
};


export default updateByID;
