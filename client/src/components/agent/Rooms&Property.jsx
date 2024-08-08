import { useEffect, useState } from "react";
import search from "../../assets/icons/CustomerBookingList/search.png";
import left from "../../assets/icons/CustomerBookingList/left.png";
import right from "../../assets/icons/CustomerBookingList/right.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";

function RoomProperty() {
  const [room, setRoom] = useState([]);
  const { apiUrl } = useAuth();
  const [find, setFind] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const indexOfLastItem = currentPage * recordsPerPage;
  const indexOfFirstItem = indexOfLastItem - recordsPerPage;
  const paginate = Math.ceil(room.length / recordsPerPage);
  const numbers = [...Array(paginate + 1).keys()].slice(1);

  // Array.from({ length: npage }, (_, i) => i + 1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changePage(room) {
    setCurrentPage(room);
  }
  function nextPage() {
    if (currentPage !== paginate) {
      setCurrentPage(currentPage + 1);
    }
  }

  const getRoom = async () => {
    let dataRoom;
    try {
      dataRoom = await axios.get(`${apiUrl}/admin/room&property`);
      setRoom(dataRoom.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const searchRoom = room.filter((room) => {
    const type = room.type ? room.type.toLowerCase() : "";
    const bedType = room.bed_type ? room.bed_type.toLowerCase() : "";
    const guest = typeof room.guests === "string" ? room.guests : "";
    const price =
      typeof room.price_per_night === "string" ? room.price_per_night : "";
    //  const sqm = room.size

    return (
      type.includes(find) ||
      bedType.includes(find) ||
      guest.includes(find) ||
      price.includes(find)
      // sqm.includes(find)
    );
  });

  const currentItems = searchRoom.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (e) => {
    setFind(e.target.value);
  };

  useEffect(() => {
    getRoom();
  }, []);

  return (
    <div className="flex flex-1 flex-col bg-gray-100 ">
      <nav className="w-full">
        <div className="navbar flex bg-base-100">
          <div className="flex-1 py-[16px] px-[60px]">
            <p className=" text-xl font-semibold">Room & Property</p>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                value={find}
                onChange={handleSearch}
                placeholder="Search.."
                className="input input-bordered w-80 pl-10"
                style={{
                  backgroundImage: `url(${search})`,
                  backgroundPosition: "10px center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: " 20px",
                }}
              />
            </div>
            <div>
              <Link to="/create">
                <button className="button-primary px-[32px] py-[16px]">
                  {" "}
                  + Create Room
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className=" w-full p-10">
        <body className="bg-gray-100">
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="">
                <tr className="bg-gray-300 ">
                  <th>Image</th>
                  <th>Room type</th>
                  <th>Price</th>
                  <th>Promotion Price</th>
                  <th> Guest(s)</th>
                  <th>Bed Type</th>
                  <th>Room Size</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((rooms, index) => {
                  return (
                    <tr className="bg-white  hover">
                      <td>
                        <img
                          src={rooms.main_image}
                          alt={rooms.bed_type}
                          height="72px"
                          width="120px"
                        ></img>
                      </td>
                      <td>
                        <Link key={index} to={`/update/${rooms.room_id}`}>
                          {rooms.type}
                        </Link>
                      </td>
                      {/* {{`pathname:"/update/"
                    ${pathrooms.room_id}`}} */}
                      <td>{rooms.price_per_night}</td>
                      <td>{rooms.price_promotion}</td>
                      <td>{rooms.guests}</td>
                      <td>{rooms.bed_type}</td>
                      <td>{rooms.size} sqm.</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <ul className="flex justify-center items-center mt-5">
              <li>
                <a
                  href="#page"
                  className="font-bold text-gray-500 hover:text-green-600  hover:bg-white w-[32px] h-[32px] p-2 pl-3 hover:rounded-md hover:border border-1"
                  onClick={prePage}
                  disabled={currentPage === 1 ? true : false}
                >
                  &lsaquo;
                </a>
              </li>
              {numbers.map((number, index) => {
                return (
                  // {`${currentPage === number ? 'active' : ''}`}
                  <li
                    key={index}
                    className="text-center flex justify-center items-center font-bold text-gray-500  hover:text-green-600 hover:bg-white w-[32px] h-[32px] m-1 hover:rounded-md hover:border border-1"
                  >
                    <a href="#page" onClick={() => changePage(number)}>
                      {number}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#page"
                  onClick={nextPage}
                  className="font-bold text-gray-500  hover:text-green-600 hover:bg-white w-[32px] h-[32px]  p-2 pl-3 hover:rounded-md hover:border border-1"
                >
                  &rsaquo;
                </a>
              </li>
            </ul>

            {/* <div className="flex justify-center">
                <div className="flex items-center">
                  <button className="font-bold text-gray-500 hover:text-green-600 hover:bg-white w-8 h-8 m-1 p-2 pl-3 hover:rounded-md hover:border border-1">
                  &lsaquo;
                  </button>
                  <button className="font-bold text-gray-500 hover:text-green-600 hover:bg-white w-8 h-8 m-1 hover:rounded-md hover:border border-1">
                    1
                  </button>
                  <button className="font-bold text-gray-500 hover:text-green-600 hover:bg-white w-8 h-8 m-1 hover:rounded-md hover:border border-1">
                    2
                  </button>
                  <button className="font-bold text-gray-500 hover:text-green-600 hover:bg-white w-8 h-8 m-1 hover:rounded-md hover:border border-1">
                    3
                  </button>
                  <button className="font-bold text-gray-500 hover:text-green-600 hover:bg-white w-8 h-8 m-1 hover:rounded-md hover:border border-1">
                    4
                  </button>
                  <button className="font-bold text-gray-500 hover:text-green-600 hover:bg-white w-8 h-8 m-1 p-2 mb-2 hover:rounded-md hover:border border-1">
                    {" "}
                    &rsaquo;
                  </button>
                </div>
              </div> */}
          </div>
        </body>
      </div>
    </div>
  );
}
export default RoomProperty;
