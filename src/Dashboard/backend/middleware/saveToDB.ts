import { Request, Response, NextFunction } from "express";
import { Model, Schema } from "mongoose";
import * as path from 'path';

const saveToDB = (model: Model<any>) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const storageDir = process.env.STORAGE_PATH
  try {
    const data = req.body;
    const newItem = new model({...data});
    const saveItem = newItem.save();
    
    res.status(201).json({
      message: "Data saved to MongoDB",
      data: req.body,
    });
    console.log('success')
  } catch (error) {
    res.status(500).json({
      msg: "An error occurred while saving to MongoDB",
      error: req.body,
    });
  }
};


export default saveToDB;
