import { Router } from "express";
import multer from "multer";
import connectionPool from "../utils/db.mjs";
import { cloudinaryUpload } from "../utils/upload.mjs";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";
import { protect, checkRole } from "../middlewares/protect.mjs";

const multerUpload = multer({ dest: "uploads/" });
const adminRouter = Router();
const avatarUpload = multerUpload.fields([{ name: "main_image", maxCount: 2 }]);
const manyUpload = multerUpload.fields([
  { name: "image_gallery", maxCount: 10 },
  { name: "main_image", maxCount: 2 },
]);
const logoUpload = multerUpload.fields([{ name: "logo", maxCount: 2 }]);

adminRouter.use(protect, checkRole(["admin"]));

//get hotelinfo
adminRouter.get("/hotelinfo", async (req, res) => {
  let dataHotel;
  try {
    dataHotel = await connectionPool.query(`select * from hotels`);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "ok", data: dataHotel.rows[0] });
});

//edit hotelinfo
adminRouter.put("/edithotel", logoUpload, async (req, res) => {
  const newData = { ...req.body, updated_at: new Date() };
  // const fileUrlLogo = [];
  // console.log("logo",files);
  // let photo
  // if(newData.logo){
  //   for (let file of newData.logo) {
  //     try{
  //       photo = await cloudinary.uploader.upload(file.path, {
  //       folder: "images",
  //       type: "private",
  //     }

  //   );} catch(e){
  //       console.log("it",e);
  //     }console.log(photo);

  //     fileUrlLogo.push({
  //       url: photo.secure_url,
  //       publicId: photo.public_id,
  //     });
  //     console.log(fileUrlLogo);

  //     await fs.unlink(file.path);
  //   }

  // }
  // console.log(req.files)

  if (
    typeof req.files === "object" &&
    !newData.hotelLogo &&
    Object.keys(req.files).length
  ) {
    let mainImg = await cloudinaryUpload(req.files);

    newData["hotelLogo"] = mainImg[0]?.url || null;
  }

  try {
    const result = await connectionPool.query(
      `update hotels set 
        name =$1,
        description =$2,
        logo=$3,
        updated_at = $4
        where hotel_id = 1
        returning *`,

      [newData.name, newData.description, newData.hotelLogo, newData.updated_at]
    );
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
adminRouter.get("/customerbooking", async (req, res) => {
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
adminRouter.get("/customerdetail", async (req, res) => {
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
adminRouter.get("/customerdetailby/:customerid", async (req, res) => {
  const paramsBooking = req.params.customerid;
  let customerDetail;
  try {
    customerDetail = await connectionPool.query(
      `SELECT  
    users_booking_history.*,  
    hotel_rooms.type,  
    hotel_rooms.guests,  
    user_profiles.firstname,
    user_profiles.lastname,
    hotel_rooms.bed_type,
    hotel_rooms.price_per_night,
    hotel_rooms.price_promotion,
    CAST(CEIL(EXTRACT(EPOCH FROM (users_booking_history.checked_out - users_booking_history.checked_in)) / 86400) AS INTEGER) AS night_reserved,
    TO_CHAR(users_booking_history.checked_in, 'Dy, DD FMMon YYYY') AS formatted_date,
    TO_CHAR(users_booking_history.checked_out, 'Dy, DD FMMon YYYY') AS formatted_date_out,
    TO_CHAR(users_booking_history.created_at, 'Dy, DD FMMon YYYY') AS formatted_booking_date,
    (SELECT payment_method_id 
     FROM stripe_elements 
     WHERE stripe_elements.booking_id = users_booking_history.booking_id) AS payment_method_id
    FROM  
        users_booking_history  
    JOIN 
        hotel_rooms ON users_booking_history.room_id = hotel_rooms.room_id  
    JOIN 
        user_profiles ON users_booking_history.user_id = user_profiles.user_id
    WHERE 
        users_booking_history.booking_id = $1;`,
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
adminRouter.get("/room&property/page", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    // console.log(page);
    const pageSize = parseInt(req.query.pageSize) || 15;
    const offset = (page - 1) * pageSize;
    const totalresult = await connectionPool.query(
      `select COUNT(*) as count from hotel_rooms`
    );
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
    );

    return res.status(200).json({
      message: "complete",
      data: result.rows,
      curretPage: page,
      pageSize: pageSize,
      total: totalCount,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

adminRouter.get("/room&property", async (req, res) => {
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
adminRouter.get("/room/:roomid", async (req, res) => {
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
adminRouter.put("/editroom/:id", manyUpload, async (req, res) => {
  const params = req.params.id;
  const newData = { ...req.body };

  const fileUrl = [];

  let result;
  // console.log("req",Object.keys(req.files));

  if (req.files.image_gallery) {
    for (let file of req.files.image_gallery) {
      // console.log("fileim",file);

      try {
        result = await cloudinary.uploader.upload(file.path, {
          folder: "images",
          type: "private",
        });
      } catch (e) {
        console.log("error", e);
      }

      fileUrl.push({
        url: result.secure_url,
        publicId: result.public_id,
      });
      await fs.unlink(file.path);
    }

    // console.log("URL",fileUrl);
  }
  newData.image_gallery = [...(newData.image_gallery || [])];
  for (let urls of fileUrl) {
    newData.image_gallery.push(urls["url"]);
  }

  // const fileUrls = [];

  // let results
  // if(newData.main_image){
  //   for (let file of newData.main_image) {
  //     try{
  //       results = await cloudinary.uploader.upload(file.path, {
  //       folder: "images",
  //       type: "private",
  //     });}catch(e){
  //       // console.log("it",e);
  //     }

  //     fileUrls.push({
  //       url: results.secure_url,
  //       publicId: results.public_id,
  //     });
  //     await fs.unlink(file.path);
  //   }

  //   return fileUrls;
  // }

  if (
    typeof req.files === "object" &&
    !newData.main_image &&
    Object.keys(req.files).length
  ) {
    let mainImg = await cloudinaryUpload(req.files);

    newData["main_image"] = mainImg[0]?.url || null;
  }
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
        description=$8,
        amenity=$9,
        promotion_status = $10,
        main_image = $11,
        image_gallery = $12
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
        newData.amenity,
        newData.promotion_status,
        newData.main_image,
        newData.image_gallery,
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
adminRouter.post("/createroom", manyUpload, async (req, res) => {
  let createRoom = {
    ...req.body,
    created_at: new Date(),
  };

  // console.log("reqf",req.files);

  const fileUrl = [];

  let result;
  // console.log("req",Object.keys(req.files));

  if (req.files.image_gallery) {
    for (let file of req.files.image_gallery) {
      try {
        result = await cloudinary.uploader.upload(file.path, {
          folder: "images",
          type: "private",
        });
      } catch (e) {
        console.log("error", e);
      }

      fileUrl.push({
        url: result.secure_url,
        publicId: result.public_id,
      });
      await fs.unlink(file.path);
    }

    // console.log("URL",fileUrl);
  }
  createRoom.image_gallery = [];
  for (let urls of fileUrl) {
    createRoom.image_gallery.push(urls["url"]);
  }

  let mainImg;
  try {
    mainImg = await cloudinaryUpload(req.files);
    createRoom["mainImg"] = mainImg[0]?.url || null;
  } catch (e) {
    // console.log("hello", e);
  }
  // console.log(createRoom.main_image);
  try {
    await connectionPool.query(
      `insert into hotel_rooms
      (type,size,bed_type,guests,price_per_night,price_promotion,description,created_by,main_image,image_gallery,amenity,promotion_status)
        values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,

      [
        createRoom.type,
        createRoom.size,
        createRoom.bed_type,
        createRoom.guests,
        createRoom.price_per_night,
        createRoom.price_promotion ?? null,
        createRoom.description,
        createRoom.created_by,
        createRoom.mainImg,
        createRoom.image_gallery,
        createRoom.amenity,
        createRoom.promotion_status,
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

//delete Room
adminRouter.delete("/deleteroom/:id", async (req, res) => {
  const param = req.params.id;
  try {
    await connectionPool.query(`delete from hotel_rooms where room_id =$1`, [
      param,
    ]);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
  return res.status(200).json({
    message: "Room deleted successfully",
  });
});

export default adminRouter;
