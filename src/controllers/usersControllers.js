const userSchema = require( '../models/user' );

const postUserController = async( data ) => {
    const user = userSchema( data );
    const response = await user.save();

    return response;
}

const getUsersController = async() => {
    const users = await userSchema.find();

    return users;
}

module.exports = {
    postUserController,
    getUsersController
}