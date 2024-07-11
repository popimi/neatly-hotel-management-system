import spa from "../../assets/icons/HomePage/spa.svg";
import sauna from "../../assets/icons/HomePage/sauna.svg";
import fitness from "../../assets/icons/HomePage/fitness.svg";
import lounge from "../../assets/icons/HomePage/lounge.svg";
import wifi from "../../assets/icons/HomePage/wifi.svg";
import parking from "../../assets/icons/HomePage/parking.svg";
import operation from "../../assets/icons/HomePage/operation.svg";

function Service() {
  return (
    <section id='service' className="flex flex-col items-center box-border bg-green-700 text-white gap-5 py-10 lg:py-20">
      <h1 className="text-5xl lg:text-[4rem] text-center text-white">
        Services & <br /> Facilities
      </h1>
      <div className="flex flex-wrap justify-center p-5 max-w-[500px] lg:max-w-[100dvw] lg:grid lg:grid-rows-1 lg:grid-cols-7">
        <div className="flex flex-col items-center justify-between px-4 py-5 w-1/2 lg:w-full">
          <figure className="flex items-start">
            <img src={`${spa}`} />
          </figure>
          <p className="text-center lg:text-[0.7rem]">Spa</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full">
          <figure className="flex items-start">
            <img src={`${sauna}`} />
          </figure>
          <p className="text-center lg:text-[0.7rem]">Sauna</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full">
          <figure>
            <img src={`${fitness}`} />
          </figure>
          <p className="text-center lg:text-[0.7rem]">Fitness</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full">
          <figure>
            <img src={`${lounge}`} />
          </figure>
          <p className="text-center lg:text-[0.7rem]">Arrival Lounge</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full">
          <figure>
            <img src={`${wifi}`} />
          </figure>
          <p className="text-center lg:text-[0.7rem]">Free Wifi</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full">
          <figure>
            <img src={`${parking}`} />
          </figure>
          <p className="text-center lg:text-[0.7rem]">Parking</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 lg:w-full">
          <figure>
            <img src={`${operation}`} />
          </figure>
          <p className="text-center lg:text-[0.7rem]">24 hours operation</p>
        </div>
      </div>
    </section>
  );
}

export default Service;