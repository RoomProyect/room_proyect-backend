const { Router } = require( 'express' );
const { postApartmentHandler, getApartmentHandler } = require('../handlers/apartmentHandler');

const apartmentRouter = Router();

apartmentRouter.post( '/', postApartmentHandler );
apartmentRouter.get( '/', getApartmentHandler );
// apartmentRouter.get( '/:id', getComentsUserHandler );

module.exports = apartmentRouter;