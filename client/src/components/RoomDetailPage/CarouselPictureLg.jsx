import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import deluxe from "../../assets/images/HomePage/deluxe.jpeg";
import premierSeaView from "../../assets/images/HomePage/premierSeaView.jpeg";
import suite from "../../assets/images/HomePage/suite.jpeg";
import superior from "../../assets/images/HomePage/superior.jpeg";
import supreme from "../../assets/images/HomePage/supreme.jpeg";

function CarouselPictureLg() {
  return (
    <div className="hidden lg:flex lg:w-full lg:h-[581px] lg:mt-[40px] lg:bg-green-200 ">
      <div className="lg:flex lg:flex-col lg:items-center   lg:w-full lg:h-[581px] lg:gap-[60px]">
        <div className="lg:carousel lg:carousel-center lg:bg-[#E6EBE9] lg:relative lg:max-w-[1692px] lg:max-h-[571px] lg:gap-[24px]">
          <div id="slide1" className="carousel-item">
            <img
              src={superiorGardenView}
              className=" lg:w-[800px] lg:h-[581px] lg:rounded"
            />
          </div>

          <div id="slide2" className="carousel-item">
            <img
              src={deluxe}
              className=" lg:w-[800px] lg:h-[581px] lg:rounded"
            />
          </div>

          <div id="slide3" className="carousel-item">
            <img
              src={premierSeaView}
              className="lg:w-[800px] lg:h-[581px] lg:rounded"
            />
          </div>

          <div id="slide4" className="carousel-item">
            <img src={suite} className="lg:w-[800px] lg:h-[581px] lg:rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarouselPictureLg;
