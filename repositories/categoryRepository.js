const model = require('../models')

module.exports = {
    getAll : () => model.category.findAll(),
    findById : (id) => model.category.findOne({ where: { id: id } }),
    create : (data) => model.category.create(data),
    update: (data) => model.category.update({
            name: data.name,
            description: data.description,
            is_active: data.is_active
        }, {
            where: {
                id: data.id
            }
        }),
    destroy: (id) => model.category.destroy({
        where: {
            id: req.body.id
        }
    })
}