import "dotenv/config";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeConfig = async (req, res) => {
  await res.send({ publicKey: process.env.STRIPE_PUBLIC_KEY });
};

export const stripePaymentIntent = async (req, res) => {
  const model = req.body
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "thb",
      amount: model.amount,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    return res.status(400).send({
      error: {
        message: err.message,
      },
    });
  }
};
