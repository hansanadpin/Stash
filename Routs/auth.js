const express = require('express')
const router = express.Router()
const AuthControler = require('../Controller/auth')
const UserControler = require('../Controller/user')


router.post('/signin',AuthControler.signIn);
router.post('/signup', UserControler.addUser)
router.post('/refresh',AuthControler.refreshToken)



module.exports = router
