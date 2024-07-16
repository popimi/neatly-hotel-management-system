import booking from "../../assets/icons/SideNavBar/booking.png";
import building from "../../assets/icons/SideNavBar/building.png";
import manage from "../../assets/icons/SideNavBar/manage.png";
import square from "../../assets/icons/SideNavBar/square.png";
import logouticon from "../../assets/icons/SideNavBar/logout.png";
import logo from "../../assets/icons/SideNavBar/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";

function SideNavbar(){
  const { logout, isToken } = useAuth();
  const { id } = isToken;
  console.log(id);
  const handleLogout = () => {
    logout();
  };
    return(
        <nav>
          <div className=" flex min-h-[768px] max-h-[1024px] w-[240px] ">
            <div className="bg-green-800 h-[1024px] w-[240px] gap-[40px]">
              <div className="flex flex-col">
                <div className="w-[240px] h-[152.34px] px-[40px] py-[24px]">
                  <div className="flex  flex-col justify-center items-center">
                    <img src={logo} alt="logo" className="mt-10" />
                    <p className="text-green-400">
                      Admin Panel Control
                    </p>
                  </div>
                </div>
                
                <div className="
                flex flex-col h-[540px]">
                  <Link to="/">
                  <button className=" 
                  flex items-center text-green-300 w-60 h-16 mt-20  
                  hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                    <img src={booking} alt="booking" className="m-5" />
                    Customer Booking
                  </button>
                  </Link>
                  <Link to ="/management">
                  <button className=" 
                  flex items-center text-green-300 w-60 h-16 hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                    <img src={building} alt="building" className="m-5" />
                    Room Management
                  </button>
                  </Link>
                  <Link to ="/hotelinfo">
                  <button className=" 
                  flex items-center text-green-300 w-60 h-16 hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                    <img src={manage} alt="manage" className="m-5" />
                    Hotel Information
                  </button>
                  </Link>
                  <Link to ="/property">
                  <button 
                  className=" 
                  flex items-center text-green-300 w-60 h-16 mb-20 hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                    <img src={square} alt="square" className="m-5" />
                    Room & Property
                  </button>
                  </Link>
                  <br />
                </div>

                <hr />
              

              <div>
             
                <button 
                onClick={handleLogout}
                className="
                flex items-center text-green-300 w-60 h-16 mb-80 hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                  <img src={logouticon} alt="logout" className="m-5" />
                  Log Out
                </button>
                

              </div>
              </div>
            </div>
          </div>
        </nav>
    )
}
export default SideNavbar