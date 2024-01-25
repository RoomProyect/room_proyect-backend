const { userExists } = require('../functions/user-functions');
const userSchema = require( '../models/user' );

const postUserController = async( data ) => {
    const isUserExist = await userExists(data.email);
    
    if (isUserExist) {
        return { error: 'El usuario ya existe' }
    }

    const user = userSchema( data );
    const response = await user.save();

    return response;
}

const getUsersController = async() => {
    const users = await userSchema.find();

    return users;
}

const loginUserController = async (email, password) =>{
    const existingUser = await userExists(email)
    if (!(!!existingUser)) {
        return { error: 'Este usuario no existe'}
    }
    const user = await userSchema.findOne( {email: email} ).exec();

    return { message: 'inicio de sesion exitoso'}
}

const putUserController = async ( data ) =>{
    const newUser = await userSchema.findByIdAndUpdate(data._id, data, { returnDocument: 'after' })

    return newUser
}

module.exports = {
    postUserController,
    getUsersController,
    loginUserController,
    putUserController
}