import search from "../../assets/icons/CustomerBookingList/search.png";
import left from "../../assets/icons/CustomerBookingList/left.png";
import right from "../../assets/icons/CustomerBookingList/right.png";
import axios from 'axios'
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
function RoomManagement (){
  const [room,setRoom] = useState([])
  const [find,setSearch] = useState('')
  // const [status,setStatus] = useState('')
  // const {id} = useParams()
  const {apiPort,apiUrl} = useAuth()
  const roomStatus =[
    'Occupied',
    'Assign Clean',
    'Assign Dirty',
    'Vacant',
    'Vacant Clean',
    'Vacant Clean Inspected',
    'Vacant Clean Pick Up',
    'Occupied Clean',
    'Occupied Clean Inspected',
    'Occupied Dirty',
    'Out of Order',
    'Out of Service',
    'Out of Inventory'
  ]
  
  const roomDetail = async ()=>{
    let result;
    try{
      result = await axios.get(`${apiUrl}:${apiPort}/management`)
      const data = result.data.data
      setRoom(data)
    }catch (error){
      console.log(error);
    }
  }

  const updateStatus = async (id,newstatus)=>{
    try{
      setRoom(prev =>(prev.map(room=>(room.id === id ? {...room, status:newstatus}: room

      ))
    ))
      await axios.put(`${apiUrl}:${apiPort}/management/${id}`
        ,{status:newstatus}
      )
    }catch (error){
      console.error(error);
    }
  }
  
  const roomfind = room
  .filter((room) => 
    room.type.toLowerCase().includes(find.toLowerCase()) || 
    room.bed_type.toLowerCase().includes(find.toLowerCase()) || 
    room.room_id.includes(find) || room.status.toLowerCase().includes(find.toLowerCase())
  )




  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  // let click = (e) =>{
  //   setStatus(e.target.value)
  //   updateStatus(id)
  // }

  useEffect(()=>{
    roomDetail()
  },[updateStatus])



    return(<div className="flex flex-1 flex-col bg-gray-100 ">
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
                  {roomfind.map((rooms,index)=>{
                    return(
                    <tr className="bg-white  hover" key={index}>
                    <td>{rooms.room_id}</td>
                    <td>{rooms.type}</td>
                    <td>{rooms.bed_type}</td>
                    <td>
                      <select name="status" id="status" value={rooms.status} onChange={(e)=>updateStatus(rooms.room_id, e.target.value)} key={rooms.room_id} 
                      className={`${rooms.status == 'Vacant' ? "bg-[#f0f2f8] text-[#006753]"
                      : rooms.status == 'Occupied'? 'bg-[#E4ECFF] text-[#084BAF]'
                      : rooms.status == 'Assign Clean' ? 'text-[#006753] bg-[#E5FFFA]'
                      : rooms.status == 'Assign Dirty' ? 'bg-[#FFE5E5] text-[#A50606]'
                      : rooms.status == 'Vacant Clean Inspected' ? 'bg-[#FFF9E5] text-[#766A00]'
                      : rooms.status == 'Vacant Clean Pick Up' ? 'bg-[#E5FFFA] text-[#006753]'
                      : rooms.status == 'Occupied Clean' ? 'bg-[#E4ECFF] text-[#084BAF]'
                      : rooms.status == 'Occupied Clean Inspected' ? 'bg-[#FFF9E5] text-[#766A00]'
                      : rooms.status == 'Occupied Dirty' ? 'bg-[#FFE5E5] text-[#A50606]'
                      : rooms.status == 'Out of Order' ? 'bg-[#F0F1F8] text-[#6E7288]'
                      : rooms.status == 'Out of Service' ? 'bg-[#F0F1F8] text-[#6E7288]'
                      : rooms.status == 'Out of Inventory' ? 'bg-[#F0F1F8] text-[#6E7288]'
                      : null} appearance-none`}>
                        <option>{room.status}</option>
                        {
                          roomStatus.map((status,index)=>{
                            
                            return <option key={index} value={status}>{status}</option>
                          })
                        }
                      </select>
                    </td>
                  </tr>
                    )
                  })}
                </tbody>
              </table>
              <div className="flex justify-center">
                <div className="flex items-center">
                  <button className="font-bold text-gray-500 hover:text-green-600 hover:bg-white w-8 h-8 m-1 p-2 pl-3 hover:rounded-md hover:border border-1">
                    <img src={right} alt="right"></img>
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
                    <img src={left} alt="left"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
}
export default RoomManagement