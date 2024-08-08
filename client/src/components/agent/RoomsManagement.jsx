import search from "../../assets/icons/CustomerBookingList/search.png";
import left from "../../assets/icons/CustomerBookingList/left.png";
import right from "../../assets/icons/CustomerBookingList/right.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authentication";
function RoomManagement() {
  const [room, setRoom] = useState([]);
  const [find, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [status,setStatus] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const indexOfLastItem = currentPage * recordsPerPage;
  const indexOfFirstItem = indexOfLastItem - recordsPerPage;
  const paginate = Math.ceil(room.length /recordsPerPage )
  const numbers =[...Array(paginate+1).keys()].slice(1)

  const statusStyles = {
    'Vacant': "bg-[#f0f2f8] text-[#006753] w-[70px]",
    'Occupied': "bg-[#E4ECFF] text-[#084BAF] w-[87px]",
    "Assign Clean": "bg-[#E5FFFA] text-[#006753] w-[109px]",
    "Assign Dirty": "bg-[#FFE5E5] text-[#A50606] w-[103px]",
    "Vacant Clean": "bg-[#E5FFFA] text-[#006753] w-[110px]",
    "Vacant Clean Inspected": "bg-[#FFF9E5] text-[#766A00] w-[177px]",
    "Vacant Clean Pick Up": "bg-[#E5FFFA] text-[#006753] w-[162px]",
    "Occupied Clean": "bg-[#E4ECFF] text-[#084BAF] w-[127px]",
    "Occupied Clean Inspected": "bg-[#FFF9E5] text-[#766A00] w-[194px]",
    "Occupied Dirty": "bg-[#FFE5E5] text-[#A50606] w-[121px]",
    "Out of Order": "bg-[#F0F1F8] text-[#6E7288] w-[105px]",
    "Out of Service": "bg-[#F0F1F8] text-[#6E7288] w-[117px]",
    "Out of Inventory": "bg-[#F0F1F8] text-[#6E7288] w-[129px]",
    default: "border border-gray-400 w-[212px]",
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const filteredStatuses = Object.keys(statusStyles).filter(status =>
    status.toLowerCase().includes(searchTerm.toLowerCase()) && status !== "default"
  );

  function prePage(){
    if(currentPage !==1){
      setCurrentPage(currentPage-1)
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

  const handleClick = (roomId) => {
    setIsOpen((prev) => (prev === roomId ? null : roomId));
  };

 

  const { apiUrl } = useAuth();

  const roomDetail = async () => {
    let result;
    try {
      result = await axios.get(`${apiUrl}/management`);
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
      await axios.put(`${apiUrl}/management/${id}`, {
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
            <table className="table">
              {/* head */}
              <thead className="">
                <tr className="bg-gray-300">
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
                      <td className="py-5">{rooms.room_id}</td>
                      <td>{rooms.type}</td>
                      <td>{rooms.bed_type}</td>
                      <td className="relative">
                        <div className="w-[60px]"></div>
                        <div onClick={() => handleClick(rooms.room_id)} className={`${statusStyles[rooms.status]}  h-[29px] text-center rounded flex justify-center absolute items-center top-1/2 transform -translate-y-1/2`}>{rooms.status}</div>
                        {/* {isOpen === rooms.room_id && <input
                          type="text"
                          key={rooms.room_id}
                          onClick={() => handleClick(rooms.room_id)}
                          onChange={(e) =>
                            {handleSearchChange(rooms.room_id, e.target.value);
                             
                            }

                          }
                          className={`${statusStyles[rooms.status]} h-[29px] text-center rounded flex justify-center items-center absolute z-10`}
                          
                          placeholder="Search Status ..."
                          
                        />
                } */}
                        
                        {isOpen === rooms.room_id && (
                          <div className=" h-[238px] bg-white gap-2 p-2 rounded absolute top-[40px] z-10 drop-shadow-xl overflow-y-scroll">
                            <input
                          type="text"
                          key={rooms.room_id}
                          onChange={(e) =>
                            {handleSearchChange(e.target.value);
                             
                            }

                          }
                          className='h-[29px] w-full text-center rounded flex justify-center items-center z-10 outline-none border  border-gray-400'
                          
                          placeholder="Search Status ..."
                          
                        />
                            {filteredStatuses.map(
                              (status, index) =>
                                status !== "default" && (
                                  <button
                                    key={index}
                                    onClick={() =>
                                      {updateStatus(rooms.room_id, status);
                                      handleClick(rooms.room_id);
                                      handleSearchChange('')
                                      }
                                    }
                                    className={`${statusStyles[status]} h-[29px] flex justify-center items-center rounded my-1`}
                                  >
                                    {status}
                                  </button>
                                )
                            )}
                          </div>
                        )}
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
                  className="font-bold text-gray-500 hover:text-green-600 hover:bg-white w-[32px] h-[32px] p-2 pl-3 hover:rounded-md hover:border border-1"
                  onClick={prePage}
                  disabled={currentPage === 1 ? true : false}
                  >&lsaquo;</a>
                </li>
                {numbers.map((number,index)=>{
                  return(
                    // {`${currentPage === number ? 'active' : ''}`} 
                    <li key={index} className="text-center flex justify-center items-center font-bold text-gray-500  hover:text-green-600 hover:bg-white w-[32px] h-[32px] m-1 hover:rounded-md hover:border border-1">
                      <a href="#" onClick={()=>changePage(number)}>
                        {number}</a>
                    </li>
                  )
                })
                }
                <li>
                  <a href="#" onClick={nextPage} className="font-bold text-gray-500 w-[32px] h-[32px] hover:text-green-600 hover:bg-white w-[32px] h-[32px]  p-2 pl-3 hover:rounded-md hover:border border-1">&rsaquo;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>)
}
export default RoomManagement;
