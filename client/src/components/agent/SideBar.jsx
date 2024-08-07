import booking from "../../assets/icons/SideNavBar/booking.png";
import building from "../../assets/icons/SideNavBar/building.png";
import manage from "../../assets/icons/SideNavBar/manage.png";
import square from "../../assets/icons/SideNavBar/square.png";
import logouticon from "../../assets/icons/SideNavBar/logout.png";
import logo from "../../assets/icons/SideNavBar/logo.png";
import { Link,useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";

function SideNavbar() {
  const { logout, state } = useAuth();
  const location =useLocation()
  const handleLogout = () => {
    logout();
  };
  return (
    <nav >
      <div className=" flex h-[100dvh] w-[240px] sticky top-0">
        <div className="bg-green-800 h-full w-[240px] gap-[40px]">
          <div className="flex flex-col">
            <div className="w-[240px] h-[152.34px] px-[40px] py-[24px]">
              <div className="flex  flex-col justify-center items-center">
                <img src={logo} alt="logo" className="mt-10" />
                <p className="text-green-400">Admin Panel Control</p>
              </div>
            </div>

            <div
              className="
                flex flex-col h-[540px]"
            >
              <Link to="/"
              className=
              {`flex items-center text-green-300 w-60 h-16 mt-20 
                ${location.pathname ==="/"? "bg-green-600":""} 
              hover:bg-green-500 active:bg-green-300 focus:bg-green-600"`} 
              >

                  <img src={booking} alt="booking" className="m-5" />
                  Customer Booking
                
              </Link>
              <Link to="/management"
              className=
              {`flex items-center text-green-300 w-60 h-16 
                ${location.pathname ==="/management"? "bg-green-600":""} 
              hover:bg-green-500 active:bg-green-300 focus:bg-green-600"`} 
              >
                  <img src={building} alt="building" className="m-5" />
                  Room Management
                
              </Link>
              <Link to="/hotelinfo"
              className=
              {`flex items-center text-green-300 w-60 h-16
                ${location.pathname ==="/hotelinfo"? "bg-green-600":""} 
              hover:bg-green-500 active:bg-green-300 focus:bg-green-600"`} 
              >
                  <img src={manage} alt="manage" className="m-5" />
                  Hotel Information
              </Link>
              <Link to="/property"
              className=
              {`flex items-center text-green-300 w-60 h-16 mb-20
                ${location.pathname ==="/property"? "bg-green-600":""} 
              hover:bg-green-500 active:bg-green-300 focus:bg-green-600"`} 
              >
                  <img src={square} alt="square" className="m-5" />
                  Room & Property
                
              </Link>
              <br />
            </div>

            <hr />

            <div>
              <button
                onClick={handleLogout}
                className="
                flex items-center text-green-300 w-60 h-16  hover:bg-green-500 active:bg-green-300 focus:bg-green-600"
              >
                <img src={logouticon} alt="logout" className="p-5" />
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default SideNavbar;
