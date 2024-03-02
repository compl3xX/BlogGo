const mongoose = require('mongoose')
const slugify = require('slugify')

const postModel = mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please provide title"],
        unique: true,
        minlength: [4, "Please provide atleast 4 characters title"]
    },

    content: {
        type: String,
        required: [true, "Please provide content"],
        minlength: [10, "Please provide least one sentence"]
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
    }],

    bannerImg: {
        type: String,
        require: [true, "Please provide a banner image"]
    },

    usersLike: {
        type: [String], // Array of strings
        default: []
    },

    likeCount: {
        type: Number,
        default: 0
    },
    slug: String
}, { timestamps: true })


postModel.pre('save', function (next) {
    if (!this.isModified("title")) {
        next();
    }
    this.slug = this.makeSlug()
    next()
})

postModel.methods.makeSlug = function () {
    return slugify(this.title, {
        replacement: '-',
        remove: /[^a-zA-Z0-9]/g,
        lower: true,
        strict: false,
        locale: 'en',
        trim: true
    })

}

const post = mongoose.model('post', postModel)

module.exports = post