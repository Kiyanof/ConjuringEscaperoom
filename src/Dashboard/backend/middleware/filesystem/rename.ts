import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";

const rename = (newdir: string, olddir: string) => {

  let newDir = path.join(__dirname, `../../storage/${newdir}`);
  const oldDir = path.join(__dirname, `../../storage/${olddir}`);

  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (fs.existsSync(oldDir)) {
        fs.renameSync(oldDir, newDir);
        res.status(200).json({
          state: true,
          msg: "Directory rename successfully.",
          error: null,
        });
      }
    } catch (error) {
      res.status(200).json({
        state: false,
        msg: "Directory rename terminated!",
        error: error,
      });
    }

    next();
  };
};

export default rename;
