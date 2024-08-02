import { Router } from "express";
import authController from "../controllers/authController.mjs";

export const authRouter = Router();

// User login
authRouter.post("/login", authController.loginUser);
// User register
authRouter.post("/register", authController.registerUser);
// Check username and email
authRouter.get("/check-available", authController.checkAvailable);
