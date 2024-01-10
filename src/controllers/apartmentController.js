const apartmentSchema = require( '../models/apartments' );

const postApartmentController = async( data ) => {
    const apartment = apartmentSchema( data );
    const response = await apartment.save();

    return response;
}

module.exports = {
    postApartmentController,
}