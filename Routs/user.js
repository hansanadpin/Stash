const express = require('express')
const router = express.Router()
const UserControler = require('../Controller/user')


router.get('/',UserControler.addUser);
router.post('/',UserControler.addUser)


module.exports = router

