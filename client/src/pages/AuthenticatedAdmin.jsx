import React from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./agent/CustomerBooking";
import RoomManagement from "./agent/HotelInformation";
import RoomProperty from "./agent/RoomProperty"
import CreateRoom from "./agent/CreateRoom";
const AuthenticatedAdmin = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/booking" element={<Booking/>} />
        <Route path="/management" element={<RoomManagement/>} />
        {/* <Route path="/info" element={<HotelInformation/>} /> */}
        <Route path="/property" element={<RoomProperty/>} />
        <Route path="/create" element={<CreateRoom/>} />
      </Routes>
    </div>
  );
};

export default AuthenticatedAdmin;
