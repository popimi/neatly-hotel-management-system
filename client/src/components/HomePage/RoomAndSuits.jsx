import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import deluxe from "../../assets/images/HomePage/deluxe.jpeg";
import premierSeaView from "../../assets/images/HomePage/premierSeaView.jpeg";
import suite from "../../assets/images/HomePage/suite.jpeg";
import superior from "../../assets/images/HomePage/superior.jpeg";
import supreme from "../../assets/images/HomePage/supreme.jpeg";
import { useAuth } from "../../contexts/authentication";
import { useEffect } from "react";

function RoomAndSuits() {
  const { navigate } = useAuth();

  return (
    <section
      id="rooms&suits"
      className="py-4 my-10 lg:mb-[100px] box-border lg:flex lg:flex-col lg:items-center h-fit scroll-mt-[100px]"
    >
      <h1 className="text-center text-5xl lg:text-6xl px-5 py-8 lg:py-16">
        Rooms & Suits
      </h1>
      <div
        className="flex flex-col gap-5 max-w-[700px] mx-auto
      lg:grid lg:grid-cols-5 lg:grid-flow-row lg:max-w-[77dvw]"
      >
        <figure
          onClick={() => {
            navigate(`/roomdetail/151`);
            window.scrollTo({ top: 0 });
          }}
          className="relative lg:max-w-full lg:row-start-1 lg:col-start-1 lg:col-span-5 object-cover cursor-pointer"
        >
          <img
            src={`${superiorGardenView}`}
            className="w-full h-[50dvh] lg:h-[70dvh]"
          />
          <div className="absolute inset-0 bg-black/50 hover:bg-black/30 duration-100"></div>
          <div className="text-white z-10 absolute bottom-14 left-8 lg:bottom-5 lg:left-5 xl:bottom-10 ">
            <h1 className="text-4xl lg:text-[50px] xl:text-[72px] text-white lg:py-6">
              Superior Garden View
            </h1>
            <p className="p-2 text-xl lg:text-2xl xl:text-[36px] lg:p-5">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure
          onClick={() => {
            navigate(`/roomdetail/149`);
            window.scrollTo({ top: 0 });
          }}
          className="relative lg:row-start-2 lg:col-span-3 object-cover cursor-pointer"
        >
          <img
            src={`${deluxe}`}
            className="object-cover w-full h-[50dvh]  lg:h-[55dvh]"
          />
          <div className="absolute inset-0 bg-black/50 hover:bg-black/30 duration-100"></div>
          <div className="text-white z-10 absolute bottom-14 left-8 lg:bottom-5 lg:left-5 xl:bottom-10">
            <h1 className="text-4xl lg:text-[50px] xl:text-[72px] text-white lg:py-6">
              Deluxe
            </h1>
            <p className="p-2 text-xl lg:text-2xl xl:text-[36px] lg:p-5">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure
          onClick={() => {
            navigate(`/roomdetail/153`);
            window.scrollTo({ top: 0 });
          }}
          className="relative lg:row-start-2 lg:col-span-2 object-cover cursor-pointer"
        >
          <img
            src={`${superior}`}
            className="object-cover w-full h-[50dvh]  lg:h-[55dvh]"
          />
          <div className="absolute inset-0 bg-black/50 hover:bg-black/30 duration-100"></div>
          <div className="text-white z-10 absolute bottom-14 left-8 lg:bottom-5 lg:left-5 xl:bottom-10">
            <h1 className="text-4xl lg:text-[50px] xl:text-[72px] text-white lg:py-6">
              Superior
            </h1>
            <p className="p-2 text-xl lg:text-2xl xl:text-[36px] lg:p-5">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure
          onClick={() => {
            navigate(`/roomdetail/116`);
            window.scrollTo({ top: 0 });
          }}
          className="relative lg:row-start-3 lg:row-span-2 lg:col-span-2 object-cover cursor-pointer"
        >
          <img
            src={`${premierSeaView}`}
            className="object-cover w-full h-[50dvh] lg:h-full"
          />
          <div className="absolute inset-0 bg-black/50 hover:bg-black/30 duration-100"></div>
          <div className="text-white z-10 absolute bottom-14 left-8 lg:bottom-5 lg:left-5 xl:bottom-10">
            <h1 className="text-4xl lg:text-[40px]/[50px] xl:text-[72px]/[60px] text-white lg:py-6">
              Premier Sea View
            </h1>
            <p className="p-2 text-xl lg:text-2xl xl:text-[36px] lg:p-5">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure className="relative lg:row-start-3 lg:col-span-3  object-cover">
          <img src={`${supreme}`} className="object-cover w-full h-[50dvh]" />
          <div className="absolute inset-0 bg-black/50 hover:bg-black/30 duration-100"></div>
          <div className="text-white z-10 absolute bottom-14 left-8 lg:bottom-5 lg:left-5 xl:bottom-10">
            <h1 className="text-4xl lg:text-[50px] xl:text-[72px] text-white lg:py-6">
              Supreme
            </h1>
            <p className="p-2 text-xl lg:text-2xl xl:text-[36px] lg:p-5">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure className="relative lg:row-start-4 lg:col-span-3  object-cover">
          <img src={`${suite}`} className="object-cover w-full h-[50dvh]" />
          <div className="absolute inset-0 bg-black/50 hover:bg-black/30 duration-100"></div>
          <div className="text-white z-10 absolute bottom-14 left-8 lg:bottom-5 lg:left-5 xl:bottom-10">
            <h1 className="text-4xl lg:text-[50px] xl:text-[72px] text-white lg:py-6">
              Suite
            </h1>
            <p className="p-2 text-xl lg:text-2xl xl:text-[36px] lg:p-5">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default RoomAndSuits;
