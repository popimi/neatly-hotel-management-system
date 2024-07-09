import connectionPool from "../utils/db.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//register user
const registerUser = async (req, res) => {
  const newUser = {
    ...req.body,
    role: "user",
    created_at: new Date(),
    updated_at: new Date(),
  };

  //check valid
  let isInvalidBody = false;
  Object.keys(newUser).forEach((body) => {
    newUser[body] ? null : (isInvalidBody = true);
  });

  // encrypt password
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);

  try {
    //check username
    const validAccount = await connectionPool.query(
      `select username from users where username = $1 or email = $2`,
      [newUser.username, newUser.email]
    );
    if (validAccount.rowCount) {
      return res
        .status(409)
        .json({ message: "Username or email already exists." });
    }
    //query register
    await connectionPool.query(
      `
      with newUser as (
      insert into users (username , password, email, role, created_at, updated_at)
      values ($1, $2, $5, $6, $7, $8) 
      returning *)
      insert into user_profiles (user_id, firstname, lastname, created_at, updated_at)
      select newUser.user_id, $3, $4, $7, $8 from newUser
      `,
      [
        newUser.username,
        newUser.password,
        newUser.firstname,
        newUser.lastname,
        newUser.email,
        newUser.role,
        newUser.created_at,
        newUser.updated_at,
      ]
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }

  return res.status(200).json({ message: "Register Successfully." });
};

//login user
const loginUser = async (req, res) => {
  const getDataUser = { ...req.body };

  let user;
  try {
    user = await connectionPool.query(
      `select * from users
      inner join user_profiles using (user_id) where username = $1 or email = $1`,
      [getDataUser.username]
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }

  if (!user.rowCount) {
    return res.json({ message: "Username or email not found." });
  }

  const plainPassword = getDataUser.password;
  const hashPassword = user.rows[0].password;

  const userData = {
    user_id: user.rows[0].user_id,
    username: user.rows[0].username,
    email: user.rows[0].email,
    role: user.rows[0].role,
  };

  const isInvalidPassword = await bcrypt.compare(plainPassword, hashPassword);
  if (!isInvalidPassword) {
    return res.status(401).json({ message: "Password invalid" });
  }

  //gen token with json web token
  const token = jwt.sign(
    {
      id: userData.user_id,
      username: userData.username,
      email: userData.email,
      role: userData.role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "90000", //expire token
    }
  );
  return res.status(201).json({ message: "Login Successfully!", token: token });
};

export default {
  registerUser,
  loginUser,
};
