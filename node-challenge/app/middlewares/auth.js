const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const { User } = require('../models/index');

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).json({ msg: 'Unauthorized Access'});
    } else {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                res.status(500).json({ msg: 'A problem has occurred' });
            } else {
                User.findByPk(decoded.user.id)
                .then(user => {
                    req.user = user;
                    next();
                });
            }
        });
    }
};