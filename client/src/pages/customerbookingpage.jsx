import { useState } from "react";
import CreateNewRoom from "../components/agent/createnewroom";
import SideNavbar from "../components/agent/sidenavbar";
import Customer from "../components/agent/customerbooking";
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
        {/* <Customer/> */}
        {/* <RoomManagement/> */}
        {/* <CutomerDetail/> */}
        <CreateNewRoom />
      </div>
    </>
  );
}

export default CustomerBooking;
