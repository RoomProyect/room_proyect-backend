const {
  postApartmentController,
  getApartmentsController,
  getApartmentByLocation,
  getApartmentByIdController,
  putApartmentController
} = require("../controllers/apartmentController");

const getApartmentsHandler = async (req, res) => {
  const { ambientes, baños, cochera, mcTerreno, precio, habitaciones, ciudad } = req.query

  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sortByT = req.query.sortByT || undefined;
    const sortByP = req.query.sortByP || undefined;
    
    const sorting = {
      precio: sortByP !== undefined ? parseInt(sortByP) : undefined,
      titulo: sortByT !== undefined ? parseInt(sortByT) : undefined
    }
    
    const appliedOrders = Object.fromEntries(
      Object.entries(sorting).filter(([key, value]) => value !== undefined)
      )
      console.log("appliedOrders:", appliedOrders);
      
    // const sortOptions = Object.keys(appliedOrders).length === 0 ? {} : { sort: appliedOrders };
    // console.log("sortOptions:", sortOptions);


    const filters = {
      ambientes,
      baños,
      cochera,
      mcTerreno,
      precio,
      habitaciones,
      ciudad
    }

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