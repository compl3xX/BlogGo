const express = require('express')

const router = express.Router()

const userRoute = require('./userRoute')

const postRoute = require('./postRoute')


router.use('/user', userRoute)

router.use('/post', postRoute)



module.exports = router