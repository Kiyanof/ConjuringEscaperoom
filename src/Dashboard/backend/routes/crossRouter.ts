import express, { Request, Response, Router } from "express"
import { addCross, deleteCrossByID, getAllCross, setCrossByID } from "../controllers/crossController";

const router:Router = express.Router()

router.use((req: Request, res: Response, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
})

router.get('/getAll', getAllCross)
router.post('/set/:id', setCrossByID)
router.post('/delete/:id', deleteCrossByID)
router.post('/add', addCross)

export default router