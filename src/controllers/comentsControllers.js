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

const getComentsUserController = async( page=1,limit=2 ) =>{

    const options = {
        page,
        limit
    }

    const response = await comentsSchema.paginate({}, options);
    // const coments = await comentsSchema.find();

    return response
}

module.exports = {
    postComentController,
    getComentsUserController
}