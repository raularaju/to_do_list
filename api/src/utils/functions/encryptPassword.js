const bcrypt = require('bcrypt');
require('dotenv').config();
async function encryptPassword(password) {
    const encryptedPassword = await bcrypt.hash(password, parseInt(process.env.SALT, 10));
    return encryptedPassword;
}

module.exports = encryptPassword;