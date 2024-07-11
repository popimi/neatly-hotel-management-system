import "../App.css";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import CustomerBooking from "./customerbookingpage";

function UnauthenticatedApp() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<CustomerBooking />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
