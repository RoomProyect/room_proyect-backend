const { Router } = require( 'express' );
const { postUserHandler, getUsersHandler, loginUserHandler, putUserHandler } = require('../handlers/userHandler');

const userRouter = Router();

userRouter.post( '/',postUserHandler );
userRouter.get( '/',getUsersHandler );
userRouter.post( '/login', loginUserHandler );
userRouter.put('/', putUserHandler );

module.exports = userRouter;