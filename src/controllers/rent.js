import { getAllRentType } from "../domain/rent.js";

import { sendDataResponse, sendErrorResponse } from "../utils/responses.js";

export const getHomesToRent = async (req, res) => {
    const type = req.params.type
    const homesToRent = await getAllRentType(type)
    return sendDataResponse(res, 200, homesToRent)
}
