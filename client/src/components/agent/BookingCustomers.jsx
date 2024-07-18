import search from "../../assets/icons/CustomerBookingList/search.png";
import left from "../../assets/icons/CustomerBookingList/left.png";
import right from "../../assets/icons/CustomerBookingList/right.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authentication";

 function BookingCustomer (){
  const[customer,setCustomer]=useState([])
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const{ apiUrl,apiPort} = useAuth()
  
  const getCustomer = async ()=>{
    let dataBooking
    try{
      dataBooking = await axios.get(`${apiUrl}:${apiPort}/admin/customerbooking`)
      setCustomer(dataBooking.data.data)
      setCheckIn(formatDAte(dataBooking.data.data[0].checked_in));
      setCheckOut(formatDAte(dataBooking.data.data[0].checked_out));
    }catch(e){
      console.log(e);
    }
  }

  const formatDAte = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
  };

  useEffect(()=>{
    getCustomer()
  },[])
    return(
    <main className="flex flex-1 flex-col bg-gray-100 ">
        <nav className="w-full">
          <div className="navbar flex bg-base-100">
            <div className="flex-1">
              <p className=" text-xl font-semibold">Customer Booking</p>
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
          <div className="bg-gray-100">
            
                <div className="overflow-x-auto">
              <table className="table ">
                {/* head */}
                <thead className="">
                  <tr className="bg-gray-300 ">
                    <th>Customer name</th>
                    <th>Guest(s)</th>
                    <th>Room type</th>
                    <th>Amount</th>
                    <th>Bed Type</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                  </tr>
                </thead>
                <tbody>
                {customer.map((customers,index)=>{
              return(<tr className="bg-white  ">
                <td><Link to="/detail">{customers.firstname}</Link></td>
                <td>{customers.guests}</td>
                <td>{customers.bed_type}</td>
                <td>1</td>
                <td>{customers.type}</td>
                <td>{checkIn}</td>
                <td>{checkOut}</td>
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
              
            
          </div>
        </div>
      </main>
)
}
export default BookingCustomer