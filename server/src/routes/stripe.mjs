import { Router } from "express";
import {
  stripePaymentIntent,
  stripeRefund,
  getPaymentMethod,
  getRefundUpdate

} from "../controllers/stripeController.mjs";


export const stripeRouter = Router();

stripeRouter.get('/getPaymentMethod/:id',getPaymentMethod)
stripeRouter.post("/paymentIntent", stripePaymentIntent);
stripeRouter.post("/refund/:id", stripeRefund);
stripeRouter.post('/refundDetail', getRefundUpdate)

