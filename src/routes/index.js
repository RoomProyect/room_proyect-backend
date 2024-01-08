const { Router } = require( 'express' );

const router = Router();

router.use( '/',( req,res ) => {
    res.send( 'Server ON!' );
} )

module.exports = router