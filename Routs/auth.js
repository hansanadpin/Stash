const express = require('express')
const router = express.Router()
const AuthControler = require('../Controller/auth')


router.get('/signin',AuthControler.signIn);



module.exports = router
