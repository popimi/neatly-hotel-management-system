import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import deluxe from "../../assets/images/HomePage/deluxe.jpeg";
import premierSeaView from "../../assets/images/HomePage/premierSeaView.jpeg";
import suite from "../../assets/images/HomePage/suite.jpeg";
import superior from "../../assets/images/HomePage/superior.jpeg";
import supreme from "../../assets/images/HomePage/supreme.jpeg";

function RoomAndSuits() {
  return (
    <section
      id="rooms&suits"
      className="pb-4 box-border sm:flex sm:flex-col sm:items-center"
    >
      <h1 className="text-center text-5xl px-5 py-16 sm:pt-16 sm:pb-0">
        Rooms & Suits
      </h1>
      <div
        className="grid grid-cols-1 gap-5
      sm:grid-cols-5 sm:grid-flow-row sm:m-10 lg:m-20 sm:border"
      >
        <figure className="relative sm:row-start-1 sm:col-start-1 sm:col-span-5 sm:max-h-[540px] sm:max-w-full">
            <img
              src={`${superiorGardenView}`}
              className="object-cover w-full h-[250px] sm:h-[300px] lg:h-[540px]"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-white z-10 absolute bottom-5 left-5">
            <h1 className="text-4xl text-white">Superior Garden View</h1>
            <p className="p-2 text-xl">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure className="relative sm:row-start-2 sm:col-span-3 sm:max-h-[300px] lg:max-h-[400px] sm:max-w-2/3">
          <img
            src={`${deluxe}`}
            className="object-cover w-full h-[250px] sm:h-[300px] lg:h-[400px]"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-white z-10 absolute bottom-5 left-5">
            <h1 className="text-4xl text-white">Deluxe</h1>
            <p className="p-2 text-xl">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure className="relative sm:row-start-2 sm:col-span-2 sm:max-h-[300px] lg:max-h-[400px] sm:max-w-1/3 ">
          <img
            src={`${superior}`}
            className="object-cover w-full h-[250px] sm:h-[300px] lg:h-[400px]"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-white z-10 absolute bottom-5 left-5">
            <h1 className="text-4xl text-white">Superior</h1>
            <p className="p-2 text-xl">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure className="relative sm:row-start-3 sm:row-span-2 sm:col-span-2 sm:max-w-1/3 sm:max-h-[620px] lg:max-h-[820px]">
          <img
            src={`${premierSeaView}`}
            className="object-cover w-full h-[250px] sm:h-[620px] lg:h-[820px]"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-white z-10 absolute bottom-5 left-5">
            <h1 className="text-4xl text-white">Premier Sea View</h1>
            <p className="p-2 text-xl">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure className="relative sm:row-start-3 sm:col-span-3 sm:max-h-[300px] lg:max-h-[400px]">
          <img
            src={`${supreme}`}
            className="object-cover w-full h-[250px] sm:h-[300px] lg:h-[400px]"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-white z-10 absolute bottom-5 left-5">
            <h1 className="text-4xl text-white">Supreme</h1>
            <p className="p-2 text-xl">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
        <figure className="relative sm:row-start-4 sm:col-span-3 sm:max-h-[300px] lg:max-h-[400px]">
          <img
            src={`${suite}`}
            className="object-cover w-full h-[250px] sm:h-[300px] lg:h-[400px]"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="text-white z-10 absolute bottom-5 left-5">
            <h1 className="text-4xl text-white">Suite</h1>
            <p className="p-2 text-xl">
              Explore room <a>→</a>
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default RoomAndSuits;
