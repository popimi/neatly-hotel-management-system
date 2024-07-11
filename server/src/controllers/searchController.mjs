import connectionPool from "../utils/db.mjs";

const searchForRoom = async (req, res) => {
  const searchDataFromCustomer = { ...req.body };
  const guests = req.query.guests;
  const price = req.query.price;
  try {
    const result = await connectionPool.query(
      `select * from hotel_rooms
            where guests = $1
            and price = $2`,
      [guests, price]
    );
  } catch (error) {
    return res.status(500).json({
      message: "Cannot get infomation due to database connection.",
    });
  }
};
