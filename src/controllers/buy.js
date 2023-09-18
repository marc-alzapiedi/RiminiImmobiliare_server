import { getAllBuyType } from "../domain/buy.js";
import { sendDataResponse, sendErrorResponse } from "../utils/responses.js";


export const getHomesToBuy = async (req, res) => {
    const type = req.params.type
    const homesToBuy = await getAllBuyType(type)
    return sendDataResponse(res, 200, homesToBuy)
}

