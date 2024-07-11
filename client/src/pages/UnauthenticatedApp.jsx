import "../App.css";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "../components/NavBar";
import { ProfilePage } from "./ProfilePage";
import { BookingPaymentSteps } from "./Booking/BookingPaymentSteps";

function UnauthenticatedApp() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPaymentSteps />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/booking" element={<BookingRoom />} />
        <Route path="/bookingRequirement" element={<BookingRoomReq />} />
        <Route path="/bookingPayment" element={<BookingRoomPayment />} />
        <Route path="/bookingSummary" element={<BookingSummary />} />
        <Route path="*" element={<LoginPage />} />
        <Route path="/searchResult" element={<SearchResultPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
