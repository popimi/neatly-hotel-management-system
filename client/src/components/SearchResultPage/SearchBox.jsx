import { useState } from "react";
import RoomGuestsSelector from "../HomePage/RoomGuestsSelector";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function SearchBox({ setSearchResult, setSearchKey }) {
  const { apiUrl } = useAuth();
  let search = [];
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const convertDate = (date) => {
    const result = format(new Date(date), "yyyy-MM-dd");
    return result;
  };
  const checkIn = convertDate(startDate);
  const checkOut = convertDate(endDate);
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const today = new Date();

  const increaseRooms = () => setRooms(rooms + 1);
  const decreaseRooms = () => setRooms(rooms > 1 ? rooms - 1 : 1);
  const increaseGuests = () => setGuests(guests < 6 ? guests + 1 : guests);
  const decreaseGuests = () => setGuests(guests > 2 ? guests - 1 : 2);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectPrice = (e) => {
    const priceRate = e.target.value;
    setPrice(priceRate);
  };

  const getMinEndDate = () => {
    if (startDate) {
      const nextDay = new Date(startDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay > today ? nextDay : today;
    }
    return today;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDropdownOpen(false);
    let result;

    if (!checkIn || !checkOut || !guests || !price) {
      try {
        result = await axios.get(`${apiUrl}/search/all`);
        const updateResult = result.data.data;
        search.push(updateResult);
        setSearchResult([...search]);
      } catch (error) {
        console.error({ Error: error.message });
      }
    }

    if (checkIn && checkOut && guests && price) {
      try {
        setSearchKey([{ checkIn }, { checkOut }, { guests }, { price }]);
        result = await axios.get(
          `${apiUrl}/search?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&price=${price}`
        );
        const updateSearch = result.data.data;
        search.push(updateSearch);
        setSearchResult([...search]);
      } catch (error) {
        console.error({ Error: error.message });
      }
    }
  };

  return (
    <div className="sticky top-[100px] bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full h-fit flex flex-col lg:items-center justify-evenly lg:flex-row gap-5 p-5"
      >
        <label className="flex flex-col gap-1 lg:w-1/6 body-1 text-gray-900">
          Check In
          <DatePicker
            selected={startDate}
            minDate={today}
            onChange={(date) => setStartDate(date)}
            dateFormat="EEE, dd MMM yyyy"
            placeholderText="Check In"
          />
        </label>
        <span className="hidden lg:flex lg:self-center">-</span>
        <label className="flex flex-col gap-1 lg:w-1/6 body-1 text-gray-900">
          Check Out
          <DatePicker
            selected={endDate}
            minDate={getMinEndDate()}
            onChange={(date) => setEndDate(date)}
            dateFormat="EEE, dd MMM yyyy"
            placeholderText="Check Out"
          />
        </label>
        <label className="flex flex-col gap-1 lg:w-1/6 body-1 text-gray-900">
          <span className="text-gray-900">Room & Guests</span>
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
          className="flex flex-col gap-1 lg:w-1/6 body-1 text-gray-900"
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
        <label className="flex flex-col gap-1 body-1 lg:w-1/6 text-transparent">
          button
          <button
            type="submit"
            className="button-ghost border-2 border-orange-400"
          >
            Search
          </button>
        </label>
      </form>
    </div>
  );
}

export default SearchBox;
