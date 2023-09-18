import { getAllAuctionType } from "../domain/aste.js";

import { sendDataResponse, sendErrorResponse } from "../utils/responses.js";



export const getHomesToAuction = async (req, res) => {
    const type = req.params.type
    const homesToAuction = await getAllAuctionType(type)
    return sendDataResponse(res, 200, homesToAuction)
}
