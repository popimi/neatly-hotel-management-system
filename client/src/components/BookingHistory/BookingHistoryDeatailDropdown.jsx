function BookingHistoryDetailDropdown() {
  return (
    <div className="mt-[24px]">
      <details className="w-[343px] h-[56px]  rounded   flex select-none  bg-gray-200 open:bg-gray-200 open:w-[343px] open:h-full  open:rounded ">
        <summary className="p-[16px] font-sans font-[600px] text-[16px] leading-[16px] text-gray-900">
          Booking Detail
        </summary>

        <div className="p-[16px] font-inter font-[400px] text-[16px] leading-[24px] text-gray-700">
          <span> 2 Guests (1 Night)</span>
          <br></br>
          <br></br>
          <span className="flex justify-between">
            Payment success via{" "}
            <span className="font-[600px] ">Credit Card- *888</span>
          </span>
          <br></br>
          <span className="flex justify-between">
            Superior Garden View Room{" "}
            <span className="font-[600px] text-gray-900">2,500.00</span>
          </span>
          <br></br>
          <span className="flex justify-between">
            Airport transfer{" "}
            <span className="font-[600px] text-gray-900">200.00</span>
          </span>
          <br></br>
          <span className="flex justify-between">
            Promotion Code{" "}
            <span className="font-[600px] text-gray-900">-400.00</span>
          </span>
          <br></br>

          <div className="w-[311px] h-[46px] border-t ">
            <br></br>
            <span className="flex justify-between ">
              Total{" "}
              <span className="font-[600px] text-[20px] leading-[30px] text-gray-900">
                THB 2,300.00
              </span>
            </span>
          </div>
        </div>

        <div className="w-[343px] h-[100px] p-[16px] gap-[8px]   bg-gray-300">
          <p>Additional Request</p>
          <p> Can i have some chocolate?</p>
        </div>
      </details>
    </div>
  );
}

export default BookingHistoryDetailDropdown;
