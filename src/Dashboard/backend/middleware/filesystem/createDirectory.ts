import fs from "fs";
import path from "path";
import { Request, Response, NextFunction } from "express";

/*
    Create directory on ./storage/{newDirs} to control access on storage dir
*/
const storageDir = process.env.STORAGE_PATH;

const createDir = (directroyPath: string) => {
  const fullPath = path.join(__dirname, `../../${storageDir}/`, directroyPath);
  return (req: Request, res: Response, next: NextFunction) => {
    if (!fs.existsSync(fullPath)) {
      try {
        fs.mkdirSync(fullPath, { recursive: true });
        res.status(200).json({
          state: true,
          msg: "Directory create successfully.",
          error: null,
        });
      } catch (error) {
        res.status(500).json({
          state: false,
          msg: "Error creating directory!",
          error: error,
        });
      }
    } else {
      res.status(200).json({
        state: false,
        msg: "Directory already exists.",
        error: null,
      });
    }
  };
};

export default createDir;
