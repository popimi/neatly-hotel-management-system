import booking from "../assests/icons/booking.png";
import building from "../assests/icons/building.png";
import manage from "../assests/icons/manage.png";
import square from "../assests/icons/square.png";
import logout from "../assests/icons/logout.png";
import logo from "../assests/icons/logo.png";


function SideNavbar(){
    return(
    <nav>
          <div className=" flex min-h-[768px] max-h-[1024px] w-[240px] ">
            <div className="bg-green-800 h-[1024px] w-[240px] gap-[40px]">
              <div className="flex flex-col">
                <headersidenav className="w-[240px] h-[152.34px] px-[40px] py-[24px]">
                  <div className="flex  flex-col justify-center items-center">
                    <img src={logo} alt="logo" className="mt-10" />
                    <p className="text-green-400">
                      Admin Panel Control
                    </p>
                  </div>
                </headersidenav>
                
                <bodysidenav className="
                flex flex-col h-[540px]">
                  <button className=" 
                  flex items-center text-green-300 w-60 h-16 mt-20  
                  hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                    <img src={booking} alt="booking" className="m-5" />
                    Customer Booking
                  </button>

                  <button className=" 
                  flex items-center text-green-300 w-60 h-16 hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                    <img src={building} alt="building" className="m-5" />
                    Room Management
                  </button>

                  <button className=" 
                  flex items-center text-green-300 w-60 h-16 hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                    <img src={manage} alt="manage" className="m-5" />
                    Hotel Information
                  </button>

                  <button className=" 
                  flex items-center text-green-300 w-60 h-16 mb-20 hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                    <img src={square} alt="square" className="m-5" />
                    Room & Property
                  </button>
                  <br />
                </bodysidenav>

                <hr />
              

              <footernav>
                <button className="
                flex items-center text-green-300 w-60 h-16 mb-80 hover:bg-green-500 active:bg-green-300 focus:bg-green-600">
                  <img src={logout} alt="logout" className="m-5" />
                  Log Out
                </button>
              </footernav>
              </div>
            </div>
          </div>
        </nav>
    )
}
export default SideNavbar