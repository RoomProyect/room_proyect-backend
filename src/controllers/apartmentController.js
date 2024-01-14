const apartmentSchema = require( '../models/apartments' );

const postApartmentController = async( data ) => {
    const apartment = apartmentSchema( data );
    const response = await apartment.save();

    return response;
}

const getApartamentController = async() => {
    const apartments = await apartmentSchema.find();

    return apartments;
}

const getApartamentByLocation = async (city) => {
    const allApartaments = await getApartamentController()
    const apartamentsByCity = allApartaments.filter((apartament) => apartament.city.toLowerCase().includes(city.toLowerCase()))
    // if(!apartamentsByCity.length) return {message: `Sin datos con el nombre: ${city}`}
    return apartamentsByCity

}

module.exports = {
    postApartmentController,
    getApartamentController,
    getApartamentByLocation
}