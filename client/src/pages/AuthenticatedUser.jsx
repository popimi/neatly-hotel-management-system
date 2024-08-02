import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { ProfilePage } from "./ProfilePage";
import { BookingPaymentSteps } from "./Booking/BookingPaymentSteps";
import SearchResultPage from "../pages/SearchResultPage";
import NavBar from "../components/NavBar";
import PaymentSummary from "./Booking/PaymentSummary";


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
        
        
      </Routes>
    </div>
  );
};

export default AuthenticatedUser;
