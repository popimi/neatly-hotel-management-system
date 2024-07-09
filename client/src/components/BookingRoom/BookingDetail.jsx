import booking from "../../assets/icons/BookingRoom/booking.svg";
import { useState, useEffect } from "react";

function BookingDetail() {
  const initialTime = 300;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <main className="flex justify-center">
      <div className="max-w-[375px] flex flex-col gap-4">
        <section className="box-border">
          <div className="bg-green-800 flex flex-row justify-between p-3">
            <figure className="flex flex-row gap-2 w-2/3 items-center">
              <img src={booking} />
              <p className="text-white text-[1.25rem] w-full font-bold">
                Booking Detail
              </p>
            </figure>
            <span className="countdown rounded-md text-2xl bg-orange-200 text-orange-700 p-2 px-3">
              <span style={{ "--value": `${minutes}` }}></span>:
              <span style={{ "--value": `${seconds}` }}></span>
            </span>
          </div>
          <div className="grid grid-flow-row grid-cols-2 bg-green-700 p-5 gap-10">
            <div className="text-white">
              <p className="font-bold">Check-in</p>
              <p>After 2:00 PM</p>
            </div>
            <div className="text-white">
              <p className="font-bold">Check-out</p>
              <p>Before 12:00 PM</p>
            </div>
            <div className="text-white col-span-2">
              <p className="">Th, 19 Oct 2022 - Fri,20 Oct 2022</p>
              <p>2 Guests</p>
            </div>
            <div className="text-white col-span-2 flex flex-row justify-between">
              <p className="">Superior Garden View Room</p>
              <p>2,500.00</p>
            </div>
            <div className="text-white col-span-2 flex flex-row justify-between border-t border-t-slate-400 pt-5">
              <p className="">Total</p>
              <p className="font-bold">THB 2,500.00</p>
            </div>
          </div>
        </section>
        <section className="bg-slate-200 p-5">
          <ul className="text-green-600 text-[0.75rem]">
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
