import homepageImage from "../../assets/images/HomePage/homepageImage.jpeg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SearchForRoom() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [price, setPrice] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

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
        `http://localhost:4000/search?guests=${guests}&price=${price}`
      );
      setSearchResult(searchResult.push(result.data.data));
      console.log(searchResult);
      navigate("/searchResult");
    } catch {
      console.error("Not Found");
      navigate("/searchResult");
    }
  };

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
          flex flex-col box-border justify-center items-center h-[calc(100dvh-48px)] lg:h-[calc(100dvh-100px)] px-6
          lg:p-10"
        >
          <div className="">
            <h1
              className="text-white text-pretty text-[calc(2rem+2dvw)]/[calc(40px+1dvh)] 
            lg:text-[calc(4.5rem+1dvw)]/[calc(100px+1dvh)] 
            font-bold text-center my-4 p-4 w-[80dvw] lg:max-w-[90dvw]"
            >
              A Best Place For Your Neatly Experience
            </h1>
            <form
              onSubmit={handleSearch}
              className="bg-white p-4 lg:py-12 rounded-md m-auto flex flex-col  box-border gap-2 lg:gap-4 mb-6 max-h-[396px] max-w-[375px]
          lg:flex-row lg:justify-evenly lg:items-center lg:p-8 lg:max-w-[85dvw] lg:max-h-[25dvh]"
            >
              <label className="flex flex-col gap-1 text-sm lg:text-[1rem] xl:text-[1.3rem] lg:w-1/5">
                Check In
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                  }}
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2"
                ></input>
              </label>
              <label className="hidden lg:flex lg:self-center">-</label>
              <label className="flex flex-col gap-1 text-sm lg:text-[1rem] xl:text-[1.3rem] lg:w-1/5">
                Check Out
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                  }}
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2 "
                ></input>
              </label>
              <label
                htmlFor="selectGuests"
                className="flex flex-col gap-1 text-sm lg:text-[1rem] xl:text-[1.3rem] lg:w-1/5"
              >
                Rooms & Guests
                <select
                  id="selectGuests"
                  value={guests}
                  onChange={selectGuests}
                  className="border-[0.5px] border-black/20 
                rounded-lg p-2"
                >
                  <option value="2">1 Room, 2 Guests</option>
                  <option value="2">1 Room, 2 Guests</option>
                  <option value="2">1 Room, 2 Guests</option>
                </select>
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
                  <option value="2500">2500</option>
                  <option value="2500">2500</option>
                  <option value="2500">2500</option>
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
