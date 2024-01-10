const { Router } = require( 'express' );
const userRouter = require('./userRoute');
const comentRouter = require('./comentRoute');

const router = Router();

router.use( '/users',userRouter );

router.use('/coment', comentRouter);

module.exports = router