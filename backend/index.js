const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb = require('./config/db.js')
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/errorMiddleware.js')
const indexRouter = require('./routes/indexRoute.js')


dotenv.config()

const app = express();

connectDb();

const port = 4000;

app.use(express.json())

app.use(cookieParser())

app.use(cors())

app.use('/api', indexRouter)

app.use(errorMiddleware)

app.listen(port, () => {
  console.log('Backend is running on ', port)
})
