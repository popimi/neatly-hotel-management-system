import express from "express";
import connectionPool from "./src/utils/db.mjs";
import { authRouter } from "./src/routes/auth.mjs";
import cors from "cors";
import { searchRouter } from "./src/routes/searchRoom.mjs";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/", authRouter);
app.use("/search", searchRouter);

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
app.put("/users/:id", async (req, res) => {
  const params = req.params.id;
  const newData = { ...req.body };
  let result;
  console.log(newData);
  try {
    result = await connectionPool.query(
      `update user_profiles
      set firstname = $1, lastname = $2, country=$3, phonenumber = $4, date_of_birth = $5, profile_picture=$6 where user_id = $7
      returning *`,
      [newData.firstname,newData.lastname,newData.country,newData.phonenumber,newData.date_of_birth,newData.profile_picture , params]
    );
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ message: "asd" });
});

app.get('/management',async(req,res)=>{
  let result;
  let room = req.query.type
  let size = req.query.bed_size
  let status = req.query.status
  try{
    if(!room || !size || !status){
      result = await connectionPool.query('select * from hotel_rooms')
    }else{
      result = await connectionPool.query(`select * from hotel_rooms 
        where room=$1 and size=$2 and status=$3 `,[room,size,status])
    }
  }catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(200).json({ message: "ok", data: result.rows });
})

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

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
