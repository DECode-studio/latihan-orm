const model = require('../models'), // inisiasi variable model yang berisi model dari folder models
    service = require('../services/categoryService')

module.exports = {
    list: async (req, res) => {
        try {
            const datas = await service.getAll()

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully listed",
                "data": datas
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
    findById: async (req, res) => {
        try {
            const datas = await service.findById(req.body.id)

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully listed",
                "data": datas
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
    create: async (req, res) => {
        try {
            const data = await model.category.create(req.body)

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully created",
                "data": data
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
    update: async (req, res) => {
        try {
            const data = await model.category.update({
                name: req.body.name,
                description: req.body.description,
                is_active: req.body.is_active
            }, {
                where: {
                    id: req.body.id
                }
            })

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully updated",
                "data": data
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    },
    destroy: async (req, res) => {
        try {
            const data = await model.category.destroy({
                where: {
                    id: req.body.id
                }
            })

            return res.status(200).json({
                "success": true,
                "error": 0,
                "message": "data successfully deleted",
                "data": data
            })
        } catch (error) {
            return res.status(500).json({
                "success": false,
                "error": error.code,
                "message": error,
                "data": null
            })
        }
    }
}