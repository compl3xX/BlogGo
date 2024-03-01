const postModel = require('../models/postModel')

const asyncHandler = require('express-async-handler')

const viewPosts = asyncHandler(async (req, res) => {

    const allpost = await postModel.find()

    return res.status(200).json({
        success: true,
        data: allpost
    })

})

const newPost = asyncHandler(async (req, res) => {

    const { title, content, } = req.body

    const post = await postModel.create({
        title,
        content,
        author: req.user.id,
        bannerImg:req.cldRes.url
    })

    return res.status(200).json({
        success: true,
        message: 'add story successfully',
        data: post
    })

})

const editPost = asyncHandler(async (req, res) => {

    // Get the title for the search from the search 
    const { slug } = req.params

    // Get the update the user updates
    const { title, content } = req.body

    // find the required post 
    const post = await postModel.findOne({ slug: slug })

    // update the post

    post.title = title;

    post.content = content;

    await post.save()

    return res.status(200).json({
        success: true,
        data: post
    })

})

const detailedPost = asyncHandler(async (req, res) => {

    const { slug } = req.params;

    const post = await postModel.findOne({ slug: slug }).populate('author')

    return res.status(200).json({
        success: true,
        data: post
    })

})

const postLiked = asyncHandler(async (req, res) => {

    const { slug } = req.params;

    const { id } = req.body;

    const post = await postModel.findOne({ slug: slug })

    const isPresent = post.usersLike.includes(id);

    if (isPresent) {
        const index = post.usersLike.indexOf(id);
        post.usersLike.splice(index, 1)
        console.log(post.usersLike)
        post.likeCount = post.usersLike.length
    }
    else {
        post.usersLike.push(id);
        post.likeCount = post.usersLike.length 
    }

    await post.save()

    return res.status(200).json({
        success: true,
        message: "likes updated"
    })
})

module.exports = { newPost, editPost, viewPosts, detailedPost, postLiked }