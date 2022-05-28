const repository = require('../repositories/categoryRepository')

module.exports = {
    getAll : () => repository.getAll(),
    findById : (id) => repository.findById(id)
}