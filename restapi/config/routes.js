const router = require('../routing/')

module.exports = (app) => {

    app.use('/api/user' , router.user)

    app.use('/api/tender' , router.tender)

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
}