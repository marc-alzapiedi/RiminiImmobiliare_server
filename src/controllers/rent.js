import { getAllRentType } from "../domain/rent.js";

const STATUS_MESSAGES = {
    200: 'success',
    201: 'success',
    400: 'fail',
    401: 'fail',
    403: 'fail',
    404: 'fail',
    500: 'error',
    409: 'fail'
}

export const getHomesToRent = async (req, res) => {
    const type = req.params.type
    const homesToRent = await getAllRentType(type)
    return res.status(200).json({
        status: STATUS_MESSAGES[200],
        data: homesToRent
    })
}
