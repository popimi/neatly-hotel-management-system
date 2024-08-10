import BookNowButton from "./BookNowButton";
import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";

function RoomResultCard({ data }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const roomDetail = data[0];
  const searchDetail = data[1];

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  const handleBooking = (room) => {
    const roomData = room;
    isAuthenticated
      ? navigate("/booking", { state: { roomData, searchDetail } })
      : navigate("/login");
  };

  return (
    <div className="w-full py-[40px] gap-[40px] bg-gray-50 flex flex-col  lg:items-center ">
      {roomDetail.map((room, index) => {
        return (
          <div
            key={index}
            className="w-full h-[649px] border-b border-gray-300  max-[1023px]:flex max-[1023px]:flex-col max-[1023px]:items-center 
        lg:w-[1120px] lg:h-[400px] lg:py-[40px] lg:gap-[25px] lg:flex "
          >
            <img
              src={`${superiorGardenView}`}
              className="w-[375px] h-[265px]  rounded  lg:w-[453px] lg:h-[320px] "
            />

            <div className="w-[375px] h-[368px] px-[16px] pb-[24px] mt-[5px]  lg:w-[619px] lg:h-[320px] lg:py-[24px] lg:flex lg:flex-col ">
              <div className="lg:flex lg:flex-row ">
                <div>
                  <p className="font-inter font-[600] text-[28px] leading-[42px] text-black lg:w-[314px] lg:h-[42px] ">
                    {room.type}
                  </p>

                  <div className="flex flex-row gap-[16px] font-[inter] font-[400] text-[16px] leading-[24px] text-gray-700  lg:h-[24px]">
                    <span>{room.guests} Persons</span> <span>|</span>
                    <span>1 {room.bed_type}</span> <span>|</span>
                    <span>{room.size} sqm</span>
                  </div>
                  <br></br>
                  <p className="font-[400] text-[16px] font-[inter] leading-[24px] text-gray-700 lg:w-[314px] lg:h-[72px]">
                    {room.description}
                  </p>
                </div>

                <br></br>

                <div className="flex flex-col font-[inter]  gap-[4px] pt-[8px] text-end  lg:w-[260px] lg:gap-[8px] ">
                  <p className="font-[400] text-[16px] leading-[24px] text-gray-700 line-through ">
                    THB{" "}
                    {room.price_promotion
                      ? formatNumber(room.price_per_night)
                      : "-"}
                  </p>
                  <p className="font-[600] text-[20px] leading-[30px] text-gray-900 ">
                    THB{" "}
                    {room.price_promotion
                      ? formatNumber(room.price_promotion)
                      : formatNumber(room.price_per_night)}
                  </p>

                  <p className="font-inter font-[400] text-[16px] leading-[24px] text-gray-700">
                    Per Night
                  </p>
                  <p className="font-inter font-[400] text-[16px] leading-[24px] text-gray-700">
                    (Including Tags & Fees)
                  </p>
                </div>
              </div>

              <br></br>
              <div className="w-[343px] h-[48px] flex flex-row  gap-[24px]  lg:w-[575px] lg:h-[48px] lg:flex lg:justify-end ">
                <Link to={`/roomdetail/${room.room_id}`} state={room}>
                  <button className="button-ghost">Room Detail</button>
                </Link>
                <button
                  onClick={() => {
                    handleBooking(room);
                  }}
                  className="button-primary"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RoomResultCard;
