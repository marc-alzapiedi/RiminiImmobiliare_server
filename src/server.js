import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import buyRouter from './routes/buy.js'
import rentRouter from './routes/rent.js'
import auctionRouter from './routes/aste.js'
import userRouter from './routes/user.js'


const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', buyRouter)
app.use('/', rentRouter)
app.use('/', auctionRouter)
app.use('/', userRouter)

app.get('*', (req, res) => {
    res.status(404).json({
      status: 'fail',
      data: {
        resource: 'Not found'  
      }
    })
})

export default app
