import SideNavbar from "../../components/agent/sidenavbar";
import RoomManage from "../../components/agent/roommanagement";
function RoomManagement(){
    return(
        <div className="flex">
        <SideNavbar/>
        <RoomManage/>
        </div>
    )
}
export default RoomManagement