function BookingHistoryCancelOnly() {
  return (
    <div className="w-[375px] h-[1000px] bg-blue-200 flex justify-center">
      <div className="w-[339px] h-[320px] rounded bg-white relative top-[246px]">
        <div className="w-[339px] h-[56px] border-b py-[8px] px-[16px]">
          <p className="font-inter font-[600px] text-[20px] leading-[30px] text-black">
            Cancel Booking
          </p>
        </div>

        <div className="w-[339px] h-[264px] p-[16px] gap-[24px]">
          <p className="w-[307px] h-[96px] font-inter font-[400px] text-[16px] leading-[24px]">
            Cancellation of the booking now will not be able to request a
            refund.<br></br>
            Are you sure you would like to cancel this booking?
          </p>
          <br></br>

          <div className="w-[307px] h-[112px] flex flex-col gap-[16px]">
            <button className="w-[307px] h-[48px] py-[16px] px-[32px] gap-[10px] text-white bg-orange-600 flex items-center justify-center">
              No, Don't Cancel
            </button>
            <button className="w-[307px] h-[48px] rounded  border-[1px] font-sans font-[600px] text-[16px] leading-[16px] border-orange-500 text-orange-500 py-[16px] px-[32px] gap-[10px] flex items-center justify-center">
              Yes, I want to cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingHistoryCancelOnly;
