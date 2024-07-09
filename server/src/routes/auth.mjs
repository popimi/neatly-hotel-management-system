import { Router } from "express";
import authController from "../controllers/authController.mjs";

export const authRouter = Router();

//User
authRouter.post("/register", authController.registerUser);

authRouter.post("/login", authController.loginUser);
