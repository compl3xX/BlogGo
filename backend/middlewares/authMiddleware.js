const jwt = require('jsonwebtoken')
const CustomError = require('../utilis/customError')
const asyncHandler = require('express-async-handler')
const userModel = require("../models/userModel")

const { isTokenPresent, getAccessTokenFromHeader } = require('../utilis/token')


const accessCheck = asyncHandler(async (req, res, next) => {


    const { JWT_SECRET_KEY } = process.env


    if (!isTokenPresent(req)) {
        return next(new CustomError('You are not authorized', 401))
    }

    const accessToken = getAccessTokenFromHeader(req)

    const userDetail = jwt.verify(accessToken, JWT_SECRET_KEY)

    const userFromDb = await userModel.findById(userDetail.id)

    userFromDb.password = undefined

    if (!userFromDb) {
        return next(new CustomError('You are not authorized', 401))
    }
    
    req.user = userFromDb

    next()

})

module.exports = accessCheck 