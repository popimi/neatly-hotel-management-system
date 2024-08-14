import { Router } from "express";
import { searchForRoom } from "../controllers/searchController.mjs";
import { searchAllRoom } from "../controllers/searchController.mjs";

export const searchRouter = Router();

searchRouter.get("/", searchForRoom);
searchRouter.get('/all', searchAllRoom);
