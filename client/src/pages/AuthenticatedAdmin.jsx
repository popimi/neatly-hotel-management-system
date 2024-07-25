import React from "react";
import { Route, Routes } from "react-router-dom";
import RoomManagement from "./agent/RoomManagement";
import RoomProperty from "./agent/RoomProperty";
import CreateRoom from "./agent/CreateRoom";
import CustomerBooking from "./agent/BookingCustomer";
import CustomerDetail from "./agent/CustomerDetails";
import HotelInfo from "./agent/HotelInfo";
import UpdateRoom from "./agent/UpdatingRoom"

const AuthenticatedAdmin = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomerBooking />} />
        <Route path="/detail/:booking_id" element={<CustomerDetail />} />
        <Route path="/hotelinfo" element={<HotelInfo />} />
        <Route path="/management" element={<RoomManagement />} />
        <Route path="/property" element={<RoomProperty />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/update/:room_id" element={<UpdateRoom/>}/>
      </Routes>
    </div>
  );
};

export default AuthenticatedAdmin;
