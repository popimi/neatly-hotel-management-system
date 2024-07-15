import logo from "../assets/icons/HomePage/logo.svg";
import hamburger from "../assets/icons/HomePage/hamburger.svg";
import { HashLink as Link } from "react-router-hash-link";
import profile from "../assets/icons/NavBar/profile.svg";
import creditcard from "../assets/icons/BookingRoom/creditcard.svg";
import bookinghistory from "../assets/icons/NavBar/bookinghistory.svg";
import logouticon from "../assets/icons/NavBar/logout.svg";
import alertmessage from "../assets/icons/NavBar/alertmessage.svg";
import { useAuth } from "../contexts/authentication";
import { useState } from "react";

function AuthenticatedNavBar() {
  const [isToggle, setIsToggle] = useState(false);
  const { logout, isToken } = useAuth();
  const { id , username } = isToken;
  const handleToggle = () => {
    isToggle == false ? setIsToggle(true) : setIsToggle(false);
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <nav
        className="sticky flex flex-row box-border 
      justify-between lg:gap-5 items-center 
      top-0 bg-white z-50 h-[48px] lg:h-[100px]"
      >
        <menu className="flex flex-row lg:justify-evenly lg:items-center lg:w-full">
          <div className="flex flex-row items-center gap-20">
            <Link to={"/"}>
              <img src={`${logo}`} alt="logo" className="lg:scale-[1.5]" />
            </Link>
            <div className="hidden lg:flex lg:flex-row items-center gap-10 lg:text-[1.25rem]">
              <Link to={"/#description"} className="hover:shadow-lg duration-500 p-2 rounded-md">About Neatly</Link>
              <Link to={"/#service"} className="hover:shadow-lg duration-500 p-2 rounded-md" >Service & Facilities</Link>
              <Link to={"/#rooms&suits"} className="hover:shadow-lg duration-500 p-2 rounded-md" >Rooms & Suits</Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <img src={alertmessage} className="hidden lg:block" />
            <button onClick={handleToggle} className="hover:shadow-lg duration-500 p-2 rounded-md">
              <div className="avatar hidden lg:flex lg:flex-row lg:items-center lg:gap-5">
                <div className="max-h-[50px] rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <p className="text-[1.25rem] ">{username}</p>
              </div>
            </button>
          </div>
        </menu>
        <div className="flex flex-row lg:hidden">
          <img src={alertmessage} />
          <details className="dropdown dropdown-end lg:hidden">
            <summary onClick={handleToggle} className="btn m-1 bg-transparent hover:bg-transparent border-transparent hover:border-transparent shadow-transparent">
              <img src={`${hamburger}`} />
            </summary>
          </details>
        </div>
      </nav>
      <div
        className={`${
          isToggle == true ? "block" : "hidden"
        } w-[100dvw] h-[100dvh] z-[9999999] bg-white sticky top-[0%] left-[0%]`}
      >
        <ul className="flex flex-col p-2">
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link to={`/users/${id}`} className="gap-3 hover:stroke-black flex flex-row items-center">
                  <img src={profile} className="w-8 h-8 lg:w-12 lg:h-12" />
                  Profile
                </Link>
              </li>
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link to={""} className="gap-3 hover:stroke-black flex flex-row items-center">
                  <img src={creditcard} className="w-8 h-8 lg:w-12 lg:h-12" />
                  Payment Method
                </Link>
              </li>
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link to={""} className="gap-3  flex flex-row items-center">
                  <img src={bookinghistory} className="w-8 h-8 lg:w-12 lg:h-12" />
                  Booking History
                </Link>
              </li>
              <li className=" border-t border-t-slate-300 hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <button onClick={handleLogout} className="flex flex-row items-center gap-3 py-10 ">
                  <img src={logouticon} className="w-8 h-8 lg:w-12 lg:h-12" />
                  Log Out
                </button>
              </li>
            </ul>
      </div>
    </>
  );
}

export default AuthenticatedNavBar;
