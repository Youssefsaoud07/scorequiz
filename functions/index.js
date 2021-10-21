const functions = require("firebase-functions");

exports.createStripeCheckout = functions.https.onCall(async(data,context)=>{
//Stripe Init
const stripe = require('stripe')(functions.config().stripe.secret_key)
const session = await stripe.checkout.sessions.create({
    Payment_method_types: ["card"],
    mode: "payment",
    success_url:"https//:localhost:3000/sucess",
    cancel_url:"https//:localhost:3000/cancel",
    line_items:[
        {
            quantity:1,
            price_data:{
                currency:"usd",
                unit_amount:(1) * 100,
                product_data:{
                    name:"contribution corequiz",

                }
            }
        }
    ]

})
return {
    id:session.id
}

})
