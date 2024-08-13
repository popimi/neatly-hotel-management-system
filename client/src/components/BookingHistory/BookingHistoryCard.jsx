import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import BookingHistoryDetailDropdown from "./BookingHistoryDeatailDropdown";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";
import BookingHistoryCancelAndRefundAlertBox from "./BookingHistoryCancelAndRefundAlertBox";
import BookingHistoryCancelOnly from "./BookingHistoryCancelOnly";
import { useNavigate } from "react-router-dom";
import BookingModal from "./BookingModal";

function BookingHistoryCard() {
  const { state, apiUrl } = useAuth();
  const navigate = useNavigate();
  const userId = state.user.id;
  const [bookingDetail, setBookingDetail] = useState([]);
  const [openCancel, setOpenCancel] = useState(false);
  const [toggleCancel, setToggleCancel] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null); // State to manage selected booking
  const [is24HoursBeforeCheckIn, setIs24HoursBeforeCheckIn] = useState(false);
  const [detailModal, setDetailModal] = useState({});
  console.log(bookingDetail);

  const getBookingHistoryDetail = async () => {
    try {
      const result = await axios.get(`${apiUrl}/bookinghistory/${userId}`);
      setBookingDetail(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClick = (item) => {
    setSelectedBooking(item);
    setOpenCancel(true);
  };

  const timeRangeWithBookingDate = (booking) => {
    const now = Date.now(); // Current time in milliseconds
    const bookingTime = new Date(booking).getTime(); // Convert created_at to milliseconds
    const timeDifference = now - bookingTime;
    const in24Hours = 24 * 60 * 60 * 1000;
    return timeDifference <= in24Hours;
  };

  const timeRangeWithCheckInDate = (checkIn) => {
    const now = Date.now(); // Current time in milliseconds
    const checkInTime = new Date(checkIn).getTime(); // Convert check_in to milliseconds
    const timeDifference = checkInTime - now; // Time difference in milliseconds
    return timeDifference >= 24 * 60 * 60 * 1000; // true or false
  };

  const handleChangeDate = (item) => {
    navigate("/changedate", { state: item });
  };

  useEffect(() => {
    getBookingHistoryDetail();
  }, []);

  useEffect(() => {
    if (bookingDetail.length > 0) {
      bookingDetail.forEach((item) => {
        timeRangeWithBookingDate(item.created_at);
        timeRangeWithCheckInDate(item.checked_in);
      });
    }
  }, [bookingDetail]);

  return (
    <div className="w-[375px] h-full border-b border-gray-300 pb-[24px] flex flex-col gap-[30px] lg:w-full lg:flex lg:items-center">
      {bookingDetail.map((item, index) => {
        const isWithin24Hours = timeRangeWithBookingDate(item.booking_date);
        const is24HoursBeforeCheckIn = timeRangeWithCheckInDate(
          item.checked_in
        );
        const isCancelButtonVisible =
          isWithin24Hours ||
          (is24HoursBeforeCheckIn &&
            new Date(item.checked_in).getTime() > Date.now());

        return (
          <div
            key={index}
            className="w-[375px] gap-[16px] border-b lg:mt-[50px] lg:w-[1120px] lg:h-full lg:border-b lg:py-[40px] lg:flex lg:flex-row"
          >
            <img
              src={item.main_image}
              alt="Booking"
              className="w-[375px] h-[221px] rounded lg:w-[357px] lg:h-[201px]"
            />

            <div
              id="text-box"
              className="w-[375px] px-[16px] pb-[24px] gap-[24px] mt-[10px] lg:w-[715px] lg:pb-[24px] lg:gap-[32px] lg:p-0"
            >
              <div className="w-[343px] h-[214px] flex flex-col gap-[24px] lg:w-[715px] lg:h-[118px]">
                <div className="w-[343px] h-[70px] gap-[4px] lg:w-[715px] lg:h-[42px] lg:flex lg:flex-row lg:justify-between lg:items-center">
                  <p className="w-[341px] h-[42px] font-[inter] font-semibold text-[28px] leading-[42px] text-black">
                    {item.type}
                  </p>

                  <p className="w-[270px] h-[24px] font-inter font-normal text-[16px] leading-[24px] text-gray-600">
                    Booking date: {item.formatted_date_booking}
                  </p>
                </div>

                <div className="w-[343px] h-[120px] lg:w-[715px] lg:h-[52px] lg:gap-[24px] lg:flex lg:flex-row">
                  <div className="lg:flex lg:flex-col">
                    <p className="h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800">
                      Check-In
                    </p>
                    <p className="w-[300px] h-[24px] flex gap-[10px] font-normal text-[16px] leading-[24px] text-gray-800">
                      <span>{item.formatted_date_in}</span>
                      <span>|</span>
                      <span>After 2:00PM</span>
                    </p>
                  </div>

                  <br />
                  <div className="lg:flex lg:flex-col">
                    <p className="h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800">
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
                className="hidden lg:w-[1120px] lg:h-[48px] lg:flex lg:flex-row-reverse lg:relative lg:right-[372px] lg:mt-[20px]"
              >
                <div className="w-[343px] h-[48px] flex flex-row lg:flex lg:relative lg:right-[30px]">
                  {/* Room Detail Button */}
                  <button
                    onClick={() => {
                      setDetailModal(item);
                      document.getElementById("my_modal_3").showModal();
                    }}
                    className="w-[171.5px] py-[4px] px-[8px] gap-[8px] font-sans font-semibold text-[16px] leading-[16px] text-orange-500"
                  >
                    Room Detail
                  </button>

                  {/* Change Date Button */}
                  {isWithin24Hours && (
                    <button
                      onClick={() => handleChangeDate(item)}
                      className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-semibold text-[16px] leading-[16px] text-white"
                    >
                      Change Date
                    </button>
                  )}
                </div>

                {/* Cancel Booking Button */}
                {isCancelButtonVisible && (
                  <div className="flex justify-end w-[343px] h-[48px] lg:flex lg:relative lg:right-[620px]">
                    <button
                      onClick={() => handleOnClick(item)}
                      className="w-[171.5px] gap-[8px] font-sans font-semibold text-[16px] leading-[16px] text-orange-500"
                    >
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div
              id="button-box"
              className="w-[375px] h-full px-[16px] flex flex-col items-start lg:hidden"
            >
              <div className="w-[343px] h-[48px] flex flex-row">
                <button className="w-[171.5px] py-[4px] px-[8px] gap-[8px] font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
                  Room Detail
                </button>

                {isWithin24Hours && (
                  <button
                    onClick={() => handleChangeDate(item)}
                    className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-[600] text-[16px] leading-[16px] text-white"
                  >
                    Change Date
                  </button>
                )}
              </div>

              <div className="flex justify-end w-[343px] h-[48px]">
                {isCancelButtonVisible && (
                  <button
                    onClick={() => handleOnClick(item)}
                    className="w-[171.5px] gap-[8px] font-sans font-[600] text-[16px] leading-[16px] text-orange-500"
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {openCancel &&
        (is24HoursBeforeCheckIn ? (
          <BookingHistoryCancelOnly
            toggleCancel={toggleCancel}
            setToggleCancel={setToggleCancel}
            item={selectedBooking}
          />
        ) : (
          <BookingHistoryCancelAndRefundAlertBox
            openCancel={openCancel}
            setOpenCancel={setOpenCancel}
            item={selectedBooking}
          />
        ))}
      <BookingModal bookingDetail={detailModal} />
    </div>
  );
}
export default BookingHistoryCard;
