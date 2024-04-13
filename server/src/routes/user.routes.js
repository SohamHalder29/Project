const signUp = require( '../controllers/users/signUp' );

const router = require( "express" ).Router();


router.post( "/signup", signUp );


module.exports = router
