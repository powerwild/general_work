const bcrypt = require('bcryptjs');
const { User } = require('./database/models');

async function generateHash(password) {
    return await bcrypt.hash(password, 12)
}

async function compareHash(password, email) {
    const user = await User.findOne({
        where: {email}
    })
    const hash = user.hashedPassword;
    return await bcrypt.compare(password, hash)
}
