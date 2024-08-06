function BookingHistoryChangeDate() {
  return (
    <div className="w-[375px] h-[1000px]  flex justify-center z-50  fixed bottom-[300px] left-[3px]">
      <div className="w-[339px] h-[320px] rounded bg-white relative top-[700px]">
        <div className="w-[339px] h-[56px] border-b py-[8px] px-[16px] flex flex-row  justify-between items-center">
          <p className="font-inter font-[600px] text-[20px] leading-[30px] text-black">
            Change Date
          </p>
          <button className=" text-gray-600 font-semibold font-mono text-[20px] flex  ">
            x
          </button>
        </div>

        <div className="w-[339px] h-[264px] p-[16px] gap-[24px]">
          <p className="w-[307px] h-[96px] font-inter font-[400px] text-[16px] leading-[24px]">
            Are you sure want to change your check-in and check-out date?
          </p>
          <br></br>

          <div className="w-[307px] h-[112px] flex flex-col gap-[16px]">
            <button className="w-[307px] h-[48px] py-[16px] px-[32px] gap-[10px] text-white bg-orange-600 flex items-center justify-center">
              Yes, I want to change
            </button>
            <button className="w-[307px] h-[48px] rounded  border-[1px] font-sans font-[600px] text-[16px] leading-[16px] border-orange-500 text-orange-500 py-[16px] px-[32px] gap-[10px] flex items-center justify-center">
              No, I don't
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingHistoryChangeDate;
