import { Router } from "express";
import { getHomesToAuction } from "../controllers/aste.js";

const router = Router()

router.get('/aste/:type/Rimini', getHomesToAuction)

'http://localhost:3000/aste/Case%20-%20Appartamenti/Rimini'


export default router