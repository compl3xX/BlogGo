const express = require('express')

const { signUp, signIn, userProfile } = require("../controllers/userControllers")

const accessCheck = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/signUp', signUp)

router.post('/signIn', signIn)

router.get('/userprofile', accessCheck, userProfile)


module.exports = router



