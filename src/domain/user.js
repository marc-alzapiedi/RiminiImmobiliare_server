import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export async function createNewUser(email, password){
    return await prisma.user.create({
        data: {
            email,
            password
        }
    })
}

export async function findUser(email){
    return await prisma.user.findUnique({
        where: {
            email
        }
    })
}

