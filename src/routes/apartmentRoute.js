const { Router } = require("express");
const {
  postApartmentHandler,
  getApartmentsHandler,
  getApartmentbyIdHandler,
  putApartmentHandler
} = require("../handlers/apartmentHandler");

const apartmentRouter = Router();

apartmentRouter.post("/", postApartmentHandler);

apartmentRouter.get("/", getApartmentsHandler);

apartmentRouter.put('/', putApartmentHandler);

apartmentRouter.get("/:id", getApartmentbyIdHandler);

module.exports = apartmentRouter;
