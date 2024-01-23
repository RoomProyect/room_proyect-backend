const {
  postApartmentController,
  getApartmentsController,
  getApartmentByLocation,
  getApartmentByIdController,
} = require("../controllers/apartmentController");

const getApartmentsHandler = async (req, res) => {
  const { city } = req.query
  try {
    if(city){
      const response = await getApartmentByLocation(city)
            res.status(201).json(response)
    } else {
      const page = req.query.page || 1;
      const limit = req.query.limit || 5;

      const response = await getApartmentsController( page,limit );
      res.status(200).json( response );
    }
    
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

module.exports = {
  getApartmentsHandler,
  postApartmentHandler,
  getApartmentbyIdHandler,
};
