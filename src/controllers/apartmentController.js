const apartmentSchema = require("../models/apartments");

const postApartmentController = async (data) => {
  const apartment = apartmentSchema(data);
  const response = await apartment.save();

  return response;
};

const getApartmentsController = async () => {
  const dbApartments = await apartmentSchema.find();

  return [...dbApartments];
};

const getApartamentByLocation = async (country, city) => {
  const allApartaments = await getApartamentController();
  const apartamentsByCountry = allApartaments.filter((apartament) =>
    apartament.country.toLowerCase().includes(country.toLowerCase())
  );

  // if(!apartamentsByCountry.length) return `Sin datos con el nombre: ${country}`

  // if(apartamentsByCountry && city) {
  //     const response = apartamentsByCountry.filter((apartament) => apartament.city.toLowerCase().includes(city.toLowerCase()))
  //     return response
  // } else return apartamentsByCountry
  return apartamentsByCountry;
  // if(!apartamentsByCountry.length) return `Sin datos con el nombre: ${country}`
};

module.exports = {
  getApartmentsController,
  postApartmentController,
  getApartamentByLocation,
};
