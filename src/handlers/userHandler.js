const { postUserController, getUsersController } = require("../controllers/usersControllers");

const getUsersHandler = async( req,res ) => {
    try {
        const response = await getUsersController();
        res.status( 200 ).json( response );
    } catch (error) {
        res.status( 400 ).json( { error: error.message } );
    }
}

const postUserHandler = async ( req,res ) => {
    try {
        const response = await postUserController( req.body );
        res.status( 201 ).json( response ); 
    } catch (error) {
        res.status( 400 ).json( { error: error.message } )
    }
}

module.exports = {
    getUsersHandler,
    postUserHandler
}