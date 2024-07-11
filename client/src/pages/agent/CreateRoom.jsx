import SideNavbar from "../../components/agent/sidenavbar";
import CreateNewRoom from "../../components/agent/createnewroom";

function CreateRoom(){
    return(
        <div className="flex">
        <SideNavbar/>
        <CreateNewRoom/>
        </div>
    )
}
export default CreateRoom