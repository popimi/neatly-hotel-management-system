import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function PaymentSummary() {
  const location = useLocation();
  const bookingData = location.state;
  console.log(bookingData);
  
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
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };
  const formatCheckIn = formatDate(bookingData.bookingData.checkIn);
  const formatCheckOut = formatDate(bookingData.bookingData.checkOut);
  const formatRoomPrice = bookingData.data.price_promotion
    ? formatNumber(bookingData.data.price_promotion)
    : formatNumber(bookingData.data.price_per_night);
  const formatTotalPrice = formatNumber(bookingData.bookingData.totalPrice);
  const specialArr = bookingData.special;
  const formattedDigits = `*${location.state.last4Digits.slice(-3)}`;

  return (
    <main className="box-border lg:flex lg:flex-col lg:bg-slate-200">
      <div className="flex lg:justify-center">
        <div className="flex flex-col w-full lg:w-[738px] lg:pt-20">
          <article className="text-center px-6 py-10 gap-4 bg-green-800 flex flex-col justify-center items-center w-full">
            <h3 className="text-white">Thank you for Booking</h3>
            <p className="text-green-300 text-pretty text-[12px] w-2/3">
              We are looking forward to hosting you at our place.
              <br /> We will send you more information about check-in and
              staying at our Neatly closer to your date of reservation
            </p>
          </article>
          <article className="bg-green-700 pt-6 px-4 pb-10 w-full">
            <section className="bg-green-600 p-4 lg:mx-6 flex flex-col lg:flex-row lg:justify-evenly gap-5 text-white">
              <div>
                <h5 className="text-white text-[1rem]">
                  {formatCheckIn} - {formatCheckOut}
                </h5>
                <p>{bookingData.data.guests} Guests</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <h5 className="text-white text-[1rem]">Check-in</h5>
                  <p>After 2:00 PM</p>
                </div>
                <div className="flex flex-col">
                  <h5 className="text-white text-[1rem]">Check-out</h5>
                  <p>Before 12:00 AM</p>
                </div>
              </div>
            </section>
            <section className="flex flex-row justify-start lg:justify-end gap-5 text-green-300 py-5">
              <p>Payment success via</p>
              <p className="font-bold">Credit Card - {formattedDigits}</p>
            </section>

            <section className="flex flex-row justify-between text-green-300 py-3">
              <p>{bookingData.data.type} Room</p>
              <p className="text-white font-bold">{formatRoomPrice}</p>
            </section>
            {specialArr &&
              specialArr.map((list, index) => {
                return (
                  <section
                    key={index}
                    className="flex flex-row justify-between text-green-300 py-3"
                  >
                    <p>{list.key}</p>
                    <p className="text-white font-bold">
                      {formatNumber(list.value)}
                    </p>
                  </section>
                );
              })}
            <section className="flex flex-row justify-between text-green-300 py-3">
              <p>Promotion Code</p>
              <p className="text-white font-bold">0.00</p>
            </section>
            <section className="flex flex-row justify-between text-green-300 pt-6 border-t border-t-slate-400">
              <p>Total</p>
              <p className="text-white font-bold">THB {formatTotalPrice}</p>
            </section>
          </article>
          <article className="flex flex-col lg:flex-row justify-center items-center p-5 gap-5">
            <Link to={"/"} className="lg:order-2 ">
              <button className="text-white bg-orange-600 py-4 px-8 w-[327px] lg:w-[172px]">
                Back to Home
              </button>
            </Link>
            <Link to={"/bookinghistory"}>
            <a className="text-orange-600 text-center py-1 px-2">
              Check Booking Detail
            </a>
            </Link>
          </article>
        </div>
      </div>
    </main>
  );
}
export default PaymentSummary;
