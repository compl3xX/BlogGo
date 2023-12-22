const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const signUp = async (req, res) => {

    const secretKey = process.env.SECRET_KEY;

    const { username, email, password } = req.body;

    const token = jwt.sign({ username, email }, secretKey)

    const encryptPassword = await bcrypt.hash(password, 8)

    await userModel.create({ username, email, password: encryptPassword, token })

    res.json(token)

}

const signIn = async (req, res) => {

    const secretKey = process.env.SECRET_KEY;

    const { username, password } = req.body

    const searchedUser = await userModel.findOne({ username })

    const matchPassword = bcrypt.compare(password, searchedUser.password);

    if (matchPassword) {

        const token = jwt.sign({ username,email:searchedUser.email }, secretKey,{ expiresIn: '1h' })

        res.cookie('token', token, { httpOnly: true})

        res.json("SignIn Successful")


    } else {
        res.json('Password is incorrect')
    }


}

module.exports = { signUp, signIn }