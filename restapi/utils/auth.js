const jwt = require('./jwt')
const cookie = require('../config/config')
const models = require('../models/index')

module.exports = (redirectAuthenticated = true) => {
    return function (req, res, next) {
        // const token = req.headers.authorization || ''
        const token = req.cookies[cookie.authCookieName] || ''
        console.log('auth token from headers auth:::', token)

        jwt.verifyToken(token).then(data => {
            models.User.findById(data.id)
                .then((email) => {
                    req.email = email
                    next()
                }).catch(err => {
                    next(err)
                })
        })
    }
}