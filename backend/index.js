const express = require('express')
const userRouter = require('./routes/userRoute.js')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb =require('./config/db.js')
const cookieParser = require('cookie-parser')



dotenv.config()

const app = express();

connectDb();

const port = 4000;

app.use(express.json())
app.use(cookieParser())

app.use(cors())

app.use(userRouter)

app.listen(port, () => {
    console.log('Backend is running on ', port)
})
