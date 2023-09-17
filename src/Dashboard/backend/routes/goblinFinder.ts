import express, { Request, Response, Router } from "express"
import { addFiles, fetchFiles, removeFileByID } from "../controllers/goblinFinderController";
import uploadFile from "../middleware/filesystem/uploadFiles";

const router:Router = express.Router()

router.use((req: Request, res: Response, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

router.get('/musicFiles', fetchFiles)
router.get('/remove/:filename', removeFileByID)
router.post('/add', uploadFile('goblinFinderMusicFiles', '').array('files', 10), addFiles)



export default router