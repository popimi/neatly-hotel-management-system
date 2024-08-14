import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { useAuth } from "../../contexts/authentication";
import { useNavigate } from "react-router-dom";

const BookingRoomModal = ({ roomData }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [searchDetail, setSearchDetail] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const today = new Date();
  const convertDate = (date) => {
    const result = format(new Date(date), "yyyy-MM-dd");
    return result;
  };
  const checkIn = convertDate(startDate);
  const checkOut = convertDate(endDate);

  const getMinEndDate = () => {
    if (startDate) {
      const nextDay = new Date(startDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay > today ? nextDay : today;
    }
    return today;
  };

  const handleModalBooking = () => {
  
    setSearchDetail([{ checkIn }, { checkOut }]);
    if (searchDetail.length > 0) {
      isAuthenticated
        ? navigate("/booking", { state: { roomData, searchDetail } })
        : navigate("/login");
    }
  };

  return (
    <dialog id="my_modal_4" className="modal rounded-sm">
      <div className="modal-box flex gap-5 flex-col h-[50%] items-center overflow-y-scroll">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <p className="text-center text-green-700 body-1 font-bold">
          Please select your Check-in Date & Check-out Date
        </p>
        <div className="flex flex-col gap-5 w-full">
          <DatePicker
            selected={startDate}
            minDate={today}
            onChange={(date) => setStartDate(date)}
            dateFormat="EEE, dd MMM yyyy"
            placeholderText="Check In"
          />
          <DatePicker
            selected={endDate}
            minDate={getMinEndDate()}
            onChange={(date) => setEndDate(date)}
            dateFormat="EEE, dd MMM yyyy"
            placeholderText="Check Out"
          />
        </div>
        <div className="">
          <button onClick={handleModalBooking} className="button-primary">
            Confirm Booking
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default BookingRoomModal;
