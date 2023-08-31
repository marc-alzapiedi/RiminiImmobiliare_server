import { Router } from "express";
import { getHomesToRent } from "../controllers/rent.js";

const router = Router()

router.get('/affitta/:type/Rimini', getHomesToRent)

'http://localhost:3000/affitta/Case%20-%20Appartamenti/Rimini'


export default router