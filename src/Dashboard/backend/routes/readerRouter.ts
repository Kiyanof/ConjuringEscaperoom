import express, { Request, Response, Router } from "express"
import getAll from "../middleware/getAll";
import updateByID from "../middleware/updateByID";
import deleteByID from "../middleware/deleteByID";
import saveToDB from "../middleware/saveToDB";
import Reader from "../models/tagReaderModel";

const router:Router = express.Router()

router.use((req: Request, res: Response, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

router.get('/getAll', getAll(Reader))
router.post('/set/:id', updateByID(Reader))
router.post('/delete/:id', deleteByID(Reader))
router.post('/add', saveToDB(Reader))


export default router