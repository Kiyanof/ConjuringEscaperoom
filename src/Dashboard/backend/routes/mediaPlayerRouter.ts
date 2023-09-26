import express, { Request, Response, Router } from "express"
import { addMedia, addPlaylist, deleteMedia, deletePlaylist, listMedia, listPlaylist, readMedia, renameFile } from "../controllers/mediaPlayerController";

const router:Router = express.Router()

router.use((req: Request, res: Response, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

router.post('/add', addPlaylist);
router.post('/:playlist/upload', addMedia);
router.get('/:playlist/media/:media/get', readMedia);
router.put('/:playlist/rename/:oldName/:newName', renameFile);
router.delete('/:playlist/delete', deletePlaylist);
router.delete('/:playlist/media/:name/delete', deleteMedia);
router.get('/getAll', listPlaylist);
router.get('/:playlist/listMedia', listMedia);


export default router