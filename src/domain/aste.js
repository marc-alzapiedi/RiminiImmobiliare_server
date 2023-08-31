import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getAllAuctionType(type){
    return await prisma.auction.findMany({
        where: {
            type: type
        }
    })
}