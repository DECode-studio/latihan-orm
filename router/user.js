const express = require('express') //inisiasi variable yang berisi express
const router = express.Router() // inisiasi variable yang berisi fungsi router express
const { register, login, getProfile } = require('../controllers/userController.js') // inisiasi object controller
const checkToken = require('../middleware/checkToken.js')
const validate = require('../middleware/validate')
const { registerRules } = require('../validators/rule')


router.post('/register', validate(registerRules), register)
router.post('/login', login)
router.get('/profile', checkToken, getProfile)

module.exports = router // export fungsi router agar module lain bisa membaca file ini