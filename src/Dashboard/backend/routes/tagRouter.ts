import express, { Request, Response, Router } from "express"
import getAll from "../middleware/getAll";
import updateByID from "../middleware/updateByID";
import deleteByID from "../middleware/deleteByID";
import saveToDB from "../middleware/saveToDB";
import Tag from "../models/tagModel";

const router:Router = express.Router()

router.use((req: Request, res: Response, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

router.get('/getAll', getAll(Tag))
router.post('/set/:id', updateByID(Tag))
router.post('/delete/:id', deleteByID(Tag))
router.post('/add', saveToDB(Tag))


export default router