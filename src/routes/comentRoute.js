const { Router } = require( 'express' );
const { postComentHandler, getComentsUserHandler } = require('../handlers/comentHandler');

const comentRouter = Router();

comentRouter.post( '/', postComentHandler );
comentRouter.get( '/', getComentsUserHandler );

module.exports = comentRouter;