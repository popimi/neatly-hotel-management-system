import { useEffect,useState } from "react";
import search from "../../assets/icons/CustomerBookingList/search.png";
import left from "../../assets/icons/CustomerBookingList/left.png";
import right from "../../assets/icons/CustomerBookingList/right.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";

function RoomProperty (){
  const[room,setRoom]=useState([])
  const{apiUrl,apiPort} = useAuth()

  const getRoom = async ()=>{
    let dataRoom
    try{
      dataRoom = await axios.get(`${apiUrl}:${apiPort}/admin/room&property`)
      setRoom(dataRoom.data.data)
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    getRoom()
  },[])

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
                <Link to ="/create">
                <button className="button-primary px-[32px] py-[16px]"> + Create Room</button>
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
                {room.map((rooms,index)=>{
                  return(<tr className="bg-white  hover">
                    <td>Img</td>
                    <td><Link to="/update">{rooms.type}</Link></td>
                    <td>{rooms.price_per_night}</td>
                    <td></td>
                    <td>{rooms.guests}</td>
                    <td>{rooms.bed_type}</td>
                    <td>{rooms.size} sqm.</td>
                    
                  </tr>)
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
          </body>
        </div>
          
        
        

    </div>
)
}
export default RoomProperty