const userSchema = require( '../models/user' );
const bcrypt = require('bcrypt')

const saltRounds = 10

const userExists = async (email) => {
    const existingUser = await userSchema.findOne({ email });
    return existingUser;
};

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
};

module.exports = {
    userExists,
    hashPassword,
}