import React from "react";

const RoomGuestsSelector = ({
  rooms,
  guests,
  increaseRooms,
  decreaseRooms,
  increaseGuests,
  decreaseGuests,
  dropdownOpen,
  toggleDropdown,
}) => (
  <div className="relative">
    <button
      type="button"
      onClick={toggleDropdown}
      className="border-[0.5px] border-black/20 rounded-lg p-2 w-full"
    >
      <div className="flex justify-between items-center">
        <span className="lg:text-[12px]">
          {rooms} Room{rooms > 1 ? "s" : ""}, {guests} Guest
          {guests > 1 ? "s" : ""}
        </span>
        <span>{dropdownOpen ? "▲" : "▼"}</span>
      </div>
    </button>
    {dropdownOpen && (
      <div className="absolute top-full left-0 mt-2 w-full border-[0.5px] border-black/20 rounded-lg bg-white z-10 p-4">
        <div className="room-selector mb-4 flex justify-between items-center gap-1">
          <span>Room</span>
          <div className="flex justify-between items-center gap-2">
            <button
              type="button"
              onClick={decreaseRooms}
              className="border-2 border-orange-600 rounded-full w-6 h-6 text-orange-600 font-bold text-[20px]"
            >
              -
            </button>
            <span>{rooms}</span>
            <button
              type="button"
              onClick={increaseRooms}
              className="border-2 border-orange-600 rounded-full w-6 h-6 text-orange-600 font-bold text-[20px]"
            >
              +
            </button>
          </div>
        </div>
        <div className="guests-selector flex justify-between items-center gap-1">
          <span>Guest</span>
          <div className="flex justify-between items-center gap-2">
            <button
              type="button"
              onClick={decreaseGuests}
              className="border-2 border-orange-600 rounded-full w-6 h-6 text-orange-600 font-bold text-[20px]"
            >
              -
            </button>
            <span>{guests}</span>
            <button
              type="button"
              onClick={increaseGuests}
              className="border-2 border-orange-600 rounded-full w-6 h-6 text-orange-600 font-bold text-[20px]"
            >
              +
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default RoomGuestsSelector;
