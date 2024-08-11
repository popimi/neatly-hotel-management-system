import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import deluxe from "../../assets/images/HomePage/deluxe.jpeg";
import premierSeaView from "../../assets/images/HomePage/premierSeaView.jpeg";
import suite from "../../assets/images/HomePage/suite.jpeg";
import superior from "../../assets/images/HomePage/superior.jpeg";
import supreme from "../../assets/images/HomePage/supreme.jpeg";

function OtherRooms() {
  return (
    <div className="w-full h-fit bg-green-200 gap-[40px] flex-col py-[40px] lg:w-full lg:h-[752px] flex items-center">
      <div className="w-[375px] h-[477px] bg-green-200 gap-[40px] flex flex-col items-center  lg:w-full lg:h-[571px] lg:gap-[60px]">
        <h1 className="  font-[500px] text-[44px] leading-[55px] text-center text-[#2F3E35]">
          Other Rooms
        </h1>

        <div className="carousel carousel-center bg-[#E6EBE9]  max-w-[959px] max-h-[206px]  gap-[10px] relative lg:max-w-[1692px] lg:max-h-[571px] lg:gap-[24px]">
          <div id="slide1" className="carousel-item">
            <img
              src={superiorGardenView}
              className="w-[309px] h-[206px] lg:w-[548px] lg:h-[340px] lg:rounded"
            />
            <div className="absolute w-[200px] h-[72px] top-[70px] ml-[16px] gap-[8px] ">
              <p className=" text-white  font-noto font-medium text-[32px] ">
                Superior Garden View
              </p>
              <p className="text-white font-sans font-semibold text-[16px] ">
                Explore Room ➔
              </p>
            </div>
          </div>

          <div id="slide2" className="carousel-item">
            <img
              src={deluxe}
              className="w-[309px] h-[206px] lg:w-[548px] lg:h-[340px] lg:rounded"
            />
            <div className="absolute w-[200px] h-[72px] top-[70px] ml-[16px] gap-[8px]">
              <p className=" text-white  font-noto font-medium text-[32px] ">
                Deluxe
              </p>

              <p className="text-white font-sans font-semibold text-[16px] ">
                Explore Room ➔
              </p>
            </div>
          </div>

          <div id="slide3" className="carousel-item">
            <img
              src={premierSeaView}
              className="w-[309px] h-[206px] lg:w-[548px] lg:h-[340px] lg:rounded"
            />
            <div className="absolute w-[200px] h-[72px] top-[70px] ml-[16px] gap-[8px]">
              <p className=" text-white  font-noto font-medium text-[32px] ">
                Premier Seaview
              </p>

              <p className="text-white font-sans font-semibold text-[16px] ">
                Explore Room ➔
              </p>
            </div>
          </div>

          <div id="slide4" className="carousel-item">
            <img
              src={suite}
              className="w-[309px] h-[206px] lg:w-[548px] lg:h-[340px] lg:rounded"
            />
            <div className="absolute w-[200px] h-[72px] top-[70px] ml-[16px] gap-[8px]">
              <p className=" text-white  font-noto font-medium text-[32px] ">
                Suite
              </p>

              <p className="text-white font-sans font-semibold text-[16px] ">
                Explore Room ➔
              </p>
            </div>
          </div>

          <div id="slide5" className="carousel-item">
            <img
              src={superior}
              className="w-[309px] h-[206px] lg:w-[548px] lg:h-[340px] lg:rounded"
            />
            <div className="absolute w-[200px] h-[72px] top-[70px] ml-[16px] gap-[8px]">
              <p className=" text-white  font-noto font-medium text-[32px] ">
                Superior
              </p>

              <p className="text-white font-sans font-semibold text-[16px] ">
                Explore Room ➔
              </p>
            </div>
          </div>

          <div id="slide6" className="carousel-item">
            <img
              src={supreme}
              className="w-[309px] h-[206px] lg:w-[548px] lg:h-[340px] lg:rounded"
            />
            <div className="absolute w-[200px] h-[72px] top-[70px] ml-[16px] gap-[8px]">
              <p className=" text-white  font-noto font-medium text-[32px] ">
                Supreme
              </p>

              <p className="text-white font-sans font-semibold text-[16px] ">
                Explore Room ➔
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-[152px] h-[56px] gap-[40px] bg-re flex justify-between items-center">
          <a className="btn btn-circle bg-green-200 border-black">❮</a>
          <a className="btn btn-circle bg-green-200 border-black">❯</a>
        </div> */}
      </div>
    </div>
  );
}
export default OtherRooms;
