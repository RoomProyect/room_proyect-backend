const comentsSchema = require( '../models/coments' );
const usersSchema = require( '../models/user' );

const postComentController = async( data ) => {
    // const coment = comentsSchema( data );
    // const response = await coment.save();

    // return response;
    console.log( data );
    const findUser = await usersSchema.findById( data.user );
    console.log( findUser.name );

    if( !findUser ) {
        throw new Error( 'Usuario no encontrado' );
    }

    const comment = new comentsSchema({
        text: data.text,
        user: data.user,
        userName: findUser.name
    });

    const saveComment = await comment.save();

    return saveComment;
}

const getComentsUserController = async() =>{
    const coments = await comentsSchema.find()

    return coments
}

module.exports = {
    postComentController,
    getComentsUserController
}