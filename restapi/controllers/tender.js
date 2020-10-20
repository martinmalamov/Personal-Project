const models = require('../models')

module.exports = {
    // get: (req, res, next) => {

    //     models.Tender.find().populate("author")
    //         .then((tenders) => res.send(tenders))
    //         .catch(next)
    // },
    get: (req, res, next) => {
        const length = req.query.length ? parseInt(req.query.length) : 20
        //   .sort('-created_at') from mongoose 
        models.Tender.find().sort('-created_at').limit(length).populate('author')
            .then((tenders) => res.send(tenders))
            .catch(next);
    },

    post: (req, res, next) => {
        const { headerText, imgUrl, footerText } = req.body
        const { _id } = req.user
        console.log('REQ EMAIL', req.email)
        console.log('REQ USER ' ,req.user)

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