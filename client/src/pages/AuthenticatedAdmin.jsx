import React from "react";
import { Route, Routes } from "react-router-dom";
import RoomManagement from "./agent/RoomManagement";
import RoomProperty from "./agent/RoomProperty";
import CreateRoom from "./agent/CreateRoom";
import CustomerBooking from "./agent/BookingCustomer";
import CustomerDetail from "./agent/CustomerDetails";
import HotelInfo from "./agent/HotelInfo";
import { ProfilePage } from "./ProfilePage";



const AuthenticatedAdmin = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerBooking />} />
        <Route path="/detail" element={<CustomerDetail />} />
        <Route path="/hotelinfo" element={<HotelInfo />} />
        <Route path="/management" element={<RoomManagement />} />
        <Route path="/property" element={<CreateRoom />} />
      </Routes>
    </div>
  );
};

export default AuthenticatedAdmin;
