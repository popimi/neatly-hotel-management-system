import SideNavbar from "../../components/agent/SideBar"
import UpdatingRoom from "../../components/agent/UpdateRoom"

function UpdateRoom (){
    return(
        <div className="flex">
            <SideNavbar/>
            <UpdatingRoom/>
        </div>
    )
}
export default UpdateRoom