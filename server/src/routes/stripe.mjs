import { Router } from "express";
import { stripePaymentIntent } from "../controllers/stripeController.mjs";
import { saveBookingDetail } from "../controllers/ิbookingController.mjs";

export const stripeRouter = Router()

stripeRouter.post('/paymentIntent', stripePaymentIntent)
stripeRouter.post('/confirmedBooking', saveBookingDetail )
