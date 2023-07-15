const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_KEY);

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        }, (stripeErr, stripeRes) => {
            if(stripeErr){
                res.status(400).json({
                    message: "Payment failed. Please try again",
                    error: stripeErr
                });
            }else {
                res.status(200).json({
                    message: "Payment successful",
                    payment: stripeRes
                });
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Payment internal server error",
            error: error.message
        });
    }
});

module.exports = router;