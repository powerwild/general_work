const db = require('./db/models');

const asyncHandler = (handler) => {
    return ((req, res, next) => {
        return handler(req, res, next).catch(next)
    })
};

const loginUser = (req, res, next, user) => {

};
const restoreUser = async (req, res, next) => {
    if (req.session.user) {
        const { userId } = req.session.user;
        try {
            const user = await db.User.findByPk(userId);
            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }

        } catch(error) {
            res.locals.authenticated = false;
            next(error);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
};

module.exports = { asyncHandler, loginUser, restoreUser };
