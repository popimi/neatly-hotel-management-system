import spa from "../../assets/icons/HomePage/spa.svg";
import sauna from "../../assets/icons/HomePage/sauna.svg";
import fitness from "../../assets/icons/HomePage/fitness.svg";
import lounge from "../../assets/icons/HomePage/lounge.svg";
import wifi from "../../assets/icons/HomePage/wifi.svg";
import parking from "../../assets/icons/HomePage/parking.svg";
import operation from "../../assets/icons/HomePage/operation.svg";

function Service() {
  return (
    <section id='service' className="flex flex-col box-border bg-green-700 text-white gap-5 py-10 sm:py-20">
      <h1 className="text-5xl text-center text-white">
        Services & <br /> Facilities
      </h1>
      <div className="flex flex-wrap justify-center p-5 w-full sm:grid sm:grid-rows-1 sm:grid-cols-7">
        <div className="flex flex-col items-center justify-between px-4 py-5 w-1/2 sm:w-full">
          <figure className="flex items-start">
            <img src={`${spa}`} />
          </figure>
          <p className="text-center">Spa</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 sm:w-full">
          <figure className="flex items-start">
            <img src={`${sauna}`} />
          </figure>
          <p className="text-center">Sauna</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 sm:w-full">
          <figure>
            <img src={`${fitness}`} />
          </figure>
          <p className="text-center">Fitness</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 sm:w-full">
          <figure>
            <img src={`${lounge}`} />
          </figure>
          <p className="text-center">Arrival Lounge</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 sm:w-full">
          <figure>
            <img src={`${wifi}`} />
          </figure>
          <p className="text-center">Free Wifi</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 w-1/2 sm:w-full">
          <figure>
            <img src={`${parking}`} />
          </figure>
          <p className="text-center">Parking</p>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 px-4 py-5 sm:w-full">
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