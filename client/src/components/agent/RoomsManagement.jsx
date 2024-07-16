import search from "../../assets/icons/CustomerBookingList/search.png";
import left from "../../assets/icons/CustomerBookingList/left.png";
import right from "../../assets/icons/CustomerBookingList/right.png";

function RoomManagement (){
  const [room,setRoom] = useState([])
  
  
  const roomDetail = async ()=>{
    let result;
    try{
      result = await axios.get('http://localhost:4000/management')
      const data = result.data.data
      setRoom(data)
    }catch (error){
      console.log(error);
    }
  }
  
  useEffect(()=>{
    roomDetail()
  },[])



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
          <body className="bg-gray-100">
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
                  {room.map((rooms)=>{
                    return(
                    <tr className="bg-white  hover" key={rooms.id}>
                    <td><a href="#">{rooms.room_id}</a></td>
                    <td>{rooms.type}</td>
                    <td>{rooms.bed_type}</td>
                    <td>{rooms.status}</td>
                  </tr>
                    )
                  })}
                  {/* <tr className="bg-white  hover">
                    <td><a href="#">0001</a></td>
                    <td>Superior Garden View</td>
                    <td>Single Bed</td>
                    <td>drop down</td>
                  </tr> */}
                  
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
      </div>)
}
export default RoomManagement