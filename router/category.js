const express = require('express') //inisiasi variable yang berisi express
const router = express.Router() // inisiasi variable yang berisi fungsi router express
const { list, create, update, destroy, findById } = require('../controllers/categoryController') // inisiasi object controller
const validate = require('../middleware/validate')
const { createCategoryRules } = require('../validators/rule')
const checkToken = require('../middleware/checkToken')

router.get('/list', list) // route untuk endpoint list
router.post('/find-by-id', findById) // route untuk endpoint list
router.post('/create', validate(createCategoryRules), create) // route untuk endpoint create
router.put('/update', update) // route untuk endpoint update
router.delete('/destroy', destroy) // route untuk endpoint destroy

module.exports = router // export fungsi router agar module lain bisa membaca file ini