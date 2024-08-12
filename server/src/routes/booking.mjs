import { saveBookingDetail } from "../controllers/ิbookingController.mjs";
import { cancelBooking } from "../controllers/ิbookingController.mjs";
import { Router } from "express";
import { bookingChangeDate } from "../controllers/ิbookingController.mjs";

export const bookingRouter = Router();

bookingRouter.post("/confirmedBooking", saveBookingDetail);
bookingRouter.post("/cancelBooking", cancelBooking);
bookingRouter.put("/changedate/:bookingid", bookingChangeDate)