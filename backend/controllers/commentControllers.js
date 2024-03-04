const commentModel = require('../models/commentModel')
const postModel = require('../models/postModel')
const asyncHandler = require('express-async-handler')

const newComment = asyncHandler(async (req, res) => {

    const { content } = req.body

    const { slug } = req.params

    const post = await postModel.findOne({ slug: slug })

    const comment = await commentModel.create({
        commentPost: post._id,
        content,
        author: req.user.id,
    })

    post.comments.push(comment._id)

    await post.save()

    return res.status(200).json({
        success: true,
        comment
    })
})

const newReply = asyncHandler(async (req, res) => {

    const { content, parent } = req.body

    const { slug } = req.params

    const parentComment = await commentModel.findById(parent);

    const post = await postModel.findOne({ slug: slug })

    console.log(post._id)

    if (!parentComment) {
        return res.status(404).json({
            message: "Parent comment not found"
        })
    }

    const reply = await commentModel.create({
        commentPost: post._id,
        content,
        author: req.user.id,
        parentComment: parent,
    })



    parentComment.childComments.push(reply._id)

    await parentComment.save()

    return res.status(200).json({
        message: "Reply comment created successfully"
    })

})


module.exports = { newComment, newReply }

