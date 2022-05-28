const express = require('express') //inisiasi variable yang berisi express
const router = express.Router() // inisiasi variable yang berisi fungsi router express
const categoryRouter = require('./category') //inisiasi router category
const userRouter = require('./user') //inisiasi router category

router.get('/check-health', (req, res) => res.send("Application Up"))
router.use('/category', categoryRouter) // implementasi route category dengan /category
router.use('/user', userRouter) // implementasi route user dengan /user

module.exports = router // export fungsi router agar module lain bisa membaca file ini