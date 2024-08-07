import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";

function BookingHistoryDetailDropdown({ item }) {
  console.log(item);
  // const { state, apiUrl, apiPort } = useAuth();
  // const [dropdownDetail, setDropdownDetail] = useState([]);
  // const getDropdownDetail = async () => {
  //   try {
  //     const result = await axios.get(`${apiUrl}:${apiPort}/bookinghistory/13`);
  //     setDropdownDetail(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getDropdownDetail();
  // }, []);

  return (
    <div className="mt-[24px]">
      <details className="w-[343px] h-[56px]  rounded   flex select-none  bg-gray-200 open:bg-gray-200 open:w-[343px] open:h-full  open:rounded xl:w-[715px] xl:h-[56px] xl:open:w-[715px] ">
        <summary className="p-[16px] font-sans font-semibold text-[16px] leading-[16px] text-gray-900 ">
          Booking Detail
        </summary>

        <div className="p-[16px] font-inter font-normal text-[16px] leading-[24px] text-gray-700  xl:w-[715px] ">
          <span> {item.guests} Guests (1 Night)</span>
          <br></br>
          <br></br>
          <span className="flex justify-between">
            Payment success via{" "}
            <span className="font-semibold ">Credit Card- *888</span>
          </span>
          <br></br>
          <span className="flex justify-between">
            {item.type}{" "}
            <span className="font-semibold text-gray-900">
              {item.price_per_night}.00
            </span>
          </span>

          {item.special_req.map((item, index) => {
            return (
              <span key={index} className="flex justify-between">
                <br></br>
                {item.key}
                <span className="font-semibold text-gray-900">
                  <br></br>
                  {item.value}.00
                </span>
              </span>
            );
          })}

          <br></br>
          <span className="flex justify-between">
            Promotion Code{" "}
            <span className="font-semibold text-gray-900">-400.00</span>
          </span>
          <br></br>

          <div className="w-[311px] h-[46px] border-t xl:w-[695px]  ">
            <br></br>
            <span className="flex justify-between ">
              Total{" "}
              <span className="font-semibold text-[20px] leading-[30px] text-gray-900">
                THB {item.amount}.00
              </span>
            </span>
          </div>
        </div>

        <div className="w-[343px] h-[100px] p-[16px] gap-[8px] font-inter  text-[16px] leading-[24px] text-gray-700  bg-gray-300 xl:w-[715px] xl:h-[88px] xl:py-[16px] xl:px-[24px]">
          <p className="font-semibold">Additional Request</p>
          <p>{item.additional_req}</p>
        </div>
      </details>
    </div>
  );
}

export default BookingHistoryDetailDropdown;
