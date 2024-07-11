import React, { useEffect, useState } from "react";
import { BookingSteps } from "../../components/BookingRoom/BookingSteps";
import BasicInformation from "../../components/BookingRoom/BasicInformation";
import StandardRequest from "../../components/BookingRoom/StandardRequest";
import PaymentMethod from "../../components/BookingRoom/PaymentMethod";

export const BookingPaymentSteps = () => {
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    localStorage.setItem("bookingStep", Number(bookingStep));
  }, [bookingStep]);

  return (
    <div className="flex justify-center items-center">
      <section className="p-5 bg-slate-100 lg:px-[160px] box-border flex flex-col gap-[40px]">
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

        {bookingStep === 1 && (
          <BasicInformation
            handlePrev={handlePrev}
            bookingStep={bookingStep}
            handleNext={handleNext}
          />
        )}
        {bookingStep === 2 && (
          <StandardRequest handlePrev={handlePrev} handleNext={handleNext} />
        )}
        {bookingStep === 3 && (
          <PaymentMethod handlePrev={handlePrev} handleNext={handleNext} />
        )}
      </section>
    </div>
  );
};
