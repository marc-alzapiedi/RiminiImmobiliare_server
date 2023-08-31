import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getAllRentType(type){
    return await prisma.rent.findMany({
        where: {
            type: type
        }
    })
}