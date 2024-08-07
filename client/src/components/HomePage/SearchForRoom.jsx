import homepageImage from "../../assets/images/HomePage/homepageImage.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomGuestsSelector from "./RoomGuestsSelector";

function SearchForRoom() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [price, setPrice] = useState("");
  const searchResult = [];
  const [rooms, setRooms] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const increaseRooms = () => setRooms(rooms + 1);
  const decreaseRooms = () => setRooms(rooms > 1 ? rooms - 1 : 1);
  const increaseGuests = () => setGuests(guests < 6 ? guests + 1 : guests);
  const decreaseGuests = () => setGuests(guests > 2 ? guests - 1 : 2);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectGuests = (e) => {
    const guestNumber = e.target.value;
    setGuests(guestNumber);
  };
  const selectPrice = (e) => {
    const priceRate = e.target.value;
    setPrice(priceRate);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let result;
    try {
      result = await axios.get(
        `http://localhost:4000/search?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&price=${price}`
      );
      console.log(result);
      let updateResult = result.data.data;
      console.log(updateResult);
      searchResult.push(updateResult);
      console.log(searchResult);  
      const searchDetail = [{ checkIn }, { checkOut }, { guests }, { price }];
      searchResult.push(searchDetail);
      console.log(searchResult);
      navigate("/searchroom", { state: searchResult });
    } catch {
      console.error("Not Found");
    }
  };

  useEffect(()=>{
    localStorage.removeItem('bookingStep')
  },[])

  return (
    <section id="search" className="box-border">
      <div
        style={{
          backgroundImage: `url(${homepageImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="bg-black/30 
          flex flex-col box-border justify-evenly items-center h-[calc(100dvh-48px)] lg:h-[calc(100dvh-100px)] px-6
          lg:p-10"
        >
          <div className="flex items-center justify-center w-full">
            <h1
              className=" text-white text-pretty font-bold text-center 
              text-[calc(2rem+1dvw)]/[calc(40px+1dvh)] sm:text-[calc(3rem+1dvw)]/[calc(70px+1dvh)] lg:text-[calc(4rem+1dvw)]/[calc(100px+1dvh)] 
              p-4 w-[80dvw] sm:w-[70dvw]"
            >
              A Best Place For Your Neatly Experience
            </h1>
          </div>
          <div className="w-full">
            <form
              onSubmit={handleSearch}
              className="bg-white p-4 lg:py-12 rounded-md m-auto flex flex-col box-border gap-2 lg:gap-4 mb-6 h-full max-w-[396px]
          lg:flex-row lg:justify-evenly lg:items-center lg:p-8 sm:max-w-[60dvw] lg:max-w-[80dvw]"
            >
              <label className="flex flex-col gap-1 text-sm lg:text-[1rem] xl:text-[1.3rem] lg:w-1/5">
                Check In
                <input
                  type="date"
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2"
                ></input>
              </label>
              <label className="hidden lg:flex lg:self-center">-</label>
              <label className="flex flex-col gap-1 text-sm lg:text-[1rem] xl:text-[1.3rem] lg:w-1/5">
                Check Out
                <input
                  type="date"
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                  }}
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2"
                ></input>
              </label>
              <label className="text-sm lg:text-[1rem] xl:text-[1.3rem] lg:w-2/5">
                Rooms & Guests
                <RoomGuestsSelector
                  rooms={rooms}
                  guests={guests}
                  increaseRooms={increaseRooms}
                  decreaseRooms={decreaseRooms}
                  increaseGuests={increaseGuests}
                  decreaseGuests={decreaseGuests}
                  dropdownOpen={dropdownOpen}
                  toggleDropdown={toggleDropdown}
                />
              </label>
              <label
                htmlFor="selectPrice"
                className="flex flex-col gap-1 text-sm lg:text-[1rem] xl:text-[1.3rem] lg:w-1/5"
              >
                Price
                <select
                  id="selectPrice"
                  value={price}
                  onChange={selectPrice}
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2"
                >
                  <option value="none">-----------</option>
                  <option value="2500">2500</option>
                  <option value="3500">3500</option>
                  <option value="4500">4500</option>
                  <option value="5500">5500</option>
                  <option value="6500">6500</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span className="text-transparent">button</span>
                <button
                  type="submit"
                  className="h-10 xl:h-12 w-full px-10 xl:px-16 rounded-md bg-orange-600 text-white lg:text-[1rem] xl:text-[1.3rem]"
                >
                  Search
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForRoom;
