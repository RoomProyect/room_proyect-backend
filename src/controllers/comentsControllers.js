const comentsSchema = require( '../models/coments' );

const postComentController = async( data ) => {
    const coment = comentsSchema( data );
    const response = await coment.save();

    return response;
}

const getComentsUserController = async( userId ) =>{
    const coments = await comentsSchema.find({ user: userId })

    return coments
}

module.exports = {
    postComentController,
    getComentsUserController
}