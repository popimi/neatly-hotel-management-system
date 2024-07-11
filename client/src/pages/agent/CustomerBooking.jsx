import SideNavbar from "../../components/agent/sidenavbar";
import {BookingCus} from "../../component/agent/customerbooking";

function Booking(){
    return(
        <div className="flex">
        <SideNavbar/>
        <BookingCus/>
        </div>
    )
}
export default Booking