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
    // if (appliedFilters.cochera) queryFilters.cochera = appliedFilters.cochera;
    if (appliedFilters.cochera !== undefined && appliedFilters.cochera === 'true' || appliedFilters.cochera ==='false') {
      // Si appliedFilters.cochera es una cadena no vacía y es diferente de "false", filtra cochera mayor o igual a 1
      // Si es false, filtra cochera igual a 0
      queryFilters.cochera = appliedFilters.cochera && appliedFilters.cochera.toLowerCase() !== 'false' ? { $gte: 1 } : { $eq: 0 };
    }
    // if (appliedFilters.mcTerreno) queryFilters.mcTerreno = appliedFilters.mcTerreno;
    // Filtrar por rango de mcTerreno
    if (appliedFilters.mcTerreno && (appliedFilters.mcTerreno.min !== undefined || appliedFilters.mcTerreno.max !== undefined)) {
      queryFilters.mcTerreno = {};
    
      if (appliedFilters.mcTerreno.min !== undefined) {
        queryFilters.mcTerreno.$gte = parseInt(appliedFilters.precio.min)
      }
    
      if (appliedFilters.mcTerreno.max !== undefined) {
        
        queryFilters.mcTerreno.$lte = parseInt(appliedFilters.mcTerreno.max);
      }
    }
    // 
    
    // Filtrar por rango de precio
    if (appliedFilters.precio && (appliedFilters.precio.min !== undefined || appliedFilters.precio.max !== undefined)) {
      queryFilters.precio = {};
  
      if (appliedFilters.precio.min !== undefined) {
        queryFilters.precio.$gte = appliedFilters.precio.min;
      }
    
      if (appliedFilters.precio.max !== undefined) {
        
        queryFilters.precio.$lte = appliedFilters.precio.max;
  
      }
    }
    // 

    if (appliedFilters.habitaciones) queryFilters.habitaciones = appliedFilters.habitaciones;
    if (appliedFilters.provincias) {
      queryFilters.provincias = { $regex: new RegExp(appliedFilters.provincias, 'i') };
    }

    console.log("appliedFilters:", appliedFilters);
    console.log("Consulta a MongoDB:", JSON.stringify(queryFilters));
    const dbApartments = await apartmentSchema.paginate(queryFilters, options)
    console.log("Respuesta de la base de datos:", JSON.stringify(dbApartments));
    
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