const express = require('express')
const { signUp, signIn } = require("../controllers/userControllers")

const router = express.Router()

router.post('/api/signUp', signUp)
router.post('/api/signIn', signIn)


module.exports = router



