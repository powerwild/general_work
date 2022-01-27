const jwt = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');
const { User } = require('./models');
const secret = 'averystrongsecretthatwillneverbeguessed';

const getUserToken = (user) => {
    const data = {
        userId: user.id,
        username: user.username
    }
    const token = jwt.sign(
        {data},
        secret,
        {}
    )
    return token;
};

const restoreUser = (req, res,  next) => {
    const { token } = req;
    if (!token) {
        res.send('You are not authorized')
            .redirect('/');
    }
    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
            err.status = 401;
            return next(err)
        }
        const { userId } = jwtPayload.data;

        try {
            const user = await User.findByPk(userId);
        } catch(e) {
            e.status = 401;
            return next(e);
        }
        next()
    })
};

const requireAuth = [bearerToken(), restoreUser];

module.exports = {
    getUserToken,
    requireAuth
};
