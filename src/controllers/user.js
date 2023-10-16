import { PrismaClient } from '@prisma/client'
import { sendDataResponse, sendErrorResponse } from '../utils/responses.js'
import { JWT_SECRET, JWT_EXPIRY } from '../utils/config.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
//import bcrypt from 'bcrypt'

import {createNewUser, findUser} from '../domain/user.js'

const prisma = new PrismaClient()
const saltRounds = 10




export const getUser = async(req, res) => {
    const {email} = req.params
    console.log(email)

    if (email){
        try{
            const foundUser = await findUser(email)
           
            if(!foundUser) {
                return sendErrorResponse(res, 404, 'User does not exist')
            }

            return sendDataResponse(res, 200, foundUser)

        } catch (err) {
            return sendErrorResponse(res, 500, 'Unable to GET user')
        }

    }
}

export const createUser = async(req, res) => {
    console.log(req.body)
    const {email, password} = req.body

    

    if (email && password) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                try {

                    const user = await createNewUser(username, hash)

                    sendDataResponse(res, 201, {user: user.username,
                    registerStatus: 'User created!'})

                


                } catch (err) {
                    const error = "The user already exists"
                    console.log(error, err)
                    sendErrorResponse(res, 409, {error})
                }
            })
        })
    }

}

export const loginUser = async(req, res) => {
    console.log(req.body)
    const {usernameLogin, passwordLogin} = req.body
    let error

    if (usernameLogin && passwordLogin) {


        try{
            const foundUser = await findUser(usernameLogin)
            bcrypt.compare(passwordLogin, foundUser.password, async function(err, result) {
                      
                            
                const token = jwt.sign({usernameLogin}, JWT_SECRET, {expiresIn: JWT_EXPIRY})
                console.log(result)
        
                return sendDataResponse(res, 200, token)
                     
                
            })
            
        } catch (err){
            console.log(err)
            // error = "Incorrect password"
    
            // sendErrorResponse(res, 409, error)
        }





        // const foundUser = await prisma.user.findUnique({
        //     where: {
        //         username: usernameLogin
        //     }
        // })

        // if (foundUser) {
        //     bcrypt.compare(passwordLogin, foundUser.password, async function(err, passwordsMatch) {
        //         if (passwordsMatch) {
                    
        //             const token = jwt.sign({usernameLogin}, JWT_SECRET, {expiresIn: JWT_EXPIRY})

        //             return res.json({token})
        //         } else {
        //             error = "Incorrect password"

        //             sendErrorResponse(res, 409, error)
        //         }
        //     })
        // } else {
        //     error = "Username not found"

        //     sendErrorResponse(res, 409, error)

        // }
    }
}
