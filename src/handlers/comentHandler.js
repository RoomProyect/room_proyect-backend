const { postComentController, getComentsUserController } = require("../controllers/comentsControllers");

const postComentHandler = async ( req,res ) => {
    try {
        const response = await postComentController( req.body );
        res.status( 201 ).json( response ); 
    } catch (error) {
        res.status( 400 ).json( { error: error.message } )
    }
}

const getComentsUserHandler = async ( req, res )=>{
    try {
        const response = await getComentsUserController( req.params.id );

        res.status( 201 ).json( response )
    } catch (error) {
        res.status( 400 ).json( {error: error.message} )
    }
}

module.exports = {
    postComentHandler,
    getComentsUserHandler
}