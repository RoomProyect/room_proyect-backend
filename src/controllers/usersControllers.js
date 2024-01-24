const { userExists, hashPassword } = require('../functions/user-functions');
const userSchema = require( '../models/user' );
const bcrypt = require('bcrypt')

const postUserController = async( data ) => {
    const isUserExist = await userExists(data.email);
    
    if (isUserExist) {
        return { error: 'El usuario ya existe' }
    }

    if(data.password){
        const hashedPassword = await hashPassword(data.password);
    
        data.password = hashedPassword;
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

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return { error: 'Contraseña incorrecta'}
    }

    return existingUser
}

const putUserController = async ( data ) =>{
    const responseUser = await userSchema.findByIdAndUpdate(data._id, data, { returnDocument: 'after' })

    return responseUser
}

module.exports = {
    postUserController,
    getUsersController,
    loginUserController,
    putUserController
}