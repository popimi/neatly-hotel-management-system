import SideNavbar from "../../components/agent/sidenavbar";
import BookingCustomer from "../../components/agent/bookingcustomer"
function CustomerBooking(){
    return(
        <div className="flex">
        <SideNavbar/>
        <BookingCustomer/>
        </div>
    )
}
export default CustomerBooking