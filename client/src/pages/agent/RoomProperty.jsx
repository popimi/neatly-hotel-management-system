import SideNavbar from "../../components/agent/SideBar";
import RoomProperty from "../../components/agent/Rooms&Property";
function CreateRoom(){
    return(
        <div className="flex">
        <SideNavbar/>
        <RoomProperty/>
        </div>
    )
}
export default CreateRoom