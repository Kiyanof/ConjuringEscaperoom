import { Request, Response, NextFunction } from "express";
import { Model, Schema } from "mongoose";

const getAll = (model: Model<any>) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    try {
        const result = await model.find()
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
};


export default getAll;
