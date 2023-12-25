const bcrypt = require('bcrypt');
const userModel = require('../models/userModel')
const { sendToken } = require('../utilis/token')


const signUp = async (req, res) => {

    const { username, email, password } = req.body;

    const encryptPassword = await bcrypt.hash(password, 8)

    const user = await userModel.create({ username, email, password: encryptPassword})

    sendToken(user, 200, res)

}

const signIn = async (req, res) => {

    const secretKey = process.env.SECRET_KEY;

    const { username, password } = req.body

    const searchedUser = await userModel.findOne({ username })

    const matchPassword = bcrypt.compare(password, searchedUser.password);

    if (matchPassword) {

        // const token = jwt.sign({ username,email:searchedUser.email }, secretKey,{ expiresIn: '1h' })

        // res.cookie('token', token, { httpOnly: true})

        // res.json("SignIn Successful")

        sendToken(searchedUser, 200, res)


    } else {
        res.json('Password is incorrect')
    }


}

module.exports = { signUp, signIn }