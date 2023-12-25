const postModel = require('../models/postModel')
const asyncHandler = require('express-async-handler')


const newPost = asyncHandler(async (req, res) => {

    const { title, content, } = req.body

    console.log(req.user.password)

    const post = await postModel.create({
        title,
        content,
        author: req.user.id,

    })

    res.send(post)



})

module.exports = { newPost }