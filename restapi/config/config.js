const env = process.env.NODE_ENV || 'development'

const config = {
    development: {
        port: process.env.PORT || 9000,
        dbURL: 'mongodb+srv://user:martin-malamov@cluster0.t7dpb.mongodb.net/hotel?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token'
    },
    production: {}
}

module.export = config[env]