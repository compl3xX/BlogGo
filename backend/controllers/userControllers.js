const bcrypt = require('bcrypt');
const userModel = require('../models/userModel')
const { sendToken } = require('../utilis/token')
const CustomError = require('../utilis/customError')
const asyncHandler = require('express-async-handler')


const signUp = async (req, res) => {

    const { username, email, password } = req.body;

    const user = await userModel.create({ username, email, password })

    sendToken(user, 200, res)

}

const signIn = async (req, res, next) => {

    const { username, password } = req.body

    const searchedUser = await userModel.findOne({ username })

    if (!searchedUser) {
        return next(new CustomError("Please check your credentials", 404))
    }

    const matchPassword = await bcrypt.compare(password, searchedUser.password);

    if (matchPassword) {
        sendToken(searchedUser, 200, res)
    } else {
        return next(new CustomError("Password is incorrect", 404))
    }

}

const userProfile = async (req, res, next) => {

    return res.status(200).json({
        success: true,
        res: req.user
    })

}

module.exports = { signUp, signIn, userProfile }