import { Router } from "express";
import { getHomesToBuy } from "../controllers/buy.js";

const router = Router()

router.get('/compra/:type/Rimini', getHomesToBuy)

'http://localhost:3000/compra/Case%20-%20Appartamenti/Rimini'

export default router