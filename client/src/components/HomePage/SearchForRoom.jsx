import homepageImage from "../../assets/images/HomePage/homepageImage.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomGuestsSelector from "./RoomGuestsSelector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import calendar from '../../assets/icons/HomePage/calendar.svg'

function SearchForRoom() {
  const [guests, setGuests] = useState(2);
  const [price, setPrice] = useState("");
  const searchResult = [];
  const [rooms, setRooms] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const today = new Date()
  const increaseRooms = () => setRooms(rooms + 1);
  const decreaseRooms = () => setRooms(rooms > 1 ? rooms - 1 : 1);
  const increaseGuests = () => setGuests(guests < 6 ? guests + 1 : guests);
  const decreaseGuests = () => setGuests(guests > 2 ? guests - 1 : 2);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const convertDate = (date) => {
    const result = format(new Date(date), "yyyy-MM-dd");
    return result;
  };
  const checkIn = convertDate(startDate);
  const checkOut = convertDate(endDate);

  const getMinEndDate = () => {
    if (startDate) {
      const nextDay = new Date(startDate);    
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay > today ? nextDay : today;
    }
    return today;
  };

  const searchDetail = [{ checkIn }, { checkOut }, { guests }, { price }];

  const selectPrice = (e) => {
    const priceRate = e.target.value;
    setPrice(priceRate);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let result;
    let updateResult;
    try {
      result = await axios.get(
        `http://localhost:4000/search?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&price=${price}`
      );

      updateResult = result.data.data;
      searchResult.push(updateResult);
      searchResult.push(searchDetail);
      navigate("/searchroom", { state: searchResult });
    } catch {
      updateResult = [];
      navigate("/searchroom", { state: searchResult });
    }
  };

  useEffect(() => {
    localStorage.removeItem("bookingStep");
  }, []);

  return (
    <section id="search" className="box-border scroll-mt-[100px]">
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
              <label className="relative flex flex-col gap-1 lg:w-1/5 body-1 text-gray-900">
                Check In
                <DatePicker
                  selected={startDate}
                  minDate={today}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="EEE, dd MMM yyyy" 
                  placeholderText="Check In"
                />
                <img src={calendar} className="absolute top-[50%] right-[5%]"/>
              </label>
              <span className="hidden lg:flex lg:self-center">-</span>
              <label className="relative flex flex-col gap-1 lg:w-1/5 body-1 text-gray-900">
                Check Out
                <DatePicker
                  selected={endDate}
                  minDate={getMinEndDate()}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="EEE, dd MMM yyyy" 
                  placeholderText="Check Out"
                />
                <img src={calendar} className="absolute top-[50%] right-[5%]"/>
              </label>
              <label className="flex flex-col gap-1 lg:w-1/5 body-1 min-w-[150px] text-gray-900">
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
                className="flex flex-col gap-1 lg:w-1/5 body-1 text-gray-900"
              >
                Price
                <select
                  id="selectPrice"
                  value={price}
                  onChange={selectPrice}
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2 h-10 xl:h-12"
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
                  className="h-10 xl:h-12 w-full px-10 xl:px-16 button-primary mt-[2px] "
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
