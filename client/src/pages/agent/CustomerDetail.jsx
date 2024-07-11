import SideNavbar from "../../components/agent/sidenavbar";
import CutomerDetail from "../customerbookingpage";

function Booking(){
    return(
        <div className="flex">
        <SideNavbar/>
        <CutomerDetail/>
        </div>
    )
}
export default Booking