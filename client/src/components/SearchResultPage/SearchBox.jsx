function SearchBox() {
  return (
    <div className="w-[375px] h-[364px] rounded-[4px] ">
      <br></br>
      <div className="w-[343px] h-[332px] gap-[16px] mx-[16px]    flex flex-col ">
        <label className="w-[343px] h-[76px] gap-[4px]">
          <div className="w-[343px] h-[24px] gap-[4px]">
            <span className="font-inter font-[400] text-[16px] leading-[24px] text-gray-900">
              Check In
            </span>
          </div>

          <input
            type="text"
            placeholder="Th, 19 Oct 2022"
            className="w-[343px] h-[48px] rounded-[4px] border-[1px] py-[12px] pr-[16px] pl-[12px]"
          />
        </label>

        <label className="w-[343px] h-[76px] gap-[4px]">
          <div className="w-[343px] h-[24px] gap-[4px]">
            <span className="font-inter font-[400] text-[16px] leading-[24px] text-gray-900">
              Check Out
            </span>
          </div>

          <input
            type="text"
            placeholder="Fri, 19 Oct 2022"
            className="w-[343px] h-[48px] rounded-[4px] border-[1px] py-[12px] pr-[16px] pl-[12px]"
          />
        </label>

        <label className="w-[343px] h-[76px] gap-[4px]">
          <div className="w-[343px] h-[24px] gap-[4px]">
            <span className="font-inter font-[400] text-[16px] leading-[24px] text-gray-900">
              Room & Guests
            </span>
          </div>

          <select className="w-[343px] h-[48px] rounded-[4px] border-[1px] py-[12px] pr-[16px] pl-[12px]">
            <option>1 room, 2 guests</option>
            <option>1 room, 3 guests</option>
            <option>2 room, 4 guests</option>
            <option>2 room, 6 guests</option>
          </select>
        </label>

        <button className="w-[343px] h-[48px] rounded-[4px] border-[1px] py-[12px] pr-[16px] pl-[12px] border-orange-500 text-orange-500 font-sans font-[600] text-[16px] leading-[16px]">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
