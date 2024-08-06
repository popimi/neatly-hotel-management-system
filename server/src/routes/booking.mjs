import { saveBookingDetail } from "../controllers/ิbookingController.mjs";
import { cancelBooking } from "../controllers/ิbookingController.mjs";
import { Router } from "express";

export const bookingRouter = Router();

bookingRouter.post("/confirmedBooking", saveBookingDetail);
bookingRouter.post("/cancelBooking", cancelBooking);