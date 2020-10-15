const models = require('../models')

module.exports = {
    get: (req, res, next) => {

        models.Tender.find().populate("author")
            .then((tenders) => res.send(tenders))
            .catch(next)
    },

    post: (req, res, next) => {
        const { headerText, imgUrl, footerText } = req.body
        const { _id } = req.email
        console.log(req.email)
        console.log(req.user)

        models.Tender.create({ headerText, imgUrl, footerText, author: _id })
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