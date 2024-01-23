const express = require('express')

const router = express.Router()

const accessCheck = require('../middlewares/authMiddleware')

const { newPost, editPost, viewPosts, detailedPost } = require("../controllers/postControllers")

router.get('/viewPosts', viewPosts)

router.get("/:slug", detailedPost)

router.post('/newPost', accessCheck, newPost)

router.put('/:slug/edit', accessCheck, editPost)





module.exports = router