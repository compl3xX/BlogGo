const mongoose = require('mongoose')

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
    token: {
        type: String
    }
})

const user = mongoose.model('user', userModel)

module.exports = user