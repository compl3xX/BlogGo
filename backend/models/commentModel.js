const mongoose = required('mongoose')

const commentModel = mongoose.Schema({

    content: {
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true

    },

    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment',
        default: null
    },

    publishDate: {
        type: Date,
        default: Date.now()
    }

})

const comment = mongoose.model('comment', commentModel)

module.exports = comment