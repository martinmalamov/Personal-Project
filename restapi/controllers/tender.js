const models = require('../models/index')

module.exports = {
    get: (req, res, next) => {

        models.Tender.populate("author")
            .then((tender) => res.send(tender))
            .catch(next)
    },

    post: (req, res, next) => {
        const { headerText, description, footerText } = req.body
        const { _id } = req.user

        models.Tender.create({ headerText, description, footerText, author: _id })
            .then((createdTender) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdTender } }),
                    models.Tender.findOne({ _id: createdTender._id })
                ])
            })
            .then(([tenderObj]) => {
                res.send(tenderObj)
            })
            .catch(next)
    },

    put: (req, res, next) => {
        const id = req.params.id
        const { description } = req.body

        models.Tender.updateOne({ _id: id }, { headerText }, { description }, { footerText })
            .then((updatedTender) => res.send(updatedTender))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id

        models.Tender.deleteOne({ _id: id })
            .then((deletedTender) => res.send(deletedTender))
            .catch(next)
    }
} 