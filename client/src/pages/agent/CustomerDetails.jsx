import SideNavbar from "../../components/agent/sidenavbar";
import CutomerDetail from "../../components/agent/customerdetail";

function CustomerDetail(){
    return(
        <div className="flex">
        <SideNavbar/>
        <CutomerDetail/>
        </div>
    )
}
export default CustomerDetail