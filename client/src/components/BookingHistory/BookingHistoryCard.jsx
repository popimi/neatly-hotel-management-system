import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import BookingHistoryDetailDropdown from "./BookingHistoryDeatailDropdown";
function BookingHistoryCard() {
  return (
    <div className="w-[375px] h-full border-b border-gray-300 pb-[24px] flex flex-col gap-[30px]">
      <div className="w-[375px]  gap-[16px] border-b">
        <img
          src={`${superiorGardenView}`}
          className="w-[375px] h-[221px]  rounded"
        />

        <div
          id="text-box"
          className="w-[375px]  px-[16px] pb-[24px] gap-[24px] mt-[10px]"
        >
          <div className=" w-[343px] h-[214px]  flex flex-col gap-[24px]">
            <div className="w-[343px] h-[70px] gap-[4px] ">
              <p className="w-[341px] h-[42px]  font-[inter] font-[600px] text-[28px] leading-[42px] text-black">
                Superior Garden View
              </p>

              <p className="w-[270px] h-[24px]  font-inter font-[400px] text-[16px] leading-[24px] text-gray-600 ">
                Booking date: Tue, 16 Oct 2022
              </p>
            </div>

            <div className="w-[343px] h-[120px] ">
              <p className=" h-[24px] font-inter font-[600px] text-[16px] leading-[24px]">
                Check-In
              </p>

              <p className="w-[300px] h-[24px] flex  gap-[10px]">
                <span>Th, 19 Oct 2022</span>
                <span>|</span>
                <span>After 2:00PM</span>
              </p>
              <br></br>
              <p className=" h-[24px] font-inter font-[600px] text-[16px] leading-[24px]">
                Check-Out
              </p>

              <p className="w-[300px] h-[24px] flex gap-[10px]">
                <span>Fri, 20 Oct 2022</span>
                <span>|</span>
                <span>Before 12:00PM</span>
              </p>
            </div>
          </div>
          <BookingHistoryDetailDropdown />
        </div>

        <div
          id="button-box"
          className="w-[375px] h-full px-[16px]  flex flex-col items-start   "
        >
          <div className="w-[343px] h-[48px] flex flex-row ">
            <button className="w-[171.5px]  py-[4px] px-[8px] gap-[8px] font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Room Detail
            </button>

            <button className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-[600] text-[16px] leading-[16px] text-white">
              Change Date
            </button>
          </div>

          <div className="flex justify-end w-[343px] h-[48px] ">
            <button className="w-[171.5px]   gap-[8px]  font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Cancle Booking
            </button>
          </div>
        </div>
      </div>

      <div className="w-[375px]  gap-[16px] border-b">
        <img
          src={`${superiorGardenView}`}
          className="w-[375px] h-[221px]  rounded"
        />

        <div
          id="text-box"
          className="w-[375px]  px-[16px] pb-[24px] gap-[24px] mt-[10px]"
        >
          <div className=" w-[343px] h-[214px]  flex flex-col gap-[24px]">
            <div className="w-[343px] h-[70px] gap-[4px] ">
              <p className="w-[341px] h-[42px]  font-[inter] font-[600px] text-[28px] leading-[42px] text-black">
                Superior Garden View
              </p>

              <p className="w-[270px] h-[24px]  font-inter font-[400px] text-[16px] leading-[24px] text-gray-600 ">
                Booking date: Tue, 16 Oct 2022
              </p>
            </div>

            <div className="w-[343px] h-[120px] ">
              <p className=" h-[24px] font-inter font-[600px] text-[16px] leading-[24px]">
                Check-In
              </p>

              <p className="w-[244px] h-[24px] flex justify-between ">
                <span>Th, 19 Oct 2022</span>
                <span>|</span>
                <span>After 2:00PM</span>
              </p>
              <br></br>
              <p className=" h-[24px] font-inter font-[600px] text-[16px] leading-[24px]">
                Check-Out
              </p>

              <p className="w-[244px] h-[24px] flex justify-between ">
                <span>Fri, 20 Oct 2022</span>
                <span>|</span>
                <span>Before 12:00PM</span>
              </p>
            </div>
          </div>
          <BookingHistoryDetailDropdown />
        </div>

        <div
          id="button-box"
          className="w-[375px] h-full px-[16px]  flex flex-col items-start   "
        >
          <div className="w-[343px] h-[48px] flex flex-row ">
            <button className="w-[171.5px]  py-[4px] px-[8px] gap-[8px] font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Room Detail
            </button>

            <button className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-[600] text-[16px] leading-[16px] text-white">
              Change Date
            </button>
          </div>

          <div className="flex justify-end w-[343px] h-[48px] ">
            <button className="w-[171.5px]   gap-[8px]  font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Cancle Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingHistoryCard;
