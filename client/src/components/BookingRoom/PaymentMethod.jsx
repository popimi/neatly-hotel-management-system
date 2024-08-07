import { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PaymentMethod({
  handlePrev,
  fullName,
  standard,
  special,
  additional,
  data,
  timeData,
  totalPrice,
}) {
  const { state } = useAuth();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState(null);

  const searchDetailDataString = localStorage.getItem("searchDetail");
  const searchDetailData = JSON.parse(searchDetailDataString);

  const bookingPost = async (paymentIntent) => {
    const bookingData = {
      checkIn: timeData[0].checkIn,
      checkOut: timeData[1].checkOut,
      standard: standard,
      special: special,
      additional: additional,
      totalPrice: totalPrice,
      roomId: data.room_id,
      userId: state.user.id,
      paymentIntentId: paymentIntent.id,
      paymentMethodId: paymentIntent.payment_method,
      paymentStatus: paymentIntent.status,
    };
    const paymentMethodId = paymentIntent.payment_method;

    try {
      const methodResult = await axios.get(
        `http://localhost:4000/stripe/getPaymentMethod/${paymentMethodId}`
      );
      const last4Digits = methodResult.data.card.last4;

      await axios.post(
        "http://localhost:4000/booking/confirmedBooking",
        bookingData
      );
      navigate("/paymentsummary", {
        state: { bookingData, special, data, state, last4Digits },
      });
    } catch (error) {
      console.error("Error: ", error);
      setMessage("An error occurred while processing your booking.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/paymentsummary`,
        payment_method_data: {
          billing_details: {
            name: fullName,
          },
        },
      },

      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent) {
      if (paymentIntent.status === "succeeded") {
        setMessage(
          "Payment Status: " +
            paymentIntent.status +
            ". You can go back to the homepage."
        );
        bookingPost(paymentIntent);
        localStorage.removeItem("bookingStep");
      } else {
        setMessage("Unexpected payment status: " + paymentIntent.status);
      }
    } else {
      setMessage("No paymentIntent received.");
    }

    setIsProcessing(false);
    localStorage.removeItem("bookingStep");
  };

  return (
    <section className="box-border lg:pb-10 lg:flex lg:flex-row lg:justify-evenly lg:gap-10 bg-slate-100">
      <div className="flex flex-col bg-white lg:w-[calc(50vw-80px)] lg:p-10 lg:gap-10">
        <form
          onSubmit={handleSubmit}
          className="p-5 flex flex-col gap-5 lg:gap-10"
        >
          <PaymentElement />
          {message && <p>{message}</p>}
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
        </form>
      </div>
    </section>
  );
}
export default PaymentMethod;
