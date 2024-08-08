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
import adminRouter from "./src/routes/admin.mjs";import { Server } from "socket.io";
import { createServer } from "http";

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


const httpServer = createServer(app);

let onlineUsers =[]

const addNewUsers = (username, socketId) =>{
  !onlineUsers.some(user=>user.username === username) && 
  onlineUsers.push({username,socketId})
}

const removeUser = (socketId)=>{
  onlineUsers = onlineUsers.filter((user)=>user.socketId !== socketId)
}

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username)
}
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173"
  }
});

io.on('connection',(socket)=>{
  socket.on('newuser',(username)=>{
    addNewUsers(username,socket.id)
  })
  socket.on('disconnect',()=>{
    removeUser(socket.id)
  })
  socket.emit('notices',`Tomorrow is your check-in date with Super Premier View Room  ‘Th, 19 Oct 2022’ 
We will wait for your arrival!`)
})

app.use(express.json());
app.use(cors());

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
app.get("/users", async (req, res) => {
  let result;
  try {
    result = await connectionPool.query(`select * from users`);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "ok", data: result.rows });
});

//get user by id
app.get("/users/:id", [], async (req, res) => {
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
});

//edit profiles
app.put("/users/:id",profileUpload, async (req, res) => {
  const params = req.params.id;
  const newData = { ...req.body };
  let result;
  const avatarUrl = await cloudinaryProfileUpload(req.files);
	newData["avatar"] = avatarUrl[0]?.url || null
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
    result = await connectionPool.query("select * from hotel_rooms order by room_id asc");
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

app.get('/check-in/:id',async (req,res)=>{
  const userId = req.params.id;

  try {
    const result = await connectionPool.query(`
      SELECT hotel_rooms.main_image, users_booking_history.checked_in
      FROM users_booking_history
      INNER JOIN hotel_rooms ON users_booking_history.room_id = hotel_rooms.room_id
      WHERE users_booking_history.user_id = $1
    `,[userId]);

    return res.status(200).json({ data: result.rows });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
})

httpServer.listen(port, () => {
  console.log(`Server is running on ${port}`);
});





