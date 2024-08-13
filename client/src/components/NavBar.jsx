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
import io from "socket.io-client";

function NavBar() {
  const { isAuthenticated, logout, state, apiUrl } = useAuth();
  const [isToggle, setIsToggle] = useState(false);
  const [img, setImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  const [notice, setNotice] = useState([]);
  const [checkIn, setCheckIn] = useState([]);
  const width = window.innerWidth;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const profileImg = async () => {
    let result;
    try {
      result = await axios.get(`${apiUrl}/users/${state.user.id}`);
      setImg(result.data.data.profile_picture);
    } catch (error) {
      console.log(error);
    }
  };

  const checkInRoom = async () => {
    let result;
    try {
      result = await axios.get(`${apiUrl}/check-in/${state.user.id}`);
      setCheckIn(result.data.data);
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

  const handleNotice = () => {
    setIsOpen(!isOpen);
  };

  const read = () => {
    setNotice([]);
    setIsOpen(false);
    setCheckIn([]);
  };

  useEffect(() => {
    if (isAuthenticated) {
      profileImg();
      checkInRoom();
    }
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
            <Link
              to={"/"}
              onClick={() => {
                handleNavigate();
                scrollTo({ top: 0 });
              }}
            >
              <img src={`${logo}`} alt="logo" className="lg:scale-[1.5]" />
            </Link>
            <div className="hidden lg:flex lg:flex-row items-center gap-10 text-black text-[14px] leading-[16px] font-normal">
              <Link
                to={"/#description"}
                onClick={handleNavigate}
                className="duration-500 p-2 rounded-md"
              >
                About Neatly
              </Link>
              <Link
                to={"/#service"}
                onClick={handleNavigate}
                className="duration-500 p-2 rounded-md"
              >
                Service & Facilities
              </Link>
              <Link
                to={"/#rooms&suits"}
                onClick={handleNavigate}
                className="duration-500 p-2 rounded-md"
              >
                Rooms & Suits
              </Link>
            </div>
          </div>
          {isAuthenticated ? (
            <div className="hidden lg:flex lg:flex-row gap-4 relative items-center">
              {isAuthenticated && (
                <>
                  <button
                    onClick={handleNotice}
                    className="hover:bg-slate-100 focus:bg-slate-100 w-10 h-10 flex justify-center items-center rounded-full relative"
                    socket={socket}
                  >
                    <img src={alertmessage} className="w-6 h-6 " />
                    {notice.length > 0 && (
                      <div className="absolute top-1 right-2 bg-orange-500 w-3 h-3 rounded-full flex justify-center items-center text-white"></div>
                    )}
                  </button>
                  {isOpen && (
                    <button className="h-fit absolute top-[50px] right-[110px] py-2 rounded drop-shadow-xl bg-white hover:bg-slate-100 overflow-y-hidden">
                      {checkIn.map((item, i) => {
                        return (
                          <div
                            className="w-[370px] h-[87px] flex p-2 relative gap-6"
                            key={i}
                          >
                            <img
                              src={item.main_image}
                              className="w-8 h-8 rounded-full bg-white"
                            />
                            <div className="flex text-start">
                              <p className="body-2">
                                Tomorrow check-in date with {item.type} `
                                <span className="font-bold">
                                  {new Date(item.checked_in).toLocaleString()}
                                </span>
                                ` Will we wait for your arrival
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </button>
                  )}
                </>
              )}
              <button
                onClick={handleToggle}
                className="m-1 flex flex-row items-center gap-3"
              >
                <img
                  src={
                    img
                      ? img
                      : "https://res.cloudinary.com/dtclqxrrt/image/upload/v1723435583/lblu7r2biividgqdcuqg.png"
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
              className="text-orange-500 text-[14px] leading-[16px] font-normal hidden lg:block"
            >
              Log in
            </Link>
          )}
        </menu>
        <div className="flex flex-row lg:hidden">
          {isAuthenticated && (
            <>
              <button
                onClick={handleNotice}
                className="hover:bg-slate-100 focus:bg-slate-100 w-10 h-10 flex justify-center items-center rounded-full relative"
                socket={socket}
              >
                <img src={alertmessage} className="w-6 h-6 " />
                {notice.length > 0 && (
                  <div className="absolute top-1 right-2 bg-orange-500 w-3 h-3 rounded-full flex justify-center items-center text-white"></div>
                )}
              </button>
              {isOpen && (
                <button className="h-fit absolute top-[40px] right-[40px] py-2 rounded drop-shadow-xl bg-white hover:bg-slate-100 overflow-y-hidden">
                  {checkIn.map((item, i) => {
                    return (
                      <div
                        className="w-[370px] h-[87px] flex justify-center relative gap-2"
                        socket={socket}
                        user={state}
                        onClick={read}
                        key={i}
                      >
                        <img
                          src={item.main_image}
                          className="w-8 h-8 rounded-full bg-white"
                        />
                        <div className="w-[298px] h-[63px]">
                          <p className="text-[14px] text-left">{notice}</p>
                        </div>
                      </div>
                    );
                  })}
                </button>
              )}
            </>
          )}
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
                      img
                        ? img
                        : "https://res.cloudinary.com/dtclqxrrt/image/upload/v1723435583/lblu7r2biividgqdcuqg.png"
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
                  to={"/bookinghistory"}
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
