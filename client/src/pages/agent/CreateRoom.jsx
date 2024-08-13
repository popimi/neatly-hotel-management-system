import SideNavbar from "../../components/agent/SideBar";
import CreateNewRoom from "../../components/agent/CreateNewRooms";

function CreateRoom(){
    return(
        <div className="flex">
        <SideNavbar/>
        <CreateNewRoom/>
        </div>
    )
}
export default CreateRoom