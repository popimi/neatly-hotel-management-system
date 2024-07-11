import { Router } from "express";
import searchForRoom from "../controllers/searchController.mjs";

export const searchRouter = Router();

searchRouter.get("/search", searchForRoom)