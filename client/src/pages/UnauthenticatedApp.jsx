import "../App.css";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "../components/NavBar";
import { ProfilePage } from "./ProfilePage";
import { BookingPaymentSteps } from "./Booking/BookingPaymentSteps";
import SearchResultPage from "../pages/SearchResultPage";
import BookingHistoryPage from "./BookingHistoryPage";

function UnauthenticatedApp() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/searchroom" element={<SearchResultPage />} />
        <Route path="/bookinghistory" element={<BookingHistoryPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
