import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAllBuyType(type){
    return await prisma.buy.findMany({
        where: { type: type}
    })
}

