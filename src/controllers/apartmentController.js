const apartmentSchema = require("../models/apartments");

const postApartmentController = async (data) => {
  const apartment = apartmentSchema(data);
  const response = await apartment.save();

  return response;
};

const getApartmentsControler = async () => {
  const dbApartments = await apartmentSchema.find();

  return [...dbApartments];
};

module.exports = {
  postApartmentController,
  getApartmentsControler,
};
