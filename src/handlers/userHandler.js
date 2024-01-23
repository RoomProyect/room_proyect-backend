const { postUserController, getUsersController, loginUserController } = require("../controllers/usersControllers");
const { verification_email_message } = require("../functions/email-verification");

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

        if(response.error){
            throw new Error(response.error)
        }
        await verification_email_message(req.body.email, req.body.name)

        res.status( 201 ).json( response );
    } catch (error) {
        res.status( 400 ).json( { error: error.message } )
    }
}

const loginUserHandler = async ( req,res ) =>{
    try {
        const { email, password } = req.body;
        const response = await loginUserController(email, password);

        if(response.error){
            throw new Error(response.error)
        }

        res.status( 201 ).json(response)
    } catch (error) {
        res.status( 400 ).json( {error: error.message, login: false} )
    }
}

module.exports = {
    getUsersHandler,
    postUserHandler,
    loginUserHandler
}