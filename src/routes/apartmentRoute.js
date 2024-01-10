const { Router } = require( 'express' );
const { postApartmentHandler } = require('../handlers/apartmentHandler');

const apartmentRouter = Router();

apartmentRouter.post( '/', postApartmentHandler );
// apartmentRouter.get( '/:id', getComentsUserHandler );

module.exports = apartmentRouter;