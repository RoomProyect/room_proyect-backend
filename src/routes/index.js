const { Router } = require("express");
const userRouter = require("./userRoute");
const comentRouter = require("./comentRoute");
const apartmentRouter = require("./apartmentRoute");
const stripeRouter = require("./stripeRouter");

const router = Router();

router.use("/users", userRouter);

router.use("/coment", comentRouter);

router.use("/apartment", apartmentRouter);

router.use("/create-checkout-session", stripeRouter)

module.exports = router;
