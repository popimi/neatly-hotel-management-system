import express from "express";
import connectionPool from "./src/utils/db.mjs";
import { authRouter } from "./src/routes/auth.mjs";
import cors from "cors";
import { searchRouter } from "./src/routes/searchRoom.mjs";
import multer from "multer";
import { cloudinaryUpload } from "./src/utils/upload.mjs";
import { cloudinaryProfileUpload } from "./src/utils/profile.mjs";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import { stripeRouter } from "./src/routes/stripe.mjs";
import { bookingRouter } from "./src/routes/booking.mjs";
import adminRouter from "./src/routes/admin.mjs";
import { Server } from "socket.io";
import { createServer } from "http";
import { Socket } from "dgram";
import swaggerUi from "swagger-ui-express";
import { loadSwaggerDocument } from "./src/utils/swagger.mjs";
import { checkRole, protect } from "./src/middlewares/protect.mjs";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const app = express();
const port = 4000;

const multerUpload = multer({ dest: "uploads/" });
const profileUpload = multerUpload.fields([
  { name: "profile_picture", maxCount: 2 },
]);

app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(loadSwaggerDocument()));

app.use("/", authRouter);
app.use("/search", searchRouter);
app.use("/stripe", stripeRouter);
app.use("/booking", bookingRouter);
app.use("/payment-intent", stripeRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Ok!" });
});

//get all user
app.get("/users", [protect, checkRole(["admin"])], async (req, res) => {
  let result;
  try {
    result = await connectionPool.query(`select * from users`);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "ok", data: result.rows });
});

//get user by id
app.get(
  "/users/:id",
  [protect, checkRole(["user", "admin"])],
  async (req, res) => {
    const params = req.params.id;

    let result;
    try {
      result = await connectionPool.query(
        `select *
      from users 
      inner join user_profiles on users.user_id = user_profiles.user_id
      where users.user_id = $1`,
        [params]
      );
    } catch {
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(290).json({ message: "ok", data: result.rows[0] });
  }
);

//edit profiles
app.put("/users/:id", profileUpload, async (req, res) => {
  const params = req.params.id;
  const newData = { ...req.body };
  let result;
  const avatarUrl = await cloudinaryProfileUpload(req.files);

  if (avatarUrl) {
    newData["avatar"] = avatarUrl[0]?.url || null;
  } else {
    newData["avatar"] = newData.profile_picture;
  }

  try {
    result = await connectionPool.query(
      `update user_profiles
      set firstname = $1, lastname = $2, country=$3, phonenumber = $4, date_of_birth = $5, profile_picture=$6 where user_id = $7
      returning *`,
      [
        newData.firstname,
        newData.lastname,
        newData.country,
        newData.phonenumber,
        newData.date_of_birth,
        newData.avatar,
        params,
      ]
    );
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "Edit completed" });
});

app.put("/management/:id", async (req, res) => {
  let result;
  const params = req.params.id;
  const newData = { ...req.body };
  try {
    result = await connectionPool.query(
      "update hotel_rooms set status = $1 where room_id = $2 returning *",
      [newData.status, params]
    );
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "ok", data: result.rows });
});

app.get("/management", async (req, res) => {
  let result;

  try {
    // const regexKeywords = keywords.split(" ").join("|");
    // const regex = new RegExp(regexKeywords, "ig");
    result = await connectionPool.query(
      "select * from hotel_rooms order by room_id asc"
    );
  } catch {
    return res.status(500).json({ message: "Room not found" });
  }
  return res.status(200).json({ message: "ok", data: result.rows });
});

//delete users
app.delete("/delete/:id", async (req, res) => {
  const params = req.params.id;
  try {
    await connectionPool.query(`delete from users where id = $1`, [params]);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "ok" });
});

app.get("/check-in/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const result = await connectionPool.query(
      `
      SELECT hotel_rooms.main_image, users_booking_history.checked_in
      FROM users_booking_history
      INNER JOIN hotel_rooms ON users_booking_history.room_id = hotel_rooms.room_id
      WHERE users_booking_history.user_id = $1
      AND users_booking_history.checked_in >= CURRENT_DATE + INTERVAL '1 day'  
      AND users_booking_history.checked_in <= CURRENT_DATE + INTERVAL '2 days';
    `,
      [userId]
    );

    return res.status(200).json({ data: result.rows });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});
//API roomdetail
app.get("/roomdetail/:id", async (req, res) => {
  const params = req.params.id;
  let results;
  try {
    results = await connectionPool.query(
      `select * from hotel_rooms where room_id = $1`,
      [params]
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
  return res.status(200).json(results.rows);
});

app.get("/changedate/:bookingid", async (req, res) => {
  const bookingId = req.params.bookingid;
  let changeDate;
  try {
    changeDate = await connectionPool.query(
      `SELECT
        users_booking_history.*,
        hotel_rooms.*,
        TO_CHAR(users_booking_history.checked_in, 'Dy, DD FMMon YYYY') AS formatted_date_in,
        TO_CHAR(users_booking_history.checked_out, 'Dy, DD FMMon YYYY') AS formatted_date_out,
        TO_CHAR(users_booking_history.created_at, 'Dy, DD FMMon YYYY') AS formatted_date_booking
      FROM
        users_booking_history
      JOIN
        hotel_rooms ON users_booking_history.room_id = hotel_rooms.room_id
      WHERE
        booking_id = $1`,
      [bookingId]
    );
  } catch (error) {
    console.error("Error fetching booking history:", error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }

  return res.status(200).json(changeDate.rows);
});

//API for booking for booking history page
app.get("/bookinghistory/:userid", async (req, res) => {
  const params = req.params.userid;
  let bookingHistory;
  try {
    bookingHistory = await connectionPool.query(
      `SELECT
    users_booking_history.*,
    hotel_rooms.*,
    TO_CHAR(users_booking_history.checked_in, 'Dy, DD FMMon YYYY') AS formatted_date_in,
    TO_CHAR(users_booking_history.checked_out, 'Dy, DD FMMon YYYY') AS formatted_date_out,
    TO_CHAR(users_booking_history.created_at, 'Dy, DD FMMon YYYY') AS formatted_date_booking,
    CAST(CEIL(EXTRACT(EPOCH FROM (users_booking_history.checked_out - users_booking_history.checked_in)) / 86400) AS INTEGER) AS night_reserved,
    (SELECT payment_intent_id FROM stripe_elements WHERE stripe_elements.booking_id = users_booking_history.booking_id) AS payment_intent_id,
    (SELECT payment_method_id FROM stripe_elements WHERE stripe_elements.booking_id = users_booking_history.booking_id) AS payment_method_id,
    users_booking_history.created_at AS booking_date
FROM
    users_booking_history
    JOIN hotel_rooms ON users_booking_history.room_id = hotel_rooms.room_id
WHERE
    user_id = $1
    AND booking_status = 'true';
`,
      [params]
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }

  return res.status(200).json(bookingHistory.rows);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
