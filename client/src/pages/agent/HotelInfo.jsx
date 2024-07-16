import SideNavbar from "../../components/agent/SideBar";
import HotelInformation from "../../components/agent/HotelInform"
function HotelInfo(){
    return(
        <div className="flex">
        <SideNavbar/>
        <HotelInformation/>
        </div>
    )
}
export default HotelInfo