import express, { Request, Response, Router } from "express"
import getAll from "../middleware/getAll";
import Player from "../models/playerModel";
import updateByID from "../middleware/updateByID";
import deleteByID from "../middleware/deleteByID";
import saveToDB from "../middleware/saveToDB";
import Team from "../models/teamModel";

const router:Router = express.Router()

router.use((req: Request, res: Response, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

router.get('/team/getAll', getAll(Team))
router.get('/player/getAll', getAll(Player))
router.post('/Player/set/:id', updateByID(Player))
router.post('/team/set/:id', updateByID(Team))
router.post('/player/delete/:id', deleteByID(Player))
router.post('/team/delete/:id', deleteByID(Team))
router.post('/team/add', saveToDB(Team))
router.post('/player/add', saveToDB(Player))


export default router