import { createUser, loginUser } from "../controllers/user.js";
import { Router } from "express";

const router = Router()

router.post('/register', createUser)
router.post('/login', loginUser)

export default router
