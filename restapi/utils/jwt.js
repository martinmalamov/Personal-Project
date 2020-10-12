const jwt = require('jsonwebtoken')
const secret = 'abcde'

function createToken(data) {
    return jwt.sign(data, secret, { expiresIn: '48h' })
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) {
                reject(err)
                return
            }

            return resolve(data)
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}