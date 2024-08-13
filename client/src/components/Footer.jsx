import logo from "../assets/icons/HomePage/logo-white.svg";
import phone from "../assets/icons/HomePage/phone.svg";
import mail from "../assets/icons/HomePage/mail.svg";
import location from "../assets/icons/HomePage/location.svg";
import facebook from "../assets/icons/HomePage/facebook.svg";
import instagram from "../assets/icons/HomePage/instagram.svg";
import twitter from "../assets/icons/HomePage/twitter.svg";

function Footer() {
  return (
    <section>
      <footer className="bg-green-800 flex flex-col box-border px-10">
        <div className="flex flex-col p-10 lg:flex-row lg:justify-between lg:text-[0.8rem]">
          <div className="flex flex-col py-5 lg:p-5 lg:w-1/2">
            <figure>
              <img src={logo} />
            </figure>
            <h5 className="text-green-200 pt-5">Neatly Hotel</h5>
            <p className="text-green-200">
              The best hotel for rising your experience
            </p>
          </div>
          <div className="flex flex-col py-5 gap-5 lg:p-5 lg:w-1/2 lg:pl-[10rem] lg:items-start">
            <h5 className="text-green-200">CONTACT</h5>
            <div className="flex flex-row gap-5 text-green-200">
              <img src={phone} />
              <p> +66 99 999 9999</p>
            </div>
            <div className="flex flex-row gap-5 text-green-200">
              <img src={mail} />
              <p> contact@neatlyhotel.com</p>
            </div>
            <div className="flex flex-row gap-5 text-green-200">
              <img src={location} />
              <p className="text-balance">
                {" "}
                188 Phaya Thai Rd, Thung Phaya Thai,<br/> Ratchathewi, Bangkok 10400
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-5 border-t border-t-slate-500/50 text-green-200 p-6 lg:m-12 lg:mb-4">
          <figure className="flex flex-row gap-3">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
          </figure>
          <p className="text-[0.8rem]">Copyright ©2022 Neatly Hotel</p>
        </div>
      </footer>
    </section>
  );
}
export default Footer;
