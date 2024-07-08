function OtherRooms() {
  return (
    <div className="w-[375px] h-[477px]  bg-green-200 gap-[40px] flex-col py-[40px]">
      <h1 className=" font-[noto] font-[500] text-[44px] leading-[55px] text-center text-green-800">
        Other Rooms
      </h1>
      <br></br>
      <br></br>
      <div className="w-[959px] h-[206px] flex flex-row bg-red-200 gap-[16px] ">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-[309px] h-[206px]"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-[309px] h-[206px]"
        />
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-[309px] h-[206px]"
        />
      </div>

      <div className="w-[152px] h-[56px] gap-[40px] flex flex-row"></div>
    </div>
  );
}
export default OtherRooms;
