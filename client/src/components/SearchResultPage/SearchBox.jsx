function SearchBox() {
  return (
    <div className="w-full h-[364px] rounded-[4px] flex items-center lg:w-full lg:h-[156px]  lg:flex lg:justify-center lg:items-center">
      <br></br>

      <div className="  w-full h-[332px] gap-[16px] mx-[16px] flex flex-col  items-center lg:w-[1000px] lg:h-[76px] lg:gap-[40px] lg:flex lg:flex-row lg:justify-between lg:items-end">
        <label className="w-[343px] h-[76px] gap-[4px]  lg:w-[240px] lg:h-[76px] ">
          <div className="w-[343px] h-[24px] gap-[4px]  lg:w-[240px] lg:h-[24px]">
            <span className="font-inter font-[400] text-[16px] leading-[24px] text-gray-900">
              Check In
            </span>
          </div>

          <input
            type="text"
            placeholder="Th, 19 Oct 2022"
            className="w-[343px]  h-[48px] rounded-[4px] border-[1px] border-gray-400 py-[12px] pr-[16px] pl-[12px] lg:w-[240px] lg:h-[48px] lg:gap-[8px]"
          />
        </label>

        <label className="w-[343px] h-[76px] gap-[4px]  lg:w-[240px] lg:h-[76px] ">
          <div className="w-[343px] h-[24px] gap-[4px]  lg:w-[240px] lg:h-[24px]">
            <span className="font-inter font-[400] text-[16px] leading-[24px] text-gray-900">
              Check Out
            </span>
          </div>

          <input
            type="text"
            placeholder="Fri, 19 Oct 2022"
            className="w-[343px] h-[48px] rounded-[4px] border-[1px] border-gray-400 py-[12px] pr-[16px] pl-[12px] lg:w-[240px] lg:h-[48px] lg:gap-[8px]"
          />
        </label>

        <label className="w-[343px] h-[76px] gap-[4px]  lg:w-[240px] lg:h-[76px] ">
          <div className="w-[343px] h-[24px] gap-[4px]  lg:w-[240px] lg:h-[24px]">
            <span className="font-inter font-[400] text-[16px] leading-[24px] text-gray-900">
              Room & Guests
            </span>
          </div>

          <select className="w-[343px] h-[48px] rounded-[4px] border-[1px] border-gray-400 py-[12px] pr-[16px] pl-[12px] lg:w-[240px] lg:h-[48px] lg:gap-[8px]">
            <option>1 room, 2 guests</option>
            <option>1 room, 3 guests</option>
            <option>2 room, 4 guests</option>
            <option>2 room, 6 guests</option>
          </select>
        </label>

        <button
          className="w-[343px] h-[48px] rounded-[4px] border-[1px] py-[12px] pr-[16px] pl-[12px] border-orange-500 text-orange-500 font-sans font-[600] text-[16px] leading-[16px]
            lg:w-[144px] lg:h-[48px] lg:py-[16px] lg:px-[32px] "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
