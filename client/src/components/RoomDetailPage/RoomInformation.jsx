import BookNowButton from "./ButtonNowBook";

function RoomInformation() {
  return (
    <section className=" w-full h-[862px] flex flex-col top-[297px] gap-[24px] lg:hidden ">
      <div className=" w-full h-[344px] gap-[40px] m-[16px] ">
        <br></br>

        <p className="font-[500] text-[44px] font-[noto] leading-[55px] text-green-800 ">
          Superior Garden View
        </p>

        <br></br>
        <br></br>
        <div className=" w-full h-[96px] content-between">
          <p className="font-[400] text-[16px] font-[inter] leading-[24px] text-gray-700 ">
            Rooms (36sqm) with full garden views, 1 single bed, bathroom with
            bathub & shower.
          </p>

          <br></br>

          <div className="flex flex-row gap-[16px] font-[inter] font-[400] text-[16px] leading-[24px] text-gray-700">
            <span>2 Persons</span> <span>|</span>
            <span>1 Double bed</span> <span>|</span>
            <span>32 sqm</span>
          </div>
          <br></br>
          <br></br>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-[4px] font-[inter] ">
              <p className="font-[400] text-[16px] leading-[24px] text-gray-700 line-through">
                THB 3,100.00
              </p>
              <p className="font-[600] text-[20px] leading-[30px] text-gray-900">
                THB 2,500.00
              </p>
            </div>
            <div className="flex items-end justify-end">
              <BookNowButton />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-[414px] border-t-[1px] pt-[24px] gap-[24px] m-[18px]">
        <p className="font-[inter] font-[600] text-[20px] leading-[30px] text-[#000000] ">
          Room Amenities
        </p>
        <br></br>
        <ul className="font-[inter] font-[400] text-[16px] leading-[24px] list-disc list-inside text-gray-700 ">
          <li>Safe in Room</li>
          <li>Air Conditioning</li>
          <li>High speed internet connection</li>
          <li>Hairdryer </li>
          <li>Shower</li>
          <li>Bathroom amenities</li>
          <li>Lamp</li>
          <li>Minibar</li>
          <li>Telephone</li>
          <li>Ironing board</li>
          <li>A floor only accessible via a guest room key</li>
          <li>Alarm clock</li>
          <li>Bathrobe</li>
        </ul>
      </div>
    </section>
  );
}

export default RoomInformation;
