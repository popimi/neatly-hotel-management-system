import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import deluxe from "../../assets/images/HomePage/deluxe.jpeg";
import premierSeaView from "../../assets/images/HomePage/premierSeaView.jpeg";
import suite from "../../assets/images/HomePage/suite.jpeg";

function CarouselPicture() {
  return (
    <div className="carousel w-full h-fit flex flex-row justify-center lg:hidden ">
      <div className="carousel carousel-center bg-[#E6EBE9]  max-w-[375px] max-h-[249px]  gap-[10px] relative">
        <div id="slide1" className="carousel-item">
          <img
            src={superiorGardenView}
            className="w-[375px] h-[249px] rounded"
          />
        </div>

        <div id="slide2" className="carousel-item">
          <img src={deluxe} className="w-[375px] h-[249px] rounded" />
        </div>

        <div id="slide3" className="carousel-item">
          <img src={premierSeaView} className="w-[375px] h-[249px] rounded" />
        </div>

        <div id="slide4" className="carousel-item">
          <img src={suite} className="w-[375px] h-[249px] rounded" />
        </div>
      </div>
    </div>
  );
}
export default CarouselPicture;
