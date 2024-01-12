const {
  postApartmentController,
  getApartmentsControler,
} = require("../controllers/apartmentController");

const getApartmentsHandler = async (req, res) => {
  try {
    const response = await getApartmentsControler();
    res.status(200).json(response);
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
};
