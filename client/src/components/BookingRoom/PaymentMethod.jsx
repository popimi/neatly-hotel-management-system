import creditcard from "../../assets/icons/BookingRoom/creditcard.svg";
import cash from "../../assets/icons/BookingRoom/cash.svg";
import BookingDetail from "./BookingDetail";
import { useState } from "react";

function PaymentMethod({ handlePrev }) {
  const [cardNumber, setCardNumber] = useState(null);
  const [cardOwner, setCardOwner] = useState(null);
  const [expiryDate, setExpiryDate] = useState(null);
  const [CVV, setCVV] = useState(null);
  const [promotionCode, setPromotionCode] = useState(null);
  const [totalCost,setTotalCost] = useState(null);

  const handlePayment = async () => {
    await axios.post(`http://localhost:4000/payment-intent`, {
      cardNumber,
      cardOwner,
      expiryDate,
      CVV,
      promotionCode
    });
  };

  return (
    <section className="box-border lg:pb-10 lg:flex lg:flex-row lg:justify-evenly lg:px-[160px] lg:gap-10 bg-slate-100">
      <div className="flex flex-col bg-white lg:w-[calc(50vw-80px)] lg:p-10 lg:gap-10">
        <div className="flex flex-row justify-evenly w-full p-5 gap-5">
          <button
            className="flex flex-row flex-1 justify-center items-center max-w-[250px] p-3 gap-2 border-2 border-slate-200 shadow-md rounded-md 
                 text-slate-400 focus:text-orange-500 focus:border-orange-500 focus:stroke-orange-500 focus:shadow-none lg:scale-[1.1]"
          >
            <img src={creditcard} />
            <p className="font-bold text-[1rem]">Credit Card</p>
          </button>
          <button
            className="flex flex-row flex-1 justify-center items-center max-w-[250px] p-3 gap-2 border-2 border-slate-200 shadow-md rounded-md 
                 text-slate-400 focus:text-orange-500 focus:border-orange-500 focus:stroke-orange-500 focus:shadow-none lg:scale-[1.1]"
          >
            <img src={cash} />
            <p className="font-bold text-[1rem]">Cash</p>
          </button>
        </div>
        <form className="p-5 flex flex-col gap-5 lg:gap-10">
          <h5 className="text-slate-400">Credit Card</h5>
          <label htmlFor="cardNumber" className="flex flex-col">
            Card Number
            <input
              id="cardNumber"
              type="text"
              className="p-2 border border-slate-200"
            />
          </label>
          <label className="flex flex-col">
            Card Owner
            <input type="text" className="p-2 border border-slate-200" />
          </label>
          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col">
              Expiry Date
              <input type="text" className="p-2 border border-slate-200" />
            </label>
            <label className="flex flex-col">
              CVC/CVV
              <input type="text" className="p-2 border border-slate-200" />
            </label>
          </div>
          <div className="py-6 border-t border-t-slate-200">
            <label className="flex flex-col">
              Promotion Code
              <input type="text" className="p-2 border border-slate-200" />
            </label>
          </div>
        </form>
        <p className="text-center lg:hidden">
          *Add promotion code to booking detail*
        </p>
        <section className="lg:hidden">
          <BookingDetail />
        </section>
        <section className="hidden lg:flex justify-between py-8 px-4  bg-white">
          <button className="button-ghost" onClick={handlePrev}>
            Back
          </button>
          <button className="button-primary">Next</button>
        </section>
      </div>
      <div className="hidden lg:flex">
        <BookingDetail />
      </div>
      <section className="lg:hidden flex justify-between py-8 px-4  bg-white">
        <button className="button-ghost" onClick={handlePrev}>
          Back
        </button>
        <button className="button-primary">Next</button>
      </section>
    </section>
  );
}
export default PaymentMethod;
