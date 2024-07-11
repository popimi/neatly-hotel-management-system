import { useState } from "react";
import CreateNewRoom from "../components/agent/createnewroom";
import SideNavbar from "../components/agent/sidenavbar";
import Booking from "../components/agent/customerbooking";
import RoomManagement from "../components/agent/roommanagement";
import CutomerDetail from "../components/agent/customerdetail";
// function Customer1(){
//   return(
    
//   )
// }

function CustomerBooking() {
  return (
    <>
      <div className="flex">
        <SideNavbar/>
        {/* <Booking/> */}
        {/* <RoomManagement/> */}
        {/* <CutomerDetail/> */}
        <CreateNewRoom />
      </div>
    </>
  );
}

export default CustomerBooking;
