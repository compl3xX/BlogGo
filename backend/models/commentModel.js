const mongoose = require('mongoose')

const commentModel = mongoose.Schema({

    commentPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    parentComment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
        default: null
    },

    childComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }],

    publishDate: {
        type: Date,
        default: Date.now()
    }

}, { timestamps: true })

const comment = mongoose.model('comment', commentModel)

module.exports = comment