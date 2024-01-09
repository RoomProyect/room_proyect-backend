const { Router } = require( 'express' );
const { postUserHandler, getUsersHandler } = require('../handlers/userHandler');

const userRouter = Router();

userRouter.post( '/',postUserHandler );
userRouter.get( '/',getUsersHandler )

module.exports = userRouter;