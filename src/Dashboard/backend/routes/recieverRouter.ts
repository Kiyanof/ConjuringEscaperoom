import express, { Request, Response, Router } from "express"
import getAll from "../middleware/getAll";
import Reciever from "../models/recieverModel";
import updateByID from "../middleware/updateByID";
import deleteByID from "../middleware/deleteByID";
import saveToDB from "../middleware/saveToDB";

const router:Router = express.Router()

router.use((req: Request, res: Response, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

router.get('/getAll', getAll(Reciever))
router.post('/set/:id', updateByID(Reciever))
router.post('/delete/:id', deleteByID(Reciever))
router.post('/add', saveToDB(Reciever))

export default router