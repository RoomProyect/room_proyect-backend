const { postApartmentController } = require("../controllers/apartmentController");

// const getUsersHandler = async( req,res ) => {
//     try {
//         const response = await getUsersController();
//         res.status( 200 ).json( response );
//     } catch (error) {
//         res.status( 400 ).json( { error: error.message } );
//     }
// }

const postApartmentHandler = async ( req,res ) => {
    try {
        const response = await postApartmentController( req.body );
        res.status( 201 ).json( response ); 
    } catch (error) {
        res.status( 400 ).json( { error: error.message } )
    }
}

module.exports = {
    // getUsersHandler,
    postApartmentHandler
}