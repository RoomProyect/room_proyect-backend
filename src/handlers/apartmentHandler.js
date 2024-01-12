const {
  postApartmentController,
  getApartmentsController,
  getApartamentByLocation,
  getApartmentByIdController,
} = require("../controllers/apartmentController");

const getApartmentsHandler = async (req, res) => {
  try {
    const response = await getApartmentsController();
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

const getApartmentHandler = async (req, res) => {
  const { country } = req.query;
  try {
    if (country) {
      const response = await getApartamentByLocation(country);
      res.status(201).json(response);
    } else {
      const response = await getApartmentsController();
      res.status(201).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getApartmentsHandler,
  getApartmentHandler,
  postApartmentHandler,
  getApartmentbyIdHandler,
};
