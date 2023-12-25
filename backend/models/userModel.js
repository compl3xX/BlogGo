const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

const userModel = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    },
    token: {
        type: String
    }
})


userModel.methods.generateJwt = function () {

    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

    payload = {
        id: this._id,
        username: this.username,
        email: this.email
    }

    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRE })

    return token;
}


const user = mongoose.model('user', userModel)

module.exports = user