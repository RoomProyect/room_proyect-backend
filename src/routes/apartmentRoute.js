const { Router } = require("express");
const {
  postApartmentHandler,
  getApartmentsHandler,
} = require("../handlers/apartmentHandler");

const apartmentRouter = Router();

apartmentRouter.post("/", postApartmentHandler);
apartmentRouter.get("/", getApartmentsHandler);

// apartmentRouter.get( '/:id', getComentsUserHandler );

module.exports = apartmentRouter;
