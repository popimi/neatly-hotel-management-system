import creditcard from "../../assets/icons/BookingRoom/creditcard.svg";
import cash from "../../assets/icons/BookingRoom/cash.svg";
import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

function PaymentMethod({ handlePrev }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [totalCost, setTotalCost] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    const { error } = stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`,
      },
    });

    if(error){
      setMessage(error.message)
    }

    setIsProcessing(false)
  };

  return (
    <section className="box-border lg:pb-10 lg:flex lg:flex-row lg:justify-evenly lg:gap-10 bg-slate-100">
      <div className="flex flex-col bg-white lg:w-[calc(50vw-80px)] lg:p-10 lg:gap-10">
        <form
          onSubmit={handleSubmit}
          className="p-5 flex flex-col gap-5 lg:gap-10"
        >
          <PaymentElement />
          <section className="flex justify-between py-8 px-4  bg-white">
            <button className="button-ghost" onClick={handlePrev}>
              Back
            </button>
            <button
              type="submit"
              disabled={isProcessing}
              className="button-primary"
            >
              <span>{isProcessing ? "waiting processes..." : "Pay now"}</span>
            </button>
          </section>
          {message && <div>{message}</div>}
        </form>
      </div>
    </section>
  );
}
export default PaymentMethod;
