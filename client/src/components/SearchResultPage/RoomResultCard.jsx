import BookNowButton from "./BookNowButton";
import superiorGardenView from '../../assets/images/HomePage/superiorGardenView.jpeg';
import deluxe from '../../assets/images/HomePage/deluxe.jpeg';
import { searchResultDataContext } from "../HomePage/SearchForRoom";


function RoomResultCard() {
  return (
    <div className="w-full py-[40px] gap-[40px] bg-gray-50 flex flex-col  lg:items-center ">
      
      <div
        className="w-full h-[649px] border-b border-gray-300  max-[1023px]:flex max-[1023px]:flex-col max-[1023px]:items-center 
        lg:w-[1120px] lg:h-[400px] lg:py-[40px] lg:gap-[25px] lg:flex "
      >
        <img
          src={`${superiorGardenView}`}
          className="w-[375px] h-[265px]  rounded  lg:w-[453px] lg:h-[320px] "
        />

        <div className="w-[375px] h-[368px] px-[16px] pb-[24px] mt-[5px]  lg:w-[619px] lg:h-[320px] lg:py-[24px] lg:flex lg:flex-col ">
          <div className="lg:flex lg:flex-row ">
            <div>
              <p className="font-inter font-[600] text-[28px] leading-[42px] text-black lg:w-[314px] lg:h-[42px] ">
                Superior Garden View
              </p>

              <div className="flex flex-row gap-[16px] font-[inter] font-[400] text-[16px] leading-[24px] text-gray-700  lg:h-[24px]">
                <span>2 Persons</span> <span>|</span>
                <span>1 Double bed</span> <span>|</span>
                <span>32 sqm</span>
              </div>
              <br></br>
              <p className="font-[400] text-[16px] font-[inter] leading-[24px] text-gray-700 lg:w-[314px] lg:h-[72px]">
                Rooms (36sqm) with full garden views, 1 single bed, bathroom
                with bathub & shower.
              </p>
            </div>

            <br></br>

            <div className="flex flex-col font-[inter]  gap-[4px] pt-[8px] text-end  lg:w-[260px] lg:gap-[8px] ">
              <p className="font-[400] text-[16px] leading-[24px] text-gray-700 line-through ">
                THB 3,100.00
              </p>
              <p className="font-[600] text-[20px] leading-[30px] text-gray-900 ">
                THB 2,500.00
              </p>

              <p className="font-inter font-[400] text-[16px] leading-[24px] text-gray-700">
                Per Night
              </p>
              <p className="font-inter font-[400] text-[16px] leading-[24px] text-gray-700">
                (Including Tags & Fees)
              </p>
            </div>
          </div>

          <br></br>
          <div className="w-[343px] h-[48px] flex flex-row  gap-[24px]  lg:w-[575px] lg:h-[48px] lg:flex lg:justify-end ">
            <button className="w-[159.5px]  py-[4px] px-[8px] font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Room Detail
            </button>
            <BookNowButton className="py-[16px] px-[32px]" />
          </div>
        </div>
      </div>

      <div
        className="w-full h-[649px] border-b border-gray-300  max-[1023px]:flex max-[1023px]:flex-col max-[1023px]:items-center 
        lg:w-[1120px] lg:h-[400px] lg:py-[40px] lg:gap-[25px] lg:flex "
      >
        <img
          src={`${deluxe}`}
          className="w-[375px] h-[265px]  rounded  lg:w-[453px] lg:h-[320px] "
        />

        <div className="w-[375px] h-[368px] px-[16px] pb-[24px] mt-[5px]  lg:w-[619px] lg:h-[320px] lg:py-[24px] lg:flex lg:flex-col">
          <div className="lg:flex lg:flex-row ">
            <div>
              <p className="font-inter font-[600] text-[28px] leading-[42px] text-black lg:w-[314px] lg:h-[42px]">
                Deluxe
              </p>

              <div className="flex flex-row gap-[16px] font-[inter] font-[400] text-[16px] leading-[24px] text-gray-700  lg:h-[24px]">
                <span>2 Persons</span> <span>|</span>
                <span>1 Double bed</span> <span>|</span>
                <span>32 sqm</span>
              </div>
              <br></br>
              <p className="font-[400] text-[16px] font-[inter] leading-[24px] text-gray-700 lg:w-[314px] lg:h-[72px]">
                Rooms (36sqm) with full garden views, 1 single bed, bathroom
                with bathub & shower.
              </p>
            </div>

            <br></br>

            <div className="flex flex-col font-[inter]  gap-[4px] pt-[8px] text-end  lg:w-[260px] lg:gap-[8px]">
              <p className="font-[400] text-[16px] leading-[24px] text-gray-700 line-through">
                THB 3,100.00
              </p>
              <p className="font-[600] text-[20px] leading-[30px] text-gray-900">
                THB 2,500.00
              </p>

              <p className="font-inter font-[400] text-[16px] leading-[24px] text-gray-700">
                Per Night
              </p>
              <p className="font-inter font-[400] text-[16px] leading-[24px] text-gray-700">
                (Including Tags & Fees)
              </p>
            </div>
          </div>

          <br></br>
          <div className="w-[343px] h-[48px] flex flex-row  gap-[24px]  lg:w-[575px] lg:h-[48px]  lg:flex lg:justify-end">
            <button className="w-[159.5px]  py-[4px] px-[8px] font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Room Detail
            </button>
            <BookNowButton className="py-[16px] px-[32px]" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default RoomResultCard;
