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

export const BookingPaymentSteps = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PB_KEY);
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();
  const timeInOut = location.state;
  const roomData = JSON.parse(localStorage.getItem("roomInfo"));
  const [request, setRequest] = useState({
    standard: [],
    special: [],
    additional: "",
  });
  const handleRequestChange = (updateRequest) => {
    setRequest(updateRequest);
  };

  const createPaymentIntent = async () => {
    const result = await axios.post(
      "http://localhost:4000/stripe/paymentIntent",
      {
        amount: 2000,
      }
    );
    const secretKey = result.data.clientSecret;
    setClientSecret(secretKey);
  };

  //state for page step

  const [bookingStep, setBookingStep] = useState(
    Number(localStorage.getItem("bookingStep")) || 1
  );

  //next page step
  const handleNext = () => {
    bookingStep < 3 && setBookingStep(bookingStep + 1);
  };

  //prev page step
  const handlePrev = () => {
    bookingStep > 1 && setBookingStep(bookingStep - 1);
  };

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

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
            />
          )}
          {bookingStep === 2 && (
            <StandardRequest
              handlePrev={handlePrev}
              handleNext={handleNext}
              onRequestChange={handleRequestChange}
            />
          )}
          {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              {bookingStep === 3 && <PaymentMethod handlePrev={handlePrev} />}
            </Elements>
          )}
          <BookingDetail
            data={roomData}
            timeData={timeInOut}
            requestData={request}
          />
        </section>
      </section>
    </div>
  );
};
