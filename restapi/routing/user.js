const controllers = require('../controllers')
const router = require('express').Router()

router.get('/', controllers.user.get)

router.post('/register', controllers.user.post.register)