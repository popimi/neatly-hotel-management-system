import logo from "../assets/icons/HomePage/logo.svg";
import hamburger from "../assets/icons/HomePage/hamburger.svg";
import { HashLink as Link } from "react-router-hash-link";
import profile from "../assets/icons/NavBar/profile.svg";
import creditcard from "../assets/icons/BookingRoom/creditcard.svg";
import bookinghistory from "../assets/icons/NavBar/bookinghistory.svg";
import logouticon from "../assets/icons/NavBar/logout.svg";
import alertmessage from "../assets/icons/NavBar/alertmessage.svg";
import { useAuth } from "../contexts/authentication";

function AuthenticatedNavBar() {

  const {logout} = useAuth();
  const handleLogout = () => {
    logout();
  }

  return (
    <nav
      className="flex flex-row box-border 
      justify-between lg:gap-5 items-center 
      sticky top-0 bg-white z-50 h-[48px] lg:h-[100px]"
    >
      <menu className="flex flex-row lg:justify-evenly lg:items-center lg:w-full">
        <div className="flex flex-row items-center gap-20">
          <Link to={"/"}>
            <img src={`${logo}`} alt="logo" className="lg:scale-[1.5]" />
          </Link>
          <div className="hidden lg:flex lg:flex-row items-center gap-10 lg:text-[1rem]">
            <Link to={"/#description"}>About Neatly</Link>
            <Link to={"/#service"}>Service & Facilities</Link>
            <Link to={"/#rooms&suits"}>Rooms & Suits</Link>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img src={alertmessage} className="hidden lg:block"/>
          <details className="dropdown dropdown-start">
            <summary className="btn m-1 bg-transparent hover:bg-transparent border-transparent hover:border-transparent shadow-transparent">
              <div className="avatar hidden lg:flex lg:flex-row lg:items-center lg:gap-5">
                <div className="max-h-[50px] rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <p>Kate Cho</p>
              </div>
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-md z-[1] w-[18rem] h-[20rem] gap-6  shadow">
              <li className="">
                <Link to={""} className="gap-3 hover:stroke-black">
                  <img src={profile} className="w-8 h-8" />
                  Profile
                </Link>
              </li>
              <li>
                <Link to={""} className="gap-3 hover:stroke-black">
                  <img src={creditcard} />
                  Payment Method
                </Link>
              </li>
              <li>
                <Link to={"#rooms&suits"} className="gap-3 hover:stroke-black">
                  <img src={bookinghistory} className="w-8 h-8" />
                  Booking History
                </Link>
              </li>
              <li className=" border-t border-t-slate-300">
                <button onClick={handleLogout} className="p-5">
                  <img src={logouticon} className="w-8 h-8" />
                  Log Out
                </button>
              </li>
            </ul>
          </details>
        </div>
      </menu>
      <div className="flex flex-row lg:hidden">
        <img src={alertmessage} />
        <details className="dropdown dropdown-end lg:hidden">
          <summary className="btn m-1 bg-transparent hover:bg-transparent border-transparent hover:border-transparent shadow-transparent">
            <img src={`${hamburger}`} />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-md z-[1] w-[18rem] h-[18rem] gap-6  shadow">
            <li className="">
              <Link to={""} className="gap-3 hover:stroke-black">
                <img src={profile} className="w-8 h-8" />
                Profile
              </Link>
            </li>
            <li>
              <Link to={""} className="gap-3 hover:stroke-black">
                <img src={creditcard} />
                Payment Method
              </Link>
            </li>
            <li>
              <Link to={""} className="gap-3 hover:stroke-black">
                <img src={bookinghistory} className="w-8 h-8" />
                Booking History
              </Link>
            </li>
            <li className=" border-t border-t-slate-300">
              <Link to={""} className="p-5">
                <img src={logouticon} />
                Log Out
              </Link>
            </li>
          </ul>
        </details>
      </div>
    </nav>
  );
}

export default AuthenticatedNavBar;
