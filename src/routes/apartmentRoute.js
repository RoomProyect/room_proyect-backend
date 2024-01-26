const { Router } = require("express");
const {
  postApartmentHandler,
  getApartmentsHandler,
  getApartmentbyIdHandler,
} = require("../handlers/apartmentHandler");

const apartmentRouter = Router();

apartmentRouter.post("/", postApartmentHandler);

apartmentRouter.get("/", getApartmentsHandler);

apartmentRouter.get("/:id", getApartmentbyIdHandler);

module.exports = apartmentRouter;
