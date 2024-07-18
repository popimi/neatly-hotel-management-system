import superiorGardenView from "../../assets/images/HomePage/superiorGardenView.jpeg";
import BookingHistoryDetailDropdown from "./BookingHistoryDeatailDropdown";
function BookingHistoryCard() {
  return (
    <div className="w-[375px] h-full border-b border-gray-300 pb-[24px] flex flex-col gap-[30px]  xl:w-full xl:flex xl:items-center">
      <div className="w-[375px]  gap-[16px] border-b  xl:mt-[50px] xl:w-[1120px] xl:h-full xl:border-b xl:py-[40px] xl:flex xl:flex-row">
        <img
          src={`${superiorGardenView}`}
          className="w-[375px] h-[221px]  rounded xl:w-[357px] xl:h-[201px] "
        />

        <div
          id="text-box"
          className="w-[375px]  px-[16px] pb-[24px] gap-[24px] mt-[10px]   xl:w-[715px] xl:pb-[24px] xl:gap-[32px] xl:p-0"
        >
          <div className=" w-[343px] h-[214px]  flex flex-col gap-[24px]  xl:w-[715px] xl:h-[118px] ">
            <div className="w-[343px] h-[70px] gap-[4px]      xl:w-[715px] xl:h-[42px] xl:flex xl:flex-row  xl:justify-between xl:items-center ">
              <p className="w-[341px] h-[42px]  font-[inter] font-semibold text-[28px] leading-[42px] text-black">
                Superior Garden View
              </p>

              <p className="w-[270px] h-[24px]  font-inter font-normal text-[16px] leading-[24px] text-gray-600 ">
                Booking date: Tue, 16 Oct 2022
              </p>
            </div>

            <div className="w-[343px] h-[120px]  xl:w-[715px] xl:h-[52px] xl:gap-[24px] xl:flex xl:flex-row">
              <div className="xl:flex xl:flex-col">
                <p className=" h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800">
                  Check-In
                </p>

                <p className="w-[300px] h-[24px] flex  gap-[10px] font-normal text-[16px] leading-[24px] text-gray-800">
                  <span>Th, 19 Oct 2022</span>
                  <span>|</span>
                  <span>After 2:00PM</span>
                </p>
              </div>

              <br></br>
              <div className="xl:flex xl:flex-col">
                <p className=" h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800">
                  Check-Out
                </p>

                <p className="w-[300px] h-[24px] flex gap-[10px] font-normal text-[16px] leading-[24px] text-gray-800">
                  <span>Fri, 20 Oct 2022</span>
                  <span>|</span>
                  <span>Before 12:00PM</span>
                </p>
              </div>
            </div>
          </div>
          <BookingHistoryDetailDropdown />

          <div
            id="button-box"
            className="hidden xl:w-[1120px] xl:h-[48px] xl:flex xl:flex-row-reverse  xl:relative xl:right-[372px] xl:mt-[20px]"
          >
            <div className="w-[343px] h-[48px] flex flex-row xl:flex ">
              <button className="w-[171.5px]  py-[4px] px-[8px] gap-[8px] font-sans font-semibold text-[16px] leading-[16px] text-orange-500">
                Room Detail
              </button>

              <button className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-semibold text-[16px] leading-[16px] text-white">
                Change Date
              </button>
            </div>

            <div className="flex justify-end w-[343px] h-[48px] xl:flex xl:relative xl:right-[620px]">
              <button className="w-[171.5px]   gap-[8px]  font-sans font-semibold text-[16px] leading-[16px] text-orange-500">
                Cancel Booking
              </button>
            </div>
          </div>
        </div>

        <div
          id="button-box"
          className="w-[375px] h-full px-[16px]  flex flex-col items-start  xl:hidden"
        >
          <div className="w-[343px] h-[48px] flex flex-row">
            <button className="w-[171.5px]  py-[4px] px-[8px] gap-[8px] font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Room Detail
            </button>

            <button className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-[600] text-[16px] leading-[16px] text-white">
              Change Date
            </button>
          </div>

          <div className="flex justify-end w-[343px] h-[48px] ">
            <button className="w-[171.5px]   gap-[8px]  font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Cancel Booking
            </button>
          </div>
        </div>
      </div>

      <div className="w-[375px]  gap-[16px] border-b  xl:mt-[50px] xl:w-[1120px] xl:h-full xl:border-b xl:py-[40px] xl:flex xl:flex-row">
        <img
          src={`${superiorGardenView}`}
          className="w-[375px] h-[221px]  rounded xl:w-[357px] xl:h-[201px] "
        />

        <div
          id="text-box"
          className="w-[375px]  px-[16px] pb-[24px] gap-[24px] mt-[10px]   xl:w-[715px] xl:pb-[24px] xl:gap-[32px] xl:p-0"
        >
          <div className=" w-[343px] h-[214px]  flex flex-col gap-[24px]  xl:w-[715px] xl:h-[118px] ">
            <div className="w-[343px] h-[70px] gap-[4px]      xl:w-[715px] xl:h-[42px] xl:flex xl:flex-row  xl:justify-between xl:items-center ">
              <p className="w-[341px] h-[42px]  font-[inter] font-semibold text-[28px] leading-[42px] text-black">
                Superior Garden View
              </p>

              <p className="w-[270px] h-[24px]  font-inter font-normal text-[16px] leading-[24px] text-gray-600 ">
                Booking date: Tue, 16 Oct 2022
              </p>
            </div>

            <div className="w-[343px] h-[120px]  xl:w-[715px] xl:h-[52px] xl:gap-[24px] xl:flex xl:flex-row">
              <div className="xl:flex xl:flex-col">
                <p className=" h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800">
                  Check-In
                </p>

                <p className="w-[300px] h-[24px] flex  gap-[10px] font-normal text-[16px] leading-[24px] text-gray-800">
                  <span>Th, 19 Oct 2022</span>
                  <span>|</span>
                  <span>After 2:00PM</span>
                </p>
              </div>

              <br></br>
              <div className="xl:flex xl:flex-col">
                <p className=" h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800">
                  Check-Out
                </p>

                <p className="w-[300px] h-[24px] flex gap-[10px] font-normal text-[16px] leading-[24px] text-gray-800">
                  <span>Fri, 20 Oct 2022</span>
                  <span>|</span>
                  <span>Before 12:00PM</span>
                </p>
              </div>
            </div>
          </div>
          <BookingHistoryDetailDropdown />

          <div
            id="button-box"
            className="hidden xl:w-[1120px] xl:h-[48px] xl:flex xl:flex-row-reverse  xl:relative xl:right-[372px] xl:mt-[20px]"
          >
            <div className="w-[343px] h-[48px] flex flex-row xl:flex ">
              <button className="w-[171.5px]  py-[4px] px-[8px] gap-[8px] font-sans font-semibold text-[16px] leading-[16px] text-orange-500">
                Room Detail
              </button>

              <button className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-semibold text-[16px] leading-[16px] text-white">
                Change Date
              </button>
            </div>

            <div className="flex justify-end w-[343px] h-[48px] xl:flex xl:relative xl:right-[620px]">
              <button className="w-[171.5px]   gap-[8px]  font-sans font-semibold text-[16px] leading-[16px] text-orange-500">
                Cancel Booking
              </button>
            </div>
          </div>
        </div>

        <div
          id="button-box"
          className="w-[375px] h-full px-[16px]  flex flex-col items-start  xl:hidden"
        >
          <div className="w-[343px] h-[48px] flex flex-row">
            <button className="w-[171.5px]  py-[4px] px-[8px] gap-[8px] font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Room Detail
            </button>

            <button className="w-[171.5px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 font-sans font-[600] text-[16px] leading-[16px] text-white">
              Change Date
            </button>
          </div>

          <div className="flex justify-end w-[343px] h-[48px] ">
            <button className="w-[171.5px]   gap-[8px]  font-sans font-[600] text-[16px] leading-[16px] text-orange-500">
              Cancel Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingHistoryCard;
