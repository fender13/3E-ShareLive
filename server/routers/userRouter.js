const router = require('express').Router()
const controller = require('../controllers/userController')

// register a user
router.post('/register', controller.userRegister)
router.get('/', controller.find)

// login user 
router.post('/login', controller.userLogin)

module.exports = router