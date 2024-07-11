import logo from "../assets/icons/HomePage/logo.svg";
import hamburger from "../assets/icons/HomePage/hamburger.svg";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

function NavBar() {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    isToggle == false ? setIsToggle(true) : setIsToggle(false);
  };

  return (
    <>
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
            <div className="hidden lg:flex lg:flex-row items-center gap-10 lg:text-[1.25rem]">
              <Link
                to={"/#description"}
                className="hover:shadow-lg duration-500 p-2 rounded-md"
              >
                About Neatly
              </Link>
              <Link
                to={"/#service"}
                className="hover:shadow-lg duration-500 p-2 rounded-md"
              >
                Service & Facilities
              </Link>
              <Link
                to={"/#rooms&suits"}
                className="hover:shadow-lg duration-500 p-2 rounded-md"
              >
                Rooms & Suits
              </Link>
            </div>
          </div>
          <Link
            to={"/login"}
            className="text-orange-500 lg:text-[1.25rem] hidden lg:block"
          >
            Log in
          </Link>
        </menu>

        <details className="dropdown dropdown-end lg:hidden">
          <summary
            onClick={handleToggle}
            className="btn m-1 bg-transparent hover:bg-transparent border-transparent hover:border-transparent shadow-transparent"
          >
            <img src={`${hamburger}`} />
          </summary>
        </details>
      </nav>
      <div
        className={`${
          isToggle == true ? "block" : "hidden"
        } w-[100dvw] h-[100dvh] z-[9999999] bg-white sticky top-[0%] left-[0%] lg:hidden`}
      >
        <ul className="flex flex-col p-2">
          <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
            <Link
              to={"/#description"}
              className="hover:shadow-lg duration-500 p-2 rounded-md"
            >
              About Neatly
            </Link>
          </li>
          <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
            <Link
              to={"/#service"}
              className="hover:shadow-lg duration-500 p-2 rounded-md"
            >
              Service & Facilities
            </Link>
          </li>
          <li className="hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
            <Link
              to={"/#rooms&suits"}
              className="hover:shadow-lg duration-500 p-2 rounded-md"
            >
              Rooms & Suits
            </Link>
          </li>
          <li className=" border-t border-t-slate-300 hover:bg-slate-100 duration-500 p-3 py-5 rounded-xl lg:text-[1.5rem]">
            <Link
              to={"/login"}
              className="text-orange-500 lg:text-[1rem] p-2"
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
