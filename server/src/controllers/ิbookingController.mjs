import "dotenv/config";
import connectionPool from "../utils/db.mjs";

const transformDate = (dateString, time) => {
  // Convert the dateString to a Date object
  const [year, month, day] = dateString.split("-");
  const date = new Date(year, month - 1, day);

  // Set the time for the date
  const [hours, minutes] = time.split(":");
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  date.setSeconds(0);

  // Convert to ISO string format for database compatibility
  return date.toISOString();
};

export const saveBookingDetail = async (req, res) => {
  const {
    checkIn,
    checkOut,
    standard = [], // Array of objects
    special = [], // Array of objects
    additional = "", // Default to empty string if not provided
    totalPrice,
    roomId,
    userId,
    paymentIntentId,
    paymentMethodId,
    paymentStatus,
  } = req.body;

  const checkInDate = transformDate(checkIn, "14:00");
  const checkOutDate = transformDate(checkOut, "12:00");

  // Convert `standard` array of objects to JSON strings
  const standardTextArray = standard.length
    ? `{${standard.map((item) => `"${item.replace(/"/g, '""')}"`).join(",")}}`
    : "{}";
  const specialTextArray = special.map((item) => JSON.stringify(item));

  const client = await connectionPool.connect();

  try {
    await client.query("BEGIN");

    // Insert into users_booking_history and get booking_id
    const bookingResult = await client.query(
      `INSERT INTO users_booking_history (checked_in, checked_out, standard_req, special_req, additional_req, amount, room_id, user_id) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING booking_id`,
      [
        checkInDate,
        checkOutDate,
        standardTextArray, // Array of text (JSON strings)
        specialTextArray, // Array of JSONB objects
        additional,
        totalPrice,
        roomId,
        userId,
      ]
    );

    const bookingId = bookingResult.rows[0].booking_id;

    // Insert into stripe_elements
    await client.query(
      `INSERT INTO stripe_elements (booking_id, payment_intent_id, payment_method_id, payment_status) 
           VALUES ($1, $2, $3, $4)`,
      [bookingId, paymentIntentId, paymentMethodId, paymentStatus]
    );

    await client.query("COMMIT");

    return res.status(201).json({
      bookingId,
      message:
        "Booking detail and payment information saved to database successfully.",
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error saving booking detail:", error);
    return res
      .status(500)
      .json({ error: "Database error", details: error.message });
  } finally {
    client.release();
  }
};

export const cancelBooking = async (req, res) => {
  const { bookingId } = req.body;
  try {
    const bookingStatus = `
    update users_booking_history
    set booking_status = false
    where booking_id = $1
    returning *`;

    const bookingIdValue = [bookingId];
    const result = await connectionPool.query(bookingStatus, bookingIdValue);

    if (!bookingId) {
      res.status(400).json({
        message: "Please check your data",
      });
    }

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json({
      result: result.rows[0],
      message: "Your booking has been canceled.",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const bookingChangeDate = async (req, res) => {
  let result;
  const params = req.params.id;
  const newData = { ...req.body };
  const checkInDate = transformDate(newData.checked_in, "14:00");
  const checkOutDate = transformDate(newData.checked_out, "12:00");

  try {
    result = await connectionPool.query(
      `update users_booking_history set checked_in = $1, checked_out = $2 where booking_id = $3 returning * `,
      [checkInDate, checkOutDate, params]
    );
    return res.status(200).json({ message: "ok", data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
