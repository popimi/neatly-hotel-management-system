import arrow from "../assests/icons/arrow-left.png";

function CutomerDetail() {
  return (
    <content className="flex flex-1 flex-col bg-gray-100 ">
      <nav className="flex items-center bg-white w-[1200px] h-[80px] py-[16px] px-[60px] gap-[16px]">
        <img src={arrow} alt="arrow-left " className="w-[20px] h-[20px] mt-1" />
        <h5>
          Kate Cho <span className="body-1 ">Premier Sea View</span>
        </h5>
      </nav>
      {/* <nav className="w-full">
        <div className=" flex bg-base-100 ">
          <div className="flex-1 ">
            <p className=" text-xl font-semibold  ">
              Kate Cho <span className="body-1">Premier Sea View</span>
            </p>
          </div>
        </div>
      </nav> */}
      <div className="bg-gray-100  p-10">
        <body className="">
          <main className="bg-white w-[1080px] h-[1388px] gap-[40px] pt-[40px] pr-[80px] pb-[60px] pl-[80px]">
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Customer Name</h5>
              <p className="body-1 font-inter"> Kate Cho</p>
            </div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Guest(s)</h5>
              <p className="body-1 font-inter">2</p>
            </div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Room type</h5>
              <p className="body-1 font-inter">Superior Garden View Room</p>
            </div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Amount</h5>
              <p className="body-1 font-inter">1 room</p>
            </div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Bed type</h5>
              <p className="body-1 font-inter">Single Bed</p>
            </div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Check-in</h5>
              <p className="body-1 font-inter">Th, 19 Oct 2022</p>
            </div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Check-out</h5>
              <p className="body-1 font-inter">Fri,20 Oct 2022</p>
            </div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Stay(total)</h5>
              <p className="body-1 font-inter">1 night</p>
            </div>
            <div className="w-[880px] h-[58px] gap-[4px] mb-5">
              <h5 className="text-gray-600">Booking date</h5>
              <p className="body-1 font-inter">Tue,16 Oct 2022</p>
            </div>
            <div className="bg-gray-100 w-[920px] h-[278px] mb-10 pt-[16px] pr-[24px] pb-[16px] pl-[24px]">
              <div className="flex justify-end w-[872px] h-[40px] pb-[16px] gap-[16px]">
                <div>
                  <p className="body-1 text-gray-600">
                    Payment success via{" "}
                    <span className="font-inter font-[600] text-gray-600">
                      {" "}
                      Credit Card - *888
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-[12px] pb-[12px] gap-[16px]">
                <p className="body-1 font-inter text-gray-900">
                  Superior Garden View Room
                </p>
                <p className="body-1 font-inter text-gray-900 font-semibold">
                  2,500.00
                </p>
              </div>
              <div className="flex justify-between  pt-[12px] pb-[12px] gap-[16px]">
                <p className="body-1 font-inter text-gray-900">
                  Airport tranfer
                </p>
                <p className="body-1 font-inter text-gray-900 font-semibold">
                  200.00
                </p>
              </div>
              <div className="flex justify-between  pt-[12px] pb-[12px] gap-[16px]">
                <p className="body-1 font-inter text-gray-900">
                  Promotion Code
                </p>
                <p className="body-1 font-inter text-gray-900 font-semibold">
                  -400.00
                </p>
              </div>
              <hr />
              <div className="flex justify-between  pt-[24px]">
                <div>
                  <p className="body-1 font-inter">Total</p>
                </div>
                <div>
                  <p className="body-1 font-inter font-bold">THB 2,300.00</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-300 w-[920px] h-[88px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[8px]">
              <h5 className="text-gray-700 ">Additional Request</h5>
              <p className="body-1">Can I have some chocolate ?</p>
            </div>
          </main>
        </body>
      </div>
    </content>
  );
}
export default CutomerDetail;
