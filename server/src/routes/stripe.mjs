import { Router } from "express";
import { createCheckoutSession } from "../controllers/stripeController.mjs";

export const stripeRouter = Router();

stripeRouter.post("/",createCheckoutSession)
