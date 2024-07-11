import connectionPool from "../utils/db.mjs";

const searchForRoom = async (req, res) => {
  const guests = req.query.guests;
  const price = req.query.price;
  let result;
  try {
    result = await connectionPool.query(
      `select * from hotel_rooms
            where guests = $1
            and price_per_night = $2`,
      [guests, price]
    );
  } catch (error) {
    return res.status(500).json({
      message: "Cannot get infomation due to database connection.",
    });
  }
  if (result.rows.length === 0) {
    return res.status(404).json({
      message: "Room not found",
    });
  }
  return res.status(200).json({
    message: "Successfully searched the room",
    data: result.rows[0],
  });
};

export default searchForRoom;
