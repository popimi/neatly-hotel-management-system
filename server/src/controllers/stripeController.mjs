import Stripe from '@stripe/stripe-js'
import "dotenv/config";

// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async(req,res)=>{
    const session = await stripe.checkout.sessions.create({
        line_items : [
            {
                price: '',
                quantity,
            }
        ],
        mode: 'payment',
        success_url: `${process.env.DOMAIN}`,
        cancel_url: `${process.env.DOMAIN}`,
    });

    res.redirect(303,);
}
