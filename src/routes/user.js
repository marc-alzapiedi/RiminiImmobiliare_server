import { createUser, loginUser, getUser } from "../controllers/user.js";
import { Router } from "express";

const router = Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/registerlogin/:email', getUser)

export default router
