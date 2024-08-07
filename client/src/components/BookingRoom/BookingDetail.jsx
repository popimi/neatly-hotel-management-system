import booking from "../../assets/icons/BookingRoom/booking.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BookingDetail({ data, timeData, requestData, totalPriceSet }) {
  const navigate = useNavigate();
  const specialReq = requestData.special;
  const standardReq = requestData.standard;
  const additionalReq = requestData.additional;
  const actualPrice =
    data.promotion_status == true ? data.price_promotion : data.price_per_night;
 
  const totalCost =
    specialReq.reduce((acc, cur) => acc + cur.value, 0) + Number(actualPrice);

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  const formatPrice = formatNumber(actualPrice);
  const formattedTotalCost = formatNumber(totalCost);
  const formattedSpecialReq = specialReq.map((req) => ({
    ...req,
    formattedValue: formatNumber(req.value),
  }));

  const initialTime = 10;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const formatDate = (dateString) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Th", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(dateString);
    const dayName = days[date.getDay()];
    const day = date.getDate().toString().padStart(2, "0");
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${monthName} ${year}`;
  };

  const formattedCheckIn = formatDate(timeData[0].checkIn);
  const formattedCheckOut = formatDate(timeData[1].checkOut);

  // useEffect(() => {
  //   if (timeLeft > 0) {
  //     const timerId = setInterval(() => {
  //       setTimeLeft((prevTime) => prevTime - 1);
  //     }, 1000);

  //     return () => clearInterval(timerId);
  //   }
  //   if ((timeLeft === 0)) {

  //     navigate("/");
  //   }
  // }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return { minutes, seconds };
  };

  const { minutes, seconds } = formatTime(timeLeft);

  useEffect(() => totalPriceSet(totalCost), [totalCost]);

  return (
    <main className="flex justify-center">
      <div className="w-full lg:max-w-[375px] flex flex-col gap-4">
        <section className="box-border">
          <div className="bg-green-800 flex flex-row justify-between p-3">
            <figure className="flex flex-row gap-2 w-2/3 items-center">
              <img src={booking} />
              <p className="text-white text-[1.25rem] w-full font-bold">
                Booking Detail
              </p>
            </figure>
            <span className="countdown rounded-md flex items-center text-2xl text-center bg-orange-200 text-orange-700 p-2 px-3">
              <span style={{ "--value": `${minutes}` }}></span>:
              <span style={{ "--value": `${seconds}` }}></span>
            </span>
          </div>
          <div className="grid grid-flow-row grid-cols-2 bg-green-700 p-5 gap-5">
            <div className="text-white">
              <p className="font-bold">Check-in</p>
              <p>After 2:00 PM</p>
            </div>
            <div className="text-white">
              <p className="font-bold">Check-out</p>
              <p>Before 12:00 PM</p>
            </div>
            <div className="text-white col-span-2">
              <p className="">
                {formattedCheckIn} - {formattedCheckOut}
              </p>
              <p>{data.guests} Guests</p>
            </div>
            {standardReq &&
              standardReq.map((request, index) => {
                return (
                  <div
                    key={index}
                    className="text-white col-span-2 flex flex-row justify-between"
                  >
                    <p>{request}</p>
                  </div>
                );
              })}
            {formattedSpecialReq &&
              formattedSpecialReq.map((request, index) => {
                return (
                  <div
                    key={index}
                    className="text-white col-span-2 flex flex-row justify-between"
                  >
                    <p>{request.key}</p>
                    <p>{request.formattedValue}</p>
                  </div>
                );
              })}

            <div className="text-white col-span-2 flex flex-row justify-between">
              <p className="">{data.type}</p>
              <p>{formatPrice}</p>
            </div>
            {additionalReq && <p className="text-white">{additionalReq}</p>}
            <div className="text-white col-span-2 flex flex-row justify-between border-t border-t-slate-400 pt-5">
              <p className="">Total</p>
              <p className="font-bold">THB {formattedTotalCost}</p>
            </div>
          </div>
        </section>
        <section className="bg-slate-200 p-5">
          <ul className="text-green-600 text-[0.75rem] flex flex-col gap-5">
            <li>
              Cancel booking will get full refund if the cancelation occurs
              before 24 hours of the check-in date.
            </li>
            <li>
              Able to change check-in or check-out date booking within 24 hours
              of the booking date
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
export default BookingDetail;
