import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingRoom from "./Booking/BookingRoom";
import BookingRoomReq from "./Booking/BookingRoomReq";
import BookingRoomPayment from "./Booking/BookingRoomPayment";
import BookingSummary from './Booking/PaymentSummary'
import AuthenticatedNavBar from "../components/AuthenticatedNavBar";
import { ProfilePage } from "./ProfilePage";
import SearchResultPage from './SearchResultPage'

const AuthenticatedUser = () => {
  return (
    <div>
      <AuthenticatedNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:id" element={<ProfilePage />} />
        <Route path="/booking" element={<BookingRoom />} />
        <Route path="/bookingRequirement" element={<BookingRoomReq />} />
        <Route path="/bookingPayment" element={<BookingRoomPayment />} />
        <Route path="/bookingSummary" element={<BookingSummary />} />
        <Route path="/searchResult" element={<SearchResultPage />} />
      </Routes>
    </div>
  );
};

export default AuthenticatedUser;
