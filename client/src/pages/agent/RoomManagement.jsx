import SideNavbar from "../../components/agent/SideBar";
import RoomManage from "../../components/agent/RoomsManagement";
function RoomManagement() {
  return (
    <div className="flex">
      <SideNavbar />
      <RoomManage />
    </div>
  );
}
export default RoomManagement;
