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

async function init() {
  dotenv.config();
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true,
  });
}

const app = express();
const port = 4000;
const multerUpload = multer({ dest: "uploads/" });
const profileUpload = multerUpload.fields([
  { name: "profile_picture", maxCount: 2 },
]);
const roomUpload = multerUpload.fields([
  { name: "main_img", maxCount: 2 },
]);

app.use(express.json());
app.use(cors());

app.use("/", authRouter);
app.use("/search", searchRouter);
app.use('/stripe', stripeRouter);


app.get("/", (req, res) => {
  return res.status(200).json({ message: "Ok!" });
});

//get all user
app.get("/users", async (req, res) => {
  let result;
  try {
    result = await connectionPool.query(`select * from users`);
  } catch (error) {
    console.log(error);
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
    console.log(result.rows);
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ message: "asd" });
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


//create users
// app.post("/register", async (req, res) => {
//   const newUser = { ...req.body };
//   console.log(newUser);
//   try {
//     await connectionPool.query(
//       `with new_user as (
//       insert into users (username, password)
//       values ($1,$2)
//       returning *
//       )
//       insert into user_profiles (firstname , lastname , user_id)
//       values ($3, $4 , (select id from new_user))`,
//       [newUser.username, newUser.password, newUser.firstname, newUser.lastname]
//     );
//   } catch (error) {
//     return res.status(500).json({ message: "Internal server error" });
//   }
//   return res.status(200).json({ message: "ok" });
// });

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

//get hotelinfo
app.get("/admin/hotelinfo", async (req, res) => {
  let dataHotel;
  try {
    dataHotel = await connectionPool.query(`select * from hotels`);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "ok", data: dataHotel.rows[0] });
});

//edit hotelinfo
app.put("/admin/edithotel", async (req, res) => {
  const newData = { ...req.body, updated_at: new Date() };
  try {
    const result = await connectionPool.query(
      `update hotels set 
      name =$1,
      description =$2,
      logo=$3,
      updated_at = $4
      where hotel_id = 1
      returning *`,

      [newData.name, newData.description, newData.logo, newData.updated_at]
    );
    console.log(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Cannot access the server",
    });
  }
  return res.status(200).json({
    message: "Updated post sucessfully",
  });
});

//get data to Customer Booking
app.get("/admin/customerbooking", async (req, res) => {
  let customerBooking;
  try {
    customerBooking = await connectionPool.query(
      `select  
          users_booking_history.*,  
          hotel_rooms.*,  
          user_profiles.*,
          TO_CHAR(users_booking_history.checked_in,'Dy, DD FMMon YYYY') as formatted_date,
          TO_CHAR(users_booking_history.checked_out,'Dy, DD FMMon YYYY') as formatted_date_out
        from  
          users_booking_history  
          join hotel_rooms on users_booking_history.room_id = hotel_rooms.room_id  
          join user_profiles on users_booking_history.user_id = user_profiles.user_id; `
    );
  } catch (e) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
  return res.status(200).json({
    message: "complete",
    data: customerBooking.rows,
  });
});

