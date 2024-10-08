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
import ChangeDatePage from "./ChangeDatePage";
import BookingHistoryPage from "./BookingHistoryPage";
import RoomDetailPage from './RoomDetailPage'


const AuthenticatedUser = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:id" element={<ProfilePage />} />
        <Route path="/booking" element={<BookingPaymentSteps />} />
        <Route path="/searchroom" element={<SearchResultPage />} />
        <Route path="/roomdetail/:id" element={<RoomDetailPage />} />
        <Route path="/paymentsummary" element={<PaymentSummary/>} />
        <Route path="/refund/:id" element={<Refund/>} />
        <Route path="/cancelbooking" element={<CancelBooking/>} />
        <Route path="/refund/:id/requestrefund" element={<RequestRefund/>} />
        <Route path="/cancelbookingsuccess" element={<CancelBookingSuccess/>} />
        <Route path="/changedate" element={<ChangeDatePage />} />
        <Route path='/bookinghistory' element={<BookingHistoryPage/>} />
      </Routes>
    </div>
  );
};

export default AuthenticatedUser;
