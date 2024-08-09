import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { ProfilePage } from "./ProfilePage";
import { BookingPaymentSteps } from "./Booking/BookingPaymentSteps";
import SearchResultPage from "../pages/SearchResultPage";
import NavBar from "../components/NavBar";
import PaymentSummary from "./Booking/PaymentSummary";
import Refund from "./Booking/Refund";
import CancelBooking from "./Booking/CancelBooking";
import RequestRefund from "../components/refundAndCancel/RequestRefund";
import CancelBookingSuccess from "../components/refundAndCancel/CancelBooking";

const AuthenticatedUser = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:id" element={<ProfilePage />} />
        <Route path="/booking" element={<BookingPaymentSteps />} />
        <Route path="/searchroom" element={<SearchResultPage />} />
        <Route path="/paymentsummary" element={<PaymentSummary/>} />
        <Route path="/refund" element={<Refund/>} />
        <Route path="/cancelbooking" element={<CancelBooking/>} />
        <Route path="/requestrefund" element={<RequestRefund/>} />
        <Route path="/cancelbookingsuccess" element={<CancelBookingSuccess/>} />

        <Route path="/changedate" element={<ChangeDatePage />} />
      </Routes>
    </div>
  );
};

export default AuthenticatedUser;
