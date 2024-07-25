import { Router } from "express";
import { stripeConfig } from "../controllers/stripeController.mjs";
import { stripePaymentIntent } from "../controllers/stripeController.mjs";

export const stripeRouter = Router()

stripeRouter.get('/config', stripeConfig)
stripeRouter.post('/paymentIntent', stripePaymentIntent)