//get data from customer
app.get("/admin/customerdetail", async (req, res) => {
  let customerDetail;
  try {
    customerDetail = await connectionPool.query(
      `select  
          users_booking_history.*,  
          hotel_rooms.type,  
          hotel_rooms.guests,  
          user_profiles.firstname,
          user_profiles.lastname,
          hotel_rooms.bed_type,
          users_booking_history.checked_out-users_booking_history.checked_in AS night_reserved,
          TO_CHAR(users_booking_history.checked_in,'Dy, DD FMMon YYYY') as formatted_date,
          TO_CHAR(users_booking_history.checked_out,'Dy, DD FMMon YYYY') as formatted_date_out
        from  
          users_booking_history  
          join hotel_rooms on users_booking_history.room_id = hotel_rooms.room_id  
          join user_profiles on users_booking_history.user_id = user_profiles.user_id; 
          `
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
  return res.status(200).json({
    message: "complete",
    data: customerDetail.rows,
  });
});

//get data from booking by ID
app.get("/admin/customerdetailby/:customerid", async (req, res) => {
  const paramsBooking = req.params.customerid;
  let customerDetail;
  console.log(paramsBooking);
  try {
    customerDetail = await connectionPool.query(
      `SELECT  
          users_booking_history.*,  
          hotel_rooms.type,  
          hotel_rooms.guests,  
          user_profiles.firstname,
          user_profiles.lastname,
          hotel_rooms.bed_type,
          users_booking_history.checked_out - users_booking_history.checked_in AS night_reserved,
           TO_CHAR(users_booking_history.checked_in,'Dy, DD FMMon YYYY') as formatted_date,
          TO_CHAR(users_booking_history.checked_out,'Dy, DD FMMon YYYY') as formatted_date_out,
          TO_CHAR(users_booking_history.created_at,'Dy, DD FMMon YYYY') as formatted_booking_date
          FROM  
          users_booking_history  
          JOIN hotel_rooms ON users_booking_history.room_id = hotel_rooms.room_id  
          JOIN user_profiles ON users_booking_history.user_id = user_profiles.user_id
        WHERE users_booking_history.booking_id = $1`,
      [paramsBooking]
    );

    return res.status(200).json({
      message: "complete",
      data: customerDetail.rows,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

//get data room
app.get("/admin/room&property/page", async (req, res) => {
 
  
  try {
    const page = parseInt(req.query.page) || 1;
    // console.log(page);
    const pageSize = parseInt(req.query.pageSize) || 15;
    const offset = (page - 1) * pageSize;
    const totalresult = await connectionPool.query(
      `select COUNT(*) as count from hotel_rooms`);
    //   console.log(result);
    
      let totalCount = totalresult.rows[0].count;
      // console.log(totalCount);
      let result = await connectionPool.query(
        `select
        hotel_rooms.type,
        hotel_rooms.size,
        hotel_rooms.guests,
        hotel_rooms.price_per_night,
        hotel_rooms.bed_type
        from
        hotel_rooms 
        limit ${pageSize} offset ${offset}
        `
        // 
      )
      
      return res.status(200).json({
        message: "complete",
        data: result.rows,
        curretPage: page,
        pageSize: pageSize,
        total:totalCount,
      });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
  
});

app.get("/admin/room&property", async (req, res) => {
  let result;
  
  try {
    
    result = await connectionPool.query(`select * from hotel_rooms`);
    
  } catch (e) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
  return res.status(200).json({
    message: "complete",
    data: result.rows,
  });
});
//get data room by ID
app.get("/admin/room/:roomid", async (req, res) => {
  const dataParams = req.params.roomid;
  let dataRoom;

  try {
    dataRoom = await connectionPool.query(
      `select * from hotel_rooms where room_id=$1`,
      [dataParams]
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({
    message: "ok",
    data: dataRoom.rows[0],
  });
});

//edit hotel room
app.put("/admin/editroom/:id", async (req, res) => {
  const params = req.params.id;
  const newData = { ...req.body };
  let dataRoom;
  try {
    dataRoom = await connectionPool.query(
      `update hotel_rooms
      set type =$2,
      size =$3,
      bed_type=$4,
      guests=$5,
      price_per_night=$6,
      price_promotion=$7,
      description=$8
      where room_id=$1
      returning*`,
      [
        params,
        newData.type,
        newData.size,
        newData.bed_type,
        newData.guests,
        newData.price_per_night,
        newData.price_promotion,
        newData.description,
      ]
      // INNER JOIN amenities ON hotel_rooms.amenity_id = amenities.amenity_id;
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
  return res.status(200).json({
    message: "complete",
    data: dataRoom.rows,
  });
});
//create New Room
app.post("/admin/createroom",roomUpload, async (req, res) => {
  let createRoom = {
    ...req.body,
    created_at: new Date(),
  };
  console.log("hi",req.files);
  let mainImg
  try{ mainImg = await cloudinaryUpload(req.files)
    createRoom["mainImg"] = mainImg[0]?.url|| null
  }catch(e){
    console.log("hello",e);
  }
  console.log(mainImg);
  // console.log(createRoom.main_image);
  try {
    await connectionPool.query(
      `insert into hotel_rooms(type,size,bed_type,guests,price_per_night,price_promotion,description,created_by,main_image,image_gallery,amenity)
      values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,

      [
        createRoom.type,
        createRoom.size,
        createRoom.bed_type,
        createRoom.guests,
        createRoom.price_per_night,
        createRoom.price_promotion,
        createRoom.description,
        createRoom.created_by,
        createRoom.mainImg,
        createRoom.image_gallery,
        createRoom.amenity
      ]
    );
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
  return res.status(200).json({
    message: "ok",
  });
});



app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

init();


