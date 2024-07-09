import logo from "../assets/icons/HomePage/logo.svg";
import hamburger from "../assets/icons/HomePage/hamburger.svg";

function NavBar() {
  return (
    <nav
      className="flex flex-row box-border 
      justify-between lg:gap-5 items-center 
      sticky top-0 bg-white z-50 h-[48px] lg:h-[100px]"
    >
      <menu className="flex flex-row lg:justify-evenly lg:w-full">
        <div className="flex flex-row gap-20">
          <img src={`${logo}`} alt="logo" className="lg:scale-[1.5]" />
          <div className="hidden lg:flex lg:flex-row items-center gap-10 lg:text-[1rem]">
            <a href="#description">About Neatly</a>
            <a href="#service">Service & Facilities</a>
            <a href="#rooms&suits">Rooms & Suits</a>
          </div>
        </div>
        <a className="text-orange-500 lg:text-[1rem] hidden lg:block">Log in</a>
      </menu>

      <details className="dropdown dropdown-end lg:hidden">
        <summary className="btn m-1 bg-transparent hover:bg-transparent border-transparent hover:border-transparent shadow-transparent">
          <img src={`${hamburger}`} />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-[20rem] h-[25rem] gap-6 p-5 shadow">
          <li>
            <a href="#description">About Neatly</a>
          </li>
          <li>
            <a href="#service">Service & Facilities</a>
          </li>
          <li>
            <a href="#rooms&suits">Rooms & Suits</a>
          </li>
          <li className="text-orange-500 border-t border-t-slate-300 py-8">
            <a>Log in</a>
          </li>
        </ul>
      </details>
    </nav>
  );
}

export default NavBar;
