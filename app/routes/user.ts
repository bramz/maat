import { Router } from "express"
import { ProfileControl } from "../controllers/profile-control"


const router = Router()

router.get("/profile/:id", ProfileControl.index)


export default router