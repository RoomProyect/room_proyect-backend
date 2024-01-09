const { Router } = require( 'express' );
const userRouter = require('./userRoute');

const router = Router();

router.use( '/users',userRouter );

module.exports = router