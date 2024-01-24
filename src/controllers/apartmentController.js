const apartmentSchema = require("../models/apartments");

const postApartmentController = async (data) => {
  const apartment = apartmentSchema(data);
  const response = await apartment.save();

  return response;
};

const getApartmentsController = async ( page = 1,limit = 8 ) => {
  try {
    const options = {
      page,
      limit
    }
    
    const dbApartments = await apartmentSchema.paginate( {},options );

    return dbApartments;

  } catch (error) {
    throw( error );
  }
};

const getApartmentByIdController = async (id) => {
  const apartment = await apartmentSchema.findById(id);

  return apartment;
};

const getApartmentByLocation = async (city) => {
    const allApartaments = await getApartmentsController()
    
    
    
    const apartamentsByCity = allApartaments.docs.filter((apartament) => apartament.ciudad.toLowerCase().includes(city.toLowerCase()))
    // if(!apartamentsByCity.length) return {message: `Sin datos con el nombre: ${city}`}
    return apartamentsByCity

}

module.exports = {
  getApartmentsController,
  postApartmentController,
  getApartmentByLocation,
  getApartmentByIdController,
};
