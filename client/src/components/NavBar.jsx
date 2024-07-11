import logo from "../assets/icons/HomePage/logo.svg";
import hamburger from "../assets/icons/HomePage/hamburger.svg";
import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  return (
    <nav className="flex flex-row box-border justify-between border-b-[1px] border-gray-300 lg:gap-5 items-center sticky top-0 bg-white z-50 h-[48px] lg:h-[100px]">
      <menu className="flex flex-row lg:justify-evenly lg:w-full">
        <div className="flex flex-row gap-20">
          <Link to={"/"}>
            <img src={`${logo}`} alt="logo" className="lg:scale-[1.5]" />
          </Link>
          <div className="hidden lg:flex lg:flex-row items-center gap-10 lg:text-[1rem]">
            <Link to={"/#description"}>About Neatly</Link>
            <Link to={"/#service"}>Service & Facilities</Link>
            <Link to={"/#rooms&suits"}>Rooms & Suits</Link>
          </div>
        </div>
        <Link
          to={"/login"}
          className="text-orange-500 lg:text-[1rem] hidden lg:block"
        >
          Log in
        </Link>
      </menu>

      <details className="dropdown dropdown-end lg:hidden">
        <summary className="btn m-1 bg-transparent hover:bg-transparent border-transparent hover:border-transparent shadow-transparent">
          <img src={`${hamburger}`} />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-[20rem] h-[25rem] gap-6 p-5 shadow">
          <li>
            <Link to={"#description"}>About Neatly</Link>
          </li>
          <li>
            <Link to={"#service"}>Service & Facilities</Link>
          </li>
          <li>
            <Link to={"#rooms&suits"}>Rooms & Suits</Link>
          </li>
          <li className="text-orange-500 border-t border-t-slate-300 py-8">
            <Link to={"/login"}>Log in</Link>
          </li>
        </ul>
      </details>
    </nav>
  );
}

export default NavBar;
