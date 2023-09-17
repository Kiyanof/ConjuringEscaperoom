import { NextFunction, Request, Response } from "express";
import path from "path";
import fs from "fs";
import uploadFile from "../middleware/filesystem/uploadFiles";

const dirPath = "goblinFinderMusicFiles";

export const fetchFiles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const mp3Directory = path.join(__dirname, `../storage/${dirPath}`);

    fs.readdir(mp3Directory, (error, files) => {
      if (error) {
        console.error("Error reading directory:", error);
        res.status(500).json({
          msg: "Internal Server Error during reading filesystem",
          error: error,
        });
      }

      const mp3Files = files.filter((file) => file.endsWith(".mp3"));

      res.status(200).json({
        state: true,
        msg: "Fetch music files are successful",
        files: mp3Files,
      });
    });
  } catch (error) {
    res.status(500).json({
      state: false,
      msg: "Error in fetchFiles function controller",
      files: null,
    });
  }
};

export const removeFileByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const filename = req.params.filename;
  const mp3Directory = path.join(__dirname, `../storage/${dirPath}`, filename);

  fs.unlink(mp3Directory, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      res.status(500).json({ message: 'Error deleting file' });
    } else {
      console.log('File deleted successfully:', filename);
      res.status(200).json({ message: 'File deleted successfully' });
    }
  });
};

export const addFiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      state: true,
      msg: 'uploads are successful'
    })
  } catch (error) {
    res.status(200).json({
      state: false,
      msg: 'uploads faild'
    })
  }
  
  
}
