import { NextFunction, Request, Response } from "express";
import createDir from "../middleware/filesystem/createDirectory";
import uploadFile from "../middleware/filesystem/uploadFiles";
import rmdir from "../middleware/filesystem/rmdir";
import rm from "../middleware/filesystem/rm";
import ls from "../middleware/filesystem/ls";
import rename from "../middleware/filesystem/rename";
import path from "path";


export const addPlaylist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    createDir(`mediaplayer/${req.body.title}`)(req, res, next)
}

export const addMedia = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    uploadFile(`/mediaplayer/${req.params.playlist}/`, '').array('files', 32)(req, res, next)
}

export const readMedia = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const media = req.params.media;
    const playlist = req.params.playlist;
    const filePath = path.normalize(path.join(__dirname, '../storage/mediaplayer', playlist, media));
    res.sendFile(filePath)
  }

export const renameFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    if(req.params.playlist === 'null'){
        rename(
            `/mediaplayer/${req.params.newName}`,
            `/mediaplayer/${req.params.oldName}`
          )(req, res, next)
    }
    else {
        rename(
            `/mediaplayer/${req.params.playlist}/${req.params.newName}`,
            `/mediaplayer/${req.params.playlist}/${req.params.oldName}`
          )(req, res, next)
    }
  
}

export const deletePlaylist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    rmdir(`/mediaplayer/${req.params.playlist}`)(req, res, next)
}

export const deleteMedia = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    rm(`/mediaplayer/${req.params.playlist}/${req.params.name}`)(req, res, next)
}

export const listPlaylist = ls(`/mediaplayer`);

export const listMedia = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    ls(`/mediaplayer/${req.params.playlist}`)(req, res, next)
}
