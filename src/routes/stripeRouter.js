const { Router } = require("express");

const stripeRouter = Router();

require("dotenv").config()

const Stripe = require("stripe")

const stripe = Stripe(process.env.STRIPE_KEY)

stripeRouter.post("/", async (req, res) => {

    const {titulo, descripcion, _id, precio, img} = req.body

    const line_items = [ {
        
            price_data: {
                currency: 'usd',
                product_data: {
                name: titulo,
                images: [img],
                description: descripcion,
                metadata:{
                    id: _id
                }
                },
                unit_amount: precio * 100,
                },
                quantity: 1,
        
    }]

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:5173/checkout-success',
        cancel_url: `http://localhost:5173/detail/${_id}`,
    });
    
    res.send({url: session.url});
});

module.exports = stripeRouter;