const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')

        req.token = token
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }

};


module.exports = authenticate;