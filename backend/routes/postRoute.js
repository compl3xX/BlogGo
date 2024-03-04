const express = require('express')

const router = express.Router()

const accessCheck = require('../middlewares/authMiddleware')

const { newPost, editPost, viewPosts, detailedPost, postLiked } = require("../controllers/postControllers")

const { newComment, newReply } = require("../controllers/commentControllers")

const uploadMiddleware = require("../middlewares/multerMiddleware")

router.get('/viewPosts', viewPosts)

router.get("/:slug", detailedPost)

router.post('/newPost', [accessCheck, uploadMiddleware], newPost)

router.put('/:slug/edit', accessCheck, editPost)

router.post('/:slug/like', postLiked)

router.post('/:slug/newcomment', accessCheck, newComment)

router.post('/:slug/comment/reply', accessCheck, newReply)


module.exports = router