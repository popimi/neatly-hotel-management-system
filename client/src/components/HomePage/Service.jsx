import spa from "../../assets/icons/HomePage/spa.svg";
import sauna from "../../assets/icons/HomePage/sauna.svg";
import fitness from "../../assets/icons/HomePage/fitness.svg";
import lounge from "../../assets/icons/HomePage/lounge.svg";
import wifi from "../../assets/icons/HomePage/wifi.svg";
import parking from "../../assets/icons/HomePage/parking.svg";
import operation from "../../assets/icons/HomePage/operation.svg";

function Service() {
  return (
    <section id='service' className="flex flex-col justify-center box-border bg-green-700 text-white gap-5 py-10 lg:h-[calc(100dvh-100px)]">
      <h1 className="text-5xl text-center text-white lg:text-[6rem] xl:text-[8rem] lg:h-[50%]">
        Services & <br /> Facilities
      </h1>
      <div className="flex flex-wrap justify-center p-5 w-full lg:grid lg:grid-rows-1 lg:grid-cols-7">
        <div className="flex flex-col items-center justify-between px-4 py-5 w-1/2 lg:w-full xl:scale-[1.25]">
          <figure className="flex items-start">
            <img src={`${spa}`} />
          </figure>
          <p className="text-center">Spa</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full xl:scale-[1.25]">
          <figure className="flex items-start">
            <img src={`${sauna}`} />
          </figure>
          <p className="text-center">Sauna</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full xl:scale-[1.25]">
          <figure>
            <img src={`${fitness}`} />
          </figure>
          <p className="text-center">Fitness</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full xl:scale-[1.25]">
          <figure>
            <img src={`${lounge}`} />
          </figure>
          <p className="text-center">Arrival Lounge</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full xl:scale-[1.25]">
          <figure>
            <img src={`${wifi}`} />
          </figure>
          <p className="text-center">Free Wifi</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 lg:w-full xl:scale-[1.25]">
          <figure>
            <img src={`${parking}`} />
          </figure>
          <p className="text-center">Parking</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 lg:w-full xl:scale-[1.25]">
          <figure>
            <img src={`${operation}`} />
          </figure>
          <p className="text-center">24 hours operation</p>
        </div>
      </div>
    </section>
  );
}

export default Service;