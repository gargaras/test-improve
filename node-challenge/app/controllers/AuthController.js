const { User } = require('../models/index');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

const refreshTokenList = {};

module.exports = {
    // Login
    signIn(req, res) {
        let { email, password } = req.body;
        User.findOne({
            where: {
                email: email
            }
        })
        .then(user => {
            if (!user) {
                res.status(404).json({
                    msg: "User not found"
                });
            } else {
                if (bcryptjs.compareSync(password, user.password)) {
                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
                    let refreshToken = jwt.sign({ user: user }, authConfig.secretRefresh, {
                        expiresIn: authConfig.expiresRefresh
                    });
                    const response = {
                        status: "Logged In",
                        user: user,
                        token: token,
                        refreshToken: refreshToken
                    };
                    refreshTokenList[refreshToken] = response;
                    res.json(response);
                } else {
                    res.status(401).json({ msg: "Incorrect Password" });
                }
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
    },
    // Register
    signUp(req, res) {
        let password = bcryptjs.hashSync(req.body.password, +authConfig.saltRound);

        User.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        })
        .then(user => {
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn: authConfig.expires
            });
            res.json({
                user: user,
                token: token
            });
        })
        .catch(err => {
            res.status(500).json(err);
        });
    },
    // Refresh
    refresh(req, res) {
        let { email, refreshToken } = req.body;
        User.findOne({
            where: {
                email: email
            }
        })
        .then(user => {
            if (!user) {
                res.status(404).json({
                    msg: "User not found"
                });
            } else {
                if ((refreshToken) && (refreshToken in refreshTokenList)) {
                    const token = jwt.sign({ user: user }, authConfig.secret, { expiresIn: authConfig.expires });
                    const response = {
                        user: user,
                        token: token
                    }
                    refreshTokenList[refreshToken].token = token;
                    res.json(response);
                } else {
                    res.status(404).json({ msg: 'Error' });
                }
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
    }
}