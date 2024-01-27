const apartmentSchema = require("../models/apartments");

const postApartmentController = async (data) => {
  const apartment = apartmentSchema(data);
  const response = await apartment.save();

  return response;
};

const getApartmentsController = async ( page, limit, appliedOrders, appliedFilters ) => {
  try {
    const options = {
      page,
      limit,
      sort: appliedOrders
    }
    
    const queryFilters = {};

    if (appliedFilters.ambientes) queryFilters.ambientes = appliedFilters.ambientes;
    if (appliedFilters.baños) queryFilters.baños = appliedFilters.baños;
    if (appliedFilters.cochera) queryFilters.cochera = appliedFilters.cochera;
    if (appliedFilters.mcTerreno) queryFilters.mcTerreno = appliedFilters.mcTerreno;
    if (appliedFilters.precio) queryFilters.precio = appliedFilters.precio;
    if (appliedFilters.habitaciones) queryFilters.habitaciones = appliedFilters.habitaciones;
    if (appliedFilters.ciudad) {
      queryFilters.ciudad = { $regex: new RegExp(appliedFilters.ciudad, 'i') };
    }

    const dbApartments = await apartmentSchema.paginate(queryFilters, options)
    
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

const putApartmentController = async ( data ) => {
    const newApartment = await apartmentSchema.findByIdAndUpdate(data._id, data, { returnDocument: 'after' })

    return newApartment
}

module.exports = {
  getApartmentsController,
  postApartmentController,
  getApartmentByLocation,
  getApartmentByIdController,
  putApartmentController
};



// const getApartmentsHandler = async (req, res) => {
//   const { ambientes, baños, cochera, mcTerreno, precio, habitaciones } = req.query
//   try {
//     const page = req.query.page || 1;
//     const limit = req.query.limit || 10;
//     const sortBy = req.query.sortBy || 'titulo';
//     const sortOrder = req.query.sortOrder || 1;

//     const filters = {
//       ambientes,
//       baños,
//       cochera,
//       mcTerreno,
//       precio,
//       habitaciones
//     }

//     const appliedFilters = Object.fromEntries(
//       Object.entries(filters).filter(([key, value]) => value !== undefined)
//     )

//     const response = await getApartmentsController(page, limit, sortBy, sortOrder, appliedFilters);
//     res.status(200).json(response);
    
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };