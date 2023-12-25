const mongoose = require('mongoose')

const postModel = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },

    publishDate: {
        type: Date,
        default: Date.now()
    },

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]
})

const post = mongoose.model('post', postModel)

module.exports = post