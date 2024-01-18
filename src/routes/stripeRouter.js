const { Router } = require("express");

const stripeRouter = Router();

require("dotenv").config()

const Stripe = require("stripe")

const stripe = Stripe(process.env.STRIPE_KEY)

stripeRouter.post("/", async (req, res) => {
    // const detailID = req.body.items._id

    console.log(req.body)

    const line_items = req.body.response.map((item) => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                name: item.titulo,
                description: item.descripcion,
                metadata:{
                    id: item._id
                }
                },
                unit_amount: item.precio * 100,
                },
                quantity: 1,
        }
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:5173/checkout-success',
        cancel_url: `http://localhost:5173`,
    });
    
    res.send({url: session.url});
});

module.exports = stripeRouter;