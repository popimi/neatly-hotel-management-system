import "dotenv/config";
import Stripe from "stripe";
import connectionPool from "../utils/db.mjs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripePaymentIntent = async (req, res) => {
  const model = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "thb",
      amount: model.amount,
      description: `Payment for ${model.customerName}`,

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

export const stripeRefund = async (req, res) => {
  const { paymentIntentId, bookingId } = req.body;

  if (!paymentIntentId || !bookingId) {
    return res
      .status(400)
      .json({ error: "Payment Intent ID and Booking ID are required" });
  }

  try {
    const refund = await stripe.refunds.create({
      payment_intent: paymentIntentId,
    });

    const refundId = refund.id;

    // Update the stripe_elements table
    const updateRefundStatus = `
      UPDATE stripe_elements
      SET refund_id = $1, refund_status = TRUE
      WHERE payment_intent_id = $2
      RETURNING *
    `;
    const refundValues = [refundId, paymentIntentId];
    const refundResult = await connectionPool.query(
      updateRefundStatus,
      refundValues
    );

    if (refundResult.rowCount === 0) {
      return res
        .status(404)
        .json({ error: "Booking not found in stripe_elements" });
    }

    // Update the users_booking_history table using bookingId
    const updateBookingStatus = `
      UPDATE users_booking_history
      SET booking_status = FALSE
      WHERE booking_id = $1
      RETURNING *
    `;
    const bookingIdValue = [bookingId];
    const updateBookingStatusResult = await connectionPool.query(
      updateBookingStatus,
      bookingIdValue
    );

    if (updateBookingStatusResult.rowCount === 0) {
      return res
        .status(404)
        .json({ error: "Booking not found in users_booking_history" });
    }

    res.status(200).json({
      refund,
      stripeElementBooking: refundResult.rows[0],
      bookingHistory: updateBookingStatusResult.rows[0],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPaymentMethod = async (req,res)=>{
  if(!req.params.id){
    return res.status(400).json({message: "Please provide payment method ID for further processes."})
  }
  try {
    const result = await stripe.paymentMethods.retrieve(req.params.id)
    if(!result){
      return res.status(404).json({message: "This ID is not found."})
    }
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({Error: error.message})
  }
}