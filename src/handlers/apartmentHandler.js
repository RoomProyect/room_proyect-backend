const {
  postApartmentController,
  getApartmentsController,
  getApartmentByLocation,
  getApartmentByIdController,
  putApartmentController
} = require("../controllers/apartmentController");

const getApartmentsHandler = async (req, res) => {
  const { ambientes, baños, cochera, habitaciones, ciudad } = req.query

  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sortByT = req.query.sortByT || undefined;
    const sortByP = req.query.sortByP || undefined;

    const precioMin = req.query.precio && req.query.precio.min ? parseInt(req.query.precio.min) : undefined;
    const precioMax = req.query.precio && req.query.precio.max ? parseInt(req.query.precio.max) : undefined;
    
    const precio = {};
    if (!isNaN(precioMin)) precio.min = precioMin;
    if (!isNaN(precioMax)) precio.max = precioMax;
    
    const mcTerrenoMin = req.query.mcTerreno && req.query.mcTerreno.min ? parseInt(req.query.mcTerreno.min) : undefined;
    const mcTerrenoMax = req.query.mcTerreno && req.query.mcTerreno.max ? parseInt(req.query.mcTerreno.max) : undefined;
    
    const mcTerreno = {};
    if (!isNaN(mcTerrenoMin)) mcTerreno.min = mcTerrenoMin;
    if (!isNaN(mcTerrenoMax)) mcTerreno.max = mcTerrenoMax;

    
    const sorting = {
      precio: sortByP !== undefined ? parseInt(sortByP) : undefined,
      titulo: sortByT !== undefined ? parseInt(sortByT) : undefined
    }
    
    const appliedOrders = Object.fromEntries(
      Object.entries(sorting).filter(([key, value]) => value !== undefined)
      )
      console.log("appliedOrders:", appliedOrders);

      const filters = {
        ambientes,
        baños,
        cochera,
        mcTerreno,
        habitaciones,
        ciudad,
        precio
      };

    const appliedFilters = Object.fromEntries(
      Object.entries(filters).filter(([key, value]) => value !== undefined)
    )

    const response = await getApartmentsController(page, limit, appliedOrders, appliedFilters);
    res.status(200).json(response);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getApartmentbyIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const apartment = await getApartmentByIdController(id);
    res.status(200).json(apartment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postApartmentHandler = async (req, res) => {
  try {
    const response = await postApartmentController(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putApartmentHandler = async (req, res) => {
  try {
    const response = await putApartmentController(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getApartmentsHandler,
  postApartmentHandler,
  getApartmentbyIdHandler,
  putApartmentHandler
};




// const getApartmentsController = async ( page, limit ) => {
//   try {
//     const options = {
//       page,
//       limit,
//       sort: { baños: 1, titulo: 1 }
//     }
//     console.log('Opciones de ordenación:', options.sort)
//     const dbApartments = await apartmentSchema.paginate( {},options );
//     console.log('Documentos después de la paginación:', dbApartments.docs)
//     return dbApartments;

//   } catch (error) {
//     throw( error );
//   }
// };