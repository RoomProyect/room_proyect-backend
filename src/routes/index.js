const { Router } = require( 'express' );
const userRouter = require('./userRoute');
const comentRouter = require('./comentRoute');
const apartmentRouter = require('./apartmentRoute');

const router = Router();

router.use( '/users',userRouter );

router.use('/coment', comentRouter );

router.use('/apartment', apartmentRouter )

module.exports = router