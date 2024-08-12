import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import BookingHistoryDetailDropdown from "./BookingHistoryDeatailDropdown";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";
import BookingHistoryCancelAndRefundAlertBox from "./BookingHistoryCancelAndRefundAlertBox";
import BookingHistoryCancelOnly from "./BookingHistoryCancelOnly";
import BookingHistoryChangeDate from "./BookingHistoryChangeDate";

function TimeRangeWithBookingDate(date, booking) {
  date = Date.now();
  let dateNowInSecs = Math.round(date / 1000);
  let convertDateString = new Date(booking);
  let bookingInMilliSecs = convertDateString.getTime();
  let bookingInSecs = Math.round(bookingInMilliSecs / 1000);
  let timeRange = dateNowInSecs - bookingInSecs;
  if (timeRange <= 86400) {
    return true;
  } else {
    return false;
  }
}

function TimeRangeWithCheckInDate(date, checkin) {
  date = Date.now();
  let dateNowInSecs = Math.round(date / 1000);
  let convertDateString = new Date(checkin);
  let checkInInMilliSecs = convertDateString.getTime();
  let checkInInSecs = Math.round(checkInInMilliSecs / 1000);
  let timeRange = dateNowInSecs - checkInInSecs;
  if (timeRange <= 86400) {
    return true;
  } else {
    return false;
  }
}

function BookingHistoryCard() {
  const { state, apiUrl } = useAuth();
  const userId = state.user.id
  
  const [bookingDetail, setBookingDetail] = useState([]);


  
  const getBookingHistoryDetail = async () => {
    try {
      const result = await axios.get(`${apiUrl}/bookinghistory/${userId}`);
      setBookingDetail(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [openCancel, setOpenCancel] = useState(false);

  const handleOnClick = () => {
    setOpenCancel(!openCancel);
  };

  useEffect(() => {
    getBookingHistoryDetail();
  
  }, []);

  return (
    <div className="w-[375px] h-full border-b border-gray-300 pb-[24px] flex flex-col gap-[30px]  lg:w-full  lg:flex lg:items-center ">
      {bookingDetail.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[375px]  gap-[16px] border-b  lg:mt-[50px] lg:w-[1120px] lg:h-full lg:border-b lg:py-[40px] lg:flex lg:flex-row "
          >
            <img
              src={item.main_image}
              className="w-[375px] h-[221px]  rounded lg:w-[357px] lg:h-[201px] "
            />

            <div
              id="text-box"
              className="w-[375px]  px-[16px] pb-[24px] gap-[24px] mt-[10px]   lg:w-[715px] lg:pb-[24px] lg:gap-[32px] lg:p-0 "
            >
              <div className=" w-[343px] h-[214px]  flex flex-col gap-[24px]  lg:w-[715px] lg:h-[118px] ">
                <div className="w-[343px] h-[70px] gap-[4px]      lg:w-[715px] lg:h-[42px] lg:flex lg:flex-row  lg:justify-between lg:items-center ">
                  <p className="w-[341px] h-[42px]  font-[inter] font-semibold text-[28px] leading-[42px] text-black">
                    {item.type}
                  </p>

                  <p className="w-[270px] h-[24px]  font-inter font-normal text-[16px] leading-[24px] text-gray-600 ">
                    Booking date: {item.formatted_date_booking}
                  </p>
                </div>

                <div className="w-[343px] h-[120px]  lg:w-[715px] lg:h-[52px] lg:gap-[24px] lg:flex lg:flex-row ">
                  <div className="lg:flex lg:flex-col">
                    <p className=" h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800">
                      Check-In
                    </p>

                    <p className="w-[300px] h-[24px] flex  gap-[10px] font-normal text-[16px] leading-[24px] text-gray-800">
                      <span>{item.formatted_date_in}</span>
                      <span>|</span>
                      <span>After 2:00PM</span>
                    </p>
                  </div>

                  <br></br>
                  <div className="lg:flex lg:flex-col">
                    <p className=" h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800">
                      Check-Out
                    </p>

                    <p className="w-[300px] h-[24px] flex gap-[10px] font-normal text-[16px] leading-[24px] text-gray-800">
                      <span>{item.formatted_date_out}</span>
                      <span>|</span>
                      <span>Before 12:00PM</span>
                    </p>
                  </div>
                </div>
              </div>
              <BookingHistoryDetailDropdown item={item} />

              <div
                id="button-box"
                className="hidden lg:w-[1120px] lg:h-[48px] lg:flex lg:flex-row-reverse  lg:relative lg:right-[372px] lg:mt-[20px]  "
              >
                <div className="w-[343px] h-[48px] flex flex-row lg:flex  lg:relative lg:right-[30px]">
                  <button className="w-[171.5px]  py-[4px] px-[8px] gap-[8px] font-sans font-semibold text-[16px] leading-[16px] text-orange-500">
                    Room Detail
                  </button>

                  <button className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-semibold text-[16px] leading-[16px] text-white">
                    Change Date
                  </button>
                </div>

                <div className="flex justify-end w-[343px] h-[48px] lg:flex lg:relative lg:right-[620px]">
                  <button onClick={handleOnClick} className="w-[171.5px]   gap-[8px]  font-sans font-semibold text-[16px] leading-[16px] text-orange-500 ">
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>

            <div
              id="button-box"
              className="w-[375px] h-full px-[16px]  flex flex-col items-start  lg:hidden "
            >
              <div className="w-[343px] h-[48px] flex flex-row">
                <button className="w-[171.5px]  py-[4px] px-[8px] gap-[8px] font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
                  Room Detail
                </button>

                <button className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-[600] text-[16px] leading-[16px] text-white">
                  Change Date
                </button>
              </div>

              <div className="flex justify-end w-[343px] h-[48px] ">
                <button
                  onClick={handleOnClick}
                  className="w-[171.5px]  gap-[8px]  font-sans font-[600] text-[16px] leading-[16px] text-orange-500  "
                >
                  Cancel Booking
                </button>

                {openCancel ? <BookingHistoryCancelAndRefundAlertBox openCancel={openCancel} setOpenCancel={setOpenCancel} item={item} /> : null}

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BookingHistoryCard;
