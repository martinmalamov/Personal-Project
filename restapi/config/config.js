const dbPassword = require('./dbPassword.js')

const env = process.env.NODE_ENV || 'development'

const config = {
    development: {
        port: process.env.PORT || 9000,
        dbURL: `mongodb+srv://${dbPassword.username}:${dbPassword.password}@cluster0.t7dpb.mongodb.net/housing?retryWrites=true&w=majority`,
        authCookieName: 'x-auth-token'
    },
    production: {}
}

module.exports = config[env]
