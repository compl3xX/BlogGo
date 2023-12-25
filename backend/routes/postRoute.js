const express = require('express')

const router = express.Router()

const accessCheck = require('../middlewares/authMiddleware')

const { newPost } = require("../controllers/postControllers")

router.post('/newPost', accessCheck, newPost)

module.exports = router