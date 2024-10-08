import connectionPool from "../utils/db.mjs";

export const searchForRoom = async (req, res) => {
  const guests = req.query.guests;
  const price = req.query.price;
  const checkInDate = req.query.checkIn;
  const checkOutDate = req.query.checkOut;
  let result;
  const formattedCheckIn = `${checkOutDate}T12:00:00Z`;
  const formattedCheckOut = `${checkInDate}T14:00:00Z`;
  try {
    result = await connectionPool.query(
      `select *,
        TO_CHAR(hotel_rooms.price_per_night, 'FMTHB 9,999.00') AS formatted_price
        from hotel_rooms
        where guests = $1
        and price_per_night = $2
        and not exists (
          select 1
          from users_booking_history
          where hotel_rooms.room_id = users_booking_history.room_id
          and checked_in < $3::timestamptz
          and checked_out > $4::timestamptz
          )
          `,
      [guests, price, formattedCheckIn, formattedCheckOut]
    );
  } catch (error) {
    return res.status(500).json({
      message: "Cannot get infomation due to database connection.",
      error,
    });
  }
  if (result.rows.length === 0) {
    return res.status(404).json({
      message: "Room not found",
    });
  }
  return res.status(200).json({
    message: "Successfully searched the room",
    data: result.rows,
  });
};

export const searchAllRoom = async (req,res)=>{

    try {
      const result = await connectionPool.query(`
        SELECT DISTINCT hotel_rooms.*
FROM hotel_rooms 
LEFT JOIN users_booking_history ON hotel_rooms .room_id = users_booking_history.room_id
WHERE users_booking_history.booking_status IS NULL OR users_booking_history.booking_status = 'false';
        `)
      return res.status(200).json({
        message: "Successfully searched the rooms.",
        data: result.rows,
      })
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      })
    }
}