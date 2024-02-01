const { Router } = require("express");

const stripeRouter = Router();

require("dotenv").config();

const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_KEY);

stripeRouter.post("/", async (req, res) => {

    const {titulo, descripcion, _id, precio, img} = req.body

    const line_items = [ {
        
            price_data: {
                currency: 'usd',
                product_data: {
                name: titulo,
                images: [img[0]],
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
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: 'https://room-project-frontend.onrender.com/#/checkout-success',
        cancel_url: `https://room-project-frontend.onrender.com/#/detail/${_id}`,
    });
    
    res.send({url: session.url});
});

module.exports = stripeRouter;