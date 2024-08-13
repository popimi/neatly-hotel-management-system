import { useEffect, useState } from "react";
import BookNowButton from "./ButtonNowBook";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";

function RoomInformation({ roomDetail }) {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  return (
    <section className=" w-full h-fit flex flex-col top-[297px] gap-[24px]  lg:hidden items-center">
      {roomDetail && (
        <section>
          <div className=" w-full h-fit gap-[40px] m-[16px] pl-[10px] ">
            <br></br>
            <p className=" w-[343px] h-[110px] font-medium text-[44px] font-[noto] leading-[55px] text-green-800  ">
              {roomDetail.type}
            </p>

            <br></br>
            <br></br>
            <div className=" w-full h-fit content-between ">
              <p className=" w-[354px] h-[48px] font-normal text-[16px] font-[inter] leading-[24px] text-gray-700 ">
                {roomDetail.description}
              </p>

              <br></br>

              <div className="flex flex-row justify-between gap-[10px] font-[inter] font-normal text-[16px] leading-[24px] text-gray-700 ">
                <span>{roomDetail.guests} Persons</span> <span>|</span>
                <span>1 {roomDetail.bed_type}</span> <span>|</span>
                <span>{roomDetail.size} sqm</span>
              </div>
              <br></br>
              <br></br>
              <div className=" flex flex-row justify-between items-center  ">
                <div className="flex flex-col gap-[4px] font-[inter] ">
                  <p className="font-normal text-[16px] leading-[24px] text-gray-700 line-through">
                    THB {formatNumber(roomDetail.price_per_night)}
                  </p>
                  <p className="font-semibold text-[20px] leading-[30px] text-gray-900">
                    THB {formatNumber(roomDetail.price_promotion)}
                  </p>
                </div>
                <div className="flex items-end justify-end relative right-[20px]">
                  <BookNowButton />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full h- border-t-[1px] pt-[24px] gap-[24px] m-[18px] relative bg-white pl-[10px]">
            <p className="font-[inter] font-semibold text-[20px] leading-[30px] text-[#000000]">
              Room Amenities
            </p>
            <br></br>
            {roomDetail?.amenity &&
              roomDetail?.amenity.map((amenity, index) => {
                return (
                  <ul
                    key={index}
                    className="h- font-[inter] font-normal text-[16px] leading-[24px] list-disc list-inside text-gray-700 "
                  >
                    <li>{amenity}</li>
                  </ul>
                );
              })}
          </div>
        </section>
      )}
    </section>
  );
}

export default RoomInformation;
