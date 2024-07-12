import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AuthenticatedNavBar from "../components/AuthenticatedNavBar";
import { ProfilePage } from "./ProfilePage";
import { BookingPaymentSteps } from "./Booking/BookingPaymentSteps";
import SearchResultPage from "../pages/SearchResultPage";

const AuthenticatedUser = () => {
  return (
    <div>
      <AuthenticatedNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:id" element={<ProfilePage />} />
        <Route path="/booking" element={<BookingPaymentSteps />} />
        <Route path="/searchroom" element={<SearchResultPage />} />
      </Routes>
    </div>
  );
};

export default AuthenticatedUser;
