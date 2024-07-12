import SideNavbar from "../../components/agent/SideBar";
import BookingCustomer from "../../components/agent/BookingCustomers"
function CustomerBooking(){
    return(
        <div className="flex">
        <SideNavbar/>
        <BookingCustomer/>
        </div>
    )
}
export default CustomerBooking