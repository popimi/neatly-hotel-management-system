import search from "../../assets/icons/CustomerBookingList/search.png";
import left from "../../assets/icons/CustomerBookingList/left.png";
import right from "../../assets/icons/CustomerBookingList/right.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authentication";

function BookingCustomer() {
  const [customer, setCustomer] = useState([]);
  const { apiUrl } = useAuth();
  const [find, setFind] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const indexOfLastItem = currentPage * recordsPerPage;
  const indexOfFirstItem = indexOfLastItem - recordsPerPage;
  const paginate = Math.ceil(customer.length / recordsPerPage);
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

  const getCustomer = async () => {
    let dataBooking;
    try {
      dataBooking = await axios.get(`${apiUrl}/admin/customerbooking`);
      setCustomer(dataBooking.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const searchRoom = customer.filter((room) => {
    const type = room.type ? room.type.toLowerCase() : "";
    const firstname = room.firstname ? room.firstname.toLowerCase() : "";
    const lastname = room.lastname ? room.lastname.toLowerCase() : "";
    const bedType = room.bed_type ? room.bed_type.toLowerCase() : "";
    const checkedIn = room.checked_in ? room.checked_in.toLowerCase() : "";
    const checkedOut = room.checked_out ? room.checked_out.toLowerCase() : "";
    const guest = room.guests ? room.guests.toString() : "";
    return (
      type.includes(find.toLowerCase) ||
      firstname.includes(find.toLowerCase) ||
      lastname.includes(find.toLowerCase) ||
      bedType.includes(find.toLowerCase) ||
      checkedIn.includes(find.toLowerCase) ||
      checkedOut.includes(find.toLowerCase) ||
      guest.includes(find.toLowerCase)
    );
  });
  // const searchRoom = customer.filter((room)=>

  // room.type.toLowerCase().includes(find) ||
  // room.firstname.toLowerCase().includes(find) ||
  // room.lastname.toLowerCase().includes(find) ||
  // room.guests.toLowerCase().includes(find) ||
  // room.bed_type.toLowerCase().includes(find) ||
  // room.checked_in.toLowerCase().includes(find) ||
  // room.checked_out.toLowerCase().includes(find))

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return date.toDateString();
  // };
  const currentItems = searchRoom.slice(indexOfFirstItem, indexOfLastItem);
  const handleSearch = (e) => {
    setFind(e.target.value);
  };
  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <main className="flex flex-1 flex-col bg-gray-100 ">
      <nav className="w-full">
        <div className="navbar flex bg-base-100">
          <div className="flex-1">
            <p className="py-[16px] px-[60px]  text-xl font-semibold">Customer Booking</p>
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
                {currentItems.map((customers, index) => {
                  return (
                    <tr className="bg-white  " key={index}>
                      <td>
                        <Link to={`/detail/${customers.booking_id}`}>
                          {customers.firstname}
                        </Link>
                      </td>
                      <td>{customers.guests}</td>
                      <td>{customers.bed_type}</td>
                      <td>1</td>
                      <td>{customers.type}</td>
                      <td>{customers.formatted_date}</td>
                      <td>{customers.formatted_date_out}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <ul className="flex justify-center items-center mt-5">
              <li>
                <a
                  href="#"
                  className="font-bold text-gray-500 hover:text-green-600 w-[32px] h-[32px] hover:bg-white p-2 pl-3 hover:rounded-md hover:border border-1"
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
                  className="font-bold text-gray-500 w-[32px] h-[32px] hover:text-green-600 hover:bg-white p-2 pl-3 hover:rounded-md hover:border border-1"
                >
                  &rsaquo;
                </a>
              </li>
            </ul>
            {/* <div className="flex justify-center">
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
              </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
export default BookingCustomer;
