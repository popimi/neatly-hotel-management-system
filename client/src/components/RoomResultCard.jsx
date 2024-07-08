function RoomResultCard() {
  return (
    <div className="w-[375px] h-[2768px] py-[40px] gap-[40px] bg-gray-600">
      <div className="w-[375px] h-[649px] border-b gap-[16px] bg-gray-300">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-[375px] h-[265px] rounded"
        />
        <div className="w-[375px] h-[368px] px-[16px] pb-[24px] mt-[10px] bg-green-600">



          <p className="font-inter font-[600] text-[28px] leading-[42px]">
            Superior Garden View
          </p>


          <div className="flex flex-row gap-[16px]">
            <span>2 Persons</span> <span>|</span>
            <span>1 Double bed</span> <span>|</span>
            <span>32 sqm</span>
          </div>


          
        </div>
      </div>
    </div>
  );
}

export default RoomResultCard;
