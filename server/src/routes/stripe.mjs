import { Router } from "express";
import {
  stripePaymentIntent,
  stripeRefund,
} from "../controllers/stripeController.mjs";
import { saveBookingDetail } from "../controllers/ิbookingController.mjs";
import { cancelBooking } from "../controllers/ิbookingController.mjs";

export const stripeRouter = Router();

stripeRouter.post("/paymentIntent", stripePaymentIntent);
stripeRouter.post("/confirmedBooking", saveBookingDetail);
stripeRouter.post("/refund", stripeRefund);
stripeRouter.post("/cancelBooking", cancelBooking);
