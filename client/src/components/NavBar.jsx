import logo from "../assets/icons/HomePage/logo.svg";
import profile from "../assets/icons/NavBar/profile.svg";
import creditcard from "../assets/icons/BookingRoom/creditcard.svg";
import bookinghistory from "../assets/icons/NavBar/bookinghistory.svg";
import logouticon from "../assets/icons/NavBar/logout.svg";
import alertmessage from "../assets/icons/NavBar/alertmessage.svg";
import hamburger from "../assets/icons/HomePage/hamburger.svg";
import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/authentication";
import axios from "axios";

function NavBar() {
  const { isAuthenticated, logout, state, apiPort, apiUrl } = useAuth();
  const [isToggle, setIsToggle] = useState(false);
  const [img, setImg] = useState(null);
  const width = window.innerWidth;
  const profileImg = async () => {
    let result;
    try {
      result = await axios.get(`${apiUrl}:${apiPort}/users/${state.user.id}`);
      setImg(result.data.data.profile_picture);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  const handleNavigate = () => {
    setIsToggle(false);
    localStorage.removeItem("bookingStep");
  };
  const handleLogout = () => {
    setIsToggle(false);
    logout();
  };

  useEffect(() => {
    profileImg();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        handleNavigate();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className="flex flex-row box-border 
      justify-between lg:gap-5 items-center 
      sticky top-0 bg-white z-50 h-[48px] lg:h-[100px]"
      >
        {/* ส่วนแถบเมนู ทั้งหมด */}

        <menu className="flex flex-row lg:justify-evenly lg:items-center lg:w-full">
          <div className="flex flex-row items-center gap-20">
            <Link to={"/"} onClick={handleNavigate}>
              <img src={`${logo}`} alt="logo" className="lg:scale-[1.5]" />
            </Link>
            <div className="hidden lg:flex lg:flex-row items-center gap-10 lg:text-[1.25rem]">
              <Link
                to={"/#description"}
                onClick={handleNavigate}
                className="hover:shadow-lg duration-500 p-2 rounded-md"
              >
                About Neatly
              </Link>
              <Link
                to={"/#service"}
                onClick={handleNavigate}
                className="hover:shadow-lg duration-500 p-2 rounded-md"
              >
                Service & Facilities
              </Link>
              <Link
                to={"/#rooms&suits"}
                onClick={handleNavigate}
                className="hover:shadow-lg duration-500 p-2 rounded-md"
              >
                Rooms & Suits
              </Link>
            </div>
          </div>
          {isAuthenticated ? (
            <div className="hidden lg:flex lg:flex-row gap-4">
              {isAuthenticated && <img src={alertmessage} />}
              <button
                onClick={handleToggle}
                className="m-1 flex flex-row items-center gap-3"
              >
                <img
                  src={
                    typeof img == "object"
                      ? URL.createObjectURL(new Blob([img]))
                      : img
                  }
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                />
                {state.user.username}
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              onClick={handleNavigate}
              className="text-orange-500 lg:text-[1.25rem] hidden lg:block"
            >
              Log in
            </Link>
          )}
        </menu>
        <div className="flex flex-row lg:hidden">
          {isAuthenticated && <img src={alertmessage} />}
          <button onClick={handleToggle} className="m-1">
            <img src={`${hamburger}`} />
          </button>
        </div>
      </nav>

      {/* ส่วน hamburger menu */}

      <div
        className={`${
          isToggle
            ? isAuthenticated
              ? "block"
              : width < 1024
              ? "block"
              : "hidden"
            : "hidden"
        } ${
          width < 1024 ? "inset-0" : ""
        } z-[999] fixed top-[5%] lg:top-[10%] lg:right-0 lg:w-[30dvw] lg:h-[80dvh] bg-white`}
      >
        <ul className="flex flex-col p-2">
          {isAuthenticated ? (
            <>
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link
                  to={`/users/${state.user.id}`}
                  onClick={handleNavigate}
                  className="gap-5 py-5 hover:stroke-black flex flex-row items-center border-b-2 border-b-slate-200"
                >
                  <img
                    src={
                      typeof img == "object"
                        ? URL.createObjectURL(new Blob([img]))
                        : img
                    }
                    alt={state.user.username}
                    className="w-16 h-16 rounded-full "
                  />
                  <p className="text-[18px]">{state.user.username}</p>
                </Link>
              </li>
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link
                  to={`/users/${state.user.id}`}
                  onClick={handleNavigate}
                  className="gap-3 hover:stroke-black flex flex-row items-center"
                >
                  <img src={profile} className="w-8 h-8 lg:w-10 lg:h-10" />
                  <p className="text-[18px]">Profile</p>
                </Link>
              </li>
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link
                  to={""}
                  onClick={handleNavigate}
                  className="gap-3 hover:stroke-black flex flex-row items-center"
                >
                  <img src={creditcard} className="w-8 h-8 lg:w-10 lg:h-10" />
                  <p className="text-[18px]">Payment Method</p>
                </Link>
              </li>
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link
                  to={""}
                  onClick={handleNavigate}
                  className="gap-3  flex flex-row items-center"
                >
                  <img
                    src={bookinghistory}
                    className="w-8 h-8 lg:w-10 lg:h-10"
                  />
                  <p className="text-[18px]">Booking History</p>
                </Link>
              </li>
              <li className=" border-t border-t-slate-300 hover:bg-slate-100 duration-500 p-3 my-5 rounded-xl lg:text-[1.5rem]">
                <button
                  onClick={handleLogout}
                  className="flex flex-row items-center gap-3 py-5"
                >
                  <img src={logouticon} className="w-8 h-8 lg:w-10 lg:h-10" />
                  <p className="text-[18px]">Log Out</p>
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link
                  to={"/#description"}
                  onClick={handleNavigate}
                  className="hover:shadow-lg duration-500 p-2 rounded-md"
                >
                 <p className="text-[18px]">About Neatly</p>
                </Link>
              </li>
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link
                  to={"/#service"}
                  onClick={handleNavigate}
                  className="hover:shadow-lg duration-500 p-2 rounded-md"
                >
                  <p className="text-[18px]">Service & Facilities</p>
                </Link>
              </li>
              <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link
                  to={"/#rooms&suits"}
                  onClick={handleNavigate}
                  className="hover:shadow-lg duration-500 p-2 rounded-md"
                >
                  <p className="text-[18px]">Rooms & Suits</p>
                </Link>
              </li>
              <li className=" border-t border-t-slate-300 hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
                <Link
                  to={"/login"}
                  onClick={handleNavigate}
                  className="text-orange-500 lg:text-[1rem] p-2"
                >
                  <p className="text-[18px]">Log in</p>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
