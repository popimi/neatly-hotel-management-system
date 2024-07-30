import search from "../../assets/icons/CustomerBookingList/search.png";
import left from "../../assets/icons/CustomerBookingList/left.png";
import right from "../../assets/icons/CustomerBookingList/right.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
function RoomManagement() {
  const [room, setRoom] = useState([]);
  const [find, setSearch] = useState("");
  // const [status,setStatus] = useState('')
  // const {id} = useParams()
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const indexOfLastItem = currentPage * recordsPerPage;
  const indexOfFirstItem = indexOfLastItem - recordsPerPage;
  const paginate = Math.ceil(room.length / recordsPerPage);
  const numbers = [...Array(paginate + 1).keys()].slice(1);

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

  const { apiPort, apiUrl } = useAuth();

  const roomDetail = async () => {
    let result;
    try {
      result = await axios.get(`${apiUrl}:${apiPort}/management`);
      const data = result.data.data;
      setRoom(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, newstatus) => {
    try {
      setRoom((prev) =>
        prev.map((room) =>
          room.id === id ? { ...room, status: newstatus } : room
        )
      );
      await axios.put(`${apiUrl}:${apiPort}/management/${id}`, {
        status: newstatus,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const roomfind = room.filter(
    (room) =>
      room.type.toLowerCase().includes(find.toLowerCase()) ||
      room.bed_type.toLowerCase().includes(find.toLowerCase()) ||
      room.room_id.includes(find) ||
      room.status.toLowerCase().includes(find.toLowerCase())
  );

  const currentItems = roomfind.slice(indexOfFirstItem, indexOfLastItem);

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // let click = (e) =>{
  //   setStatus(e.target.value)
  //   updateStatus(id)
  // }

  useEffect(() => {
    roomDetail();
  }, [updateStatus]);

  return (
    <div className="flex flex-1 flex-col bg-gray-100 ">
      <nav className="w-full">
        <div className="navbar flex bg-base-100">
          <div className="flex-1">
            <p className=" text-xl font-semibold">Room Management</p>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search.."
                className="input input-bordered w-80 pl-10"
                value={find}
                onChange={handleSearch}
                style={{
                  backgroundImage: `url(${search})`,
                  backgroundPosition: "10px center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: " 20px",
                }}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className=" w-full p-10">
        <div className="bg-gray-100">
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="">
                <tr className="bg-gray-300 ">
                  <th>Room no.</th>
                  <th>Room type</th>
                  <th>Bed type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((rooms, index) => {
                  return (
                    <tr className="bg-white  hover" key={index}>
                      <td>{rooms.room_id}</td>
                      <td>{rooms.type}</td>
                      <td>{rooms.bed_type}</td>
                      <td>
                        <select
                          name="status"
                          id="status"
                          value={rooms.status}
                          onChange={(e) =>
                            updateStatus(rooms.room_id, e.target.value)
                          }
                          key={rooms.room_id}
                          className={`${rooms.status == 'Vacant' ? "bg-[#f0f2f8] text-[#006753]  w-[70px] h-[29px]"
                            : rooms.status == 'Occupied'? 'bg-[#E4ECFF] text-[#084BAF]  w-[87px] h-[29px]'
                            : rooms.status == 'Assign Clean' ? 'text-[#006753] bg-[#E5FFFA]  w-[109px] h-[29px]'
                            : rooms.status == 'Assign Dirty' ? 'bg-[#FFE5E5] text-[#A50606]  w-[103px] h-[29px]'
                            : rooms.status == 'Vacant Clean Inspected' ? 'bg-[#FFF9E5] text-[#766A00]  w-[177px] h-[29px]'
                            : rooms.status == 'Vacant Clean Pick Up' ? 'bg-[#E5FFFA] text-[#006753]  w-[162px] h-[29px]'
                            : rooms.status == 'Occupied Clean' ? 'bg-[#E4ECFF] text-[#084BAF]  w-[127px] h-[29px]'
                            : rooms.status == 'Occupied Clean Inspected' ? 'bg-[#FFF9E5] text-[#766A00]  w-[194px] h-[29px]'
                            : rooms.status == 'Occupied Dirty' ? 'bg-[#FFE5E5] text-[#A50606]  w-[121px] h-[29px]'
                            : rooms.status == 'Out of Order' ? 'bg-[#F0F1F8] text-[#6E7288]  w-[105px] h-[29px]'
                            : rooms.status == 'Out of Service' ? 'bg-[#F0F1F8] text-[#6E7288]  w-[117px] h-[29px]'
                            : rooms.status == 'Out of Inventory' ? 'bg-[#F0F1F8] text-[#6E7288]  w-[129px] h-[29px]'
                            : rooms.status == 'Vacant Clean' ? 'text-[#006753] bg-[#E5FFFA]  w-[110px] h-[29px]'
                            : null} appearance-none h-[29px] text-center`}
                        >
                          <option >{room.status}</option>
                          <option value={room.status} className="bg-[#f0f2f8] text-[#006753]">Vacant</option>
                          <option value={room.status} className="bg-[#E4ECFF] text-[#084BAF]">Occupied</option>
                          <option value={room.status} className="bg-[#E5FFFA] text-[#006753]">Assign Clean</option>
                          <option value={room.status} className="bg-[#FFE5E5] text-[#A50606]">Assign Dirty</option>
                          <option value={room.status} className="bg-[#E5FFFA] text-[#006753]">Vacant Clean</option>
                          <option value={room.status} className="bg-[#FFF9E5] text-[#766A00]">Vacant Clean Inspected</option>
                          <option value={room.status} className="bg-[#E5FFFA] text-[#006753]">Vacant Clean Pick Up</option>
                          <option value={room.status} className="bg-[#E4ECFF] text-[#084BAF]">Occupied Clean</option>
                          <option value={room.status} className="bg-[#FFF9E5] text-[#766A00]">Occupied Clean Inspected</option>
                          <option value={room.status} className="bg-[#FFE5E5] text-[#A50606]">Occupied Dirty</option>
                          <option value={room.status} className="bg-[#F0F1F8] text-[#6E7288]">Out of Order</option>
                          <option value={room.status} className="bg-[#F0F1F8] text-[#6E7288]">Out of Service</option>
                          <option value={room.status} className="bg-[#F0F1F8] text-[#6E7288]">Out of Inventory</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <ul className="flex justify-center items-center mt-5">
              <li>
                <a
                  href="#"
                  className="font-bold text-gray-500 hover:text-green-600 w-[32px] h-[32px] hover:bg-white w-[32px] h-[32px] p-2 pl-3 hover:rounded-md hover:border border-1"
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
                    <a href="#" onClick={() => changePage(number)}>
                      {number}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="#"
                  onClick={nextPage}
                  className="font-bold text-gray-500 w-[32px] h-[32px] hover:text-green-600 hover:bg-white w-[32px] h-[32px]  p-2 pl-3 hover:rounded-md hover:border border-1"
                >
                  &rsaquo;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RoomManagement;
