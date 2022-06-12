import { Router } from "express"
import { AuthControl } from '../controllers/auth-control'
import { UserControl } from "../controllers/user-control"

const router = Router()

router.post("/login", AuthControl.login)
router.post("/register", UserControl.register)

export default router