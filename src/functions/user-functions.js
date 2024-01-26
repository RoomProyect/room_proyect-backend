const userSchema = require( '../models/user' );

const userExists = async (email) => {
    const existingUser = await userSchema.findOne({ email });
    return existingUser;
};

module.exports = {
    userExists,
}