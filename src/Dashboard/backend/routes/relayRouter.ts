import express, { Request, Response, Router } from "express"
import getAll from "../middleware/getAll";
import updateByID from "../middleware/updateByID";
import deleteByID from "../middleware/deleteByID";
import saveToDB from "../middleware/saveToDB";
import Relay from "../models/relayModel";

const router:Router = express.Router()

router.use((req: Request, res: Response, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

router.get('/getAll', getAll(Relay))
router.post('/set/:id', updateByID(Relay))
router.post('/delete/:id', deleteByID(Relay))
router.post('/add', saveToDB(Relay))


export default router