import spa from "../../assets/icons/HomePage/spa.svg";
import sauna from "../../assets/icons/HomePage/sauna.svg";
import fitness from "../../assets/icons/HomePage/fitness.svg";
import lounge from "../../assets/icons/HomePage/lounge.svg";
import wifi from "../../assets/icons/HomePage/wifi.svg";
import parking from "../../assets/icons/HomePage/parking.svg";
import operation from "../../assets/icons/HomePage/operation.svg";

function ServiceBox(props) {
  return (
    <div className="flex flex-col items-center justify-between gap-[19px] w-[144px]">
      <figure className="flex justify-center items-center w-[60px] h-[60px] ">
        <img src={`${props.image}`} className="" />
      </figure>
      <p className="text-center body-1 text-white">{props.title}</p>
    </div>
  );
}

function Service() {
  return (
    <section
      id="service"
      className="flex flex-col justify-center items-center box-border bg-green-700 text-white gap-5 py-[100px] lg:max-h-[680px] scroll-mt-[100px]"
    >
      <div className=" flex flex-col justify-center gap-10 w-full max-w-[1104px] lg:gap-[72px] ">
        <h3 className="text-center text-white a lg:text-[68px] lg:font-[500] lg:leading-[85px]">
          Services & <br className="lg:hidden" /> Facilities
        </h3>
        <div className="flex flex-wrap justify-center gap-4 ">
          <ServiceBox image={spa} title={"Spa"} />
          <ServiceBox image={sauna} title={"Sauna"} />
          <ServiceBox image={fitness} title={"Fitness"} />
          <ServiceBox image={lounge} title={"Arrival Lounge"} />
          <ServiceBox image={wifi} title={"Free Wifi"} />
          <ServiceBox image={parking} title={"Parking"} />
          <ServiceBox image={operation} title={"24 hours operation"} />
        </div>
      </div>
    </section>
  );
}

export default Service;
