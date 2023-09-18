import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export async function createNewUser(username, password){
    return await prisma.user.create({
        data: {
            username,
            password
        }
    })
}

export async function findUser(username){
    return await prisma.user.findUnique({
        where: {
            username
        }
    })
}

