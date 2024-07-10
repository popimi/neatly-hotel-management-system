import { useState } from "react";
import CreateNewRoom from "../components/createnewroom";
import SideNavbar from "../components/sidenavbar";
import Customer from "../components/customerbooking";
import RoomManagement from "../components/roommanagement";
import CutomerDetail from "../components/customerdetail";
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
