import React, { useEffect, useState } from "react";
import { BookingSteps } from "../../components/BookingRoom/BookingSteps";
import BasicInformation from "../../components/BookingRoom/BasicInformation";
import StandardRequest from "../../components/BookingRoom/StandardRequest";
import PaymentMethod from "../../components/BookingRoom/PaymentMethod";
import { useLocation } from "react-router-dom";
import BookingDetail from "../../components/BookingRoom/BookingDetail";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";

export const BookingPaymentSteps = () => {
  const {apiUrl} = useAuth()
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PB_KEY);
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();
  const timeInOut = location.state.searchDetail;
  const roomData = location.state.roomData;
  const [standard, setStandard] = useState([]);
  const [special, setSpecial] = useState([]);
  const [additional, setAdditional] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [fullName, setFullName] = useState("");
  //set totalPrice for creating payment intent
  const totalPriceSetting = (price) => {
    setTotalPrice(price);
  };

  //state for page step

  const [bookingStep, setBookingStep] = useState(
    Number(localStorage.getItem("bookingStep")) || 1
  );

  //next page step
  const handleNext = () => {
    if (bookingStep === 2 && totalPrice > 0 && fullName) {
      createPaymentIntent(fullName);
    }

    bookingStep < 3 && setBookingStep(bookingStep + 1);
  };

  //prev page step
  const handlePrev = () => {
    bookingStep > 1 && setBookingStep(bookingStep - 1);
  };

  // stripe payment component styling
  const appearance = {
    theme: "stripe",
  };

  // stripe payment component setting
  const options = {
    clientSecret,
    appearance,
  };

  const createPaymentIntent = async (fullName) => {
    try {
      const result = await axios.post(
        `${apiUrl}/stripe/paymentIntent`,
        {
          amount: totalPrice * 100,
          customerName: fullName,
        }
      );
      setClientSecret(result.data.clientSecret);
    } catch (error) {
      console.error("Error creating payment intent:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    localStorage.setItem("bookingStep", Number(bookingStep));
  }, [bookingStep]);

  return (
    <div className="flex justify-center items-center">
      <section className="p-5 bg-slate-100 box-border flex justify-center flex-col gap-[40px] w-full">
        <h3 className="lg:text-[68px] lg:leading-[85px]">Booking Room</h3>
        <section className="flex flex-col gap-5 lg:flex-row lg:gap-20 lg:pb-10 lg:border-b lg:border-b-slate-300">
          <BookingSteps
            bookingStep={bookingStep}
            step={1}
            textStep={"Basic Information"}
          />
          <BookingSteps
            bookingStep={bookingStep}
            step={2}
            textStep={"Special Request"}
          />
          <BookingSteps
            bookingStep={bookingStep}
            step={3}
            textStep={"Payment Method"}
          />
        </section>
        <section className="flex flex-col lg:flex-row justify-center gap-10">
          {bookingStep === 1 && (
            <BasicInformation
              handlePrev={handlePrev}
              bookingStep={bookingStep}
              handleNext={handleNext}
              setFullName={setFullName}
            />
          )}
          {bookingStep === 2 && (
            <StandardRequest
              handlePrev={handlePrev}
              handleNext={handleNext}
              standard={standard}
              setStandard={setStandard}
              special={special}
              setSpecial={setSpecial}
              additional={additional}
              setAdditional={setAdditional}
            />
          )}
          {bookingStep === 3 && stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <PaymentMethod
                handlePrev={handlePrev}
                fullName={fullName}
                standard={standard}
                special={special}
                additional={additional}
                data={roomData}
                timeData={timeInOut}
                totalPrice={totalPrice}
              />
            </Elements>
          )}
          <BookingDetail
            data={roomData}
            timeData={timeInOut}
            requestData={{ standard, special, additional }}
            totalPriceSet={totalPriceSetting}
          />
        </section>
      </section>
    </div>
  );
};
