const { Router } = require( 'express' );
const { postUserHandler, getUsersHandler, loginUserHandler } = require('../handlers/userHandler');

const userRouter = Router();

userRouter.post( '/',postUserHandler );
userRouter.get( '/',getUsersHandler );
userRouter.post( '/login', loginUserHandler );

module.exports = userRouter;