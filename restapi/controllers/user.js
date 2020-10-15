const models = require('../models')
const config = require('../config/config')
const utils = require('../utils')

module.exports = {
    get: (req, res, next) => {
        models.User.findById(req.query.id)
        then((email) => res.send(email))
            .catch((err) => res.status(500).send('Server Error'))
    },

    post: {
        register: (req, res, next) => {
            const { email, password } = req.body
            console.log('email', email)
            models.User.create({ email, password })
                .then((createdEmail) => {
                    const token = utils.jwt.createToken({ id: createdEmail._id })
                    res.header("Authorization", token).send(createdEmail)
                })
                .catch((err) => {
                    console.log(err)
                })
        },


        verifyLogin: (req, res, next) => {
            // const token = req.headers.Authorization || ""
            //corect cookie
            // const token = req.cookies[config.authCookieName]
            // const token = req.body.token || ''
            const token = req.headers.authorization || '';

            console.log('Token', token)

            Promise.all([
                utils.jwt.verifyToken(token),
                models.TokenBlacklist.findOne({ token })
            ])
                // .then(([data]) => {
                //     models.User.findById(data.id)
                //         .then((email) => {
                //             return res.send({
                //                 status: true,
                //                 email
                //             })
                //         })
                // })
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                    models.User.findById(data.id)
                        .then((user) => {
                            return res.send({
                                status: true,   
                                user
                            })
                        });
                })
                .catch(err => {
                    if (["token expired", "jwt must be provided"].includes(err.message)) {
                        res.status(401).send("UNAUTHORIZED")
                        return
                    }

                    res.send({
                        status: false
                    })
                })
        },

        login: (req, res, next) => {
            const { email, password } = req.body
            models.User.findOne({ email })
                .then((email) => Promise.all([email, email.matchPassword(password)]))
                .then(([email, match]) => {
                    if (!match) {
                        res.status(401).send("Invalid password or email")
                    }

                    const token = utils.jwt.createToken({ id: email._id })
                    // res.header("Authorization", token).send(email)
                    //we provide cookie  with config.authCookieName(x-auth-token)
                    res.cookie(config.authCookieName, token).send(email)
                })
                .catch(next)
        },

        logout: (req, res, next) => {
            const token = req.cookies(config.authCookieName)
            res.clearCookie(config.authCookieName).send('Logout successfully')
            next()
        }
    },

    put: (req, res, next) => {
        const id = req.params.id
        const { email, password } = req.body
        models.User.update({ _id: id }, { email, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
}
