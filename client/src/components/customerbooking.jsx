import search from "../assests/icons/search.png";
import left from "../assests/icons/left.png";
import right from "../assests/icons/right.png";

function Customer (){
    return(
    <content className="flex flex-1 flex-col bg-gray-100 ">
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
          <body className="bg-gray-100">
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
                  {/* row 1 */}
                  <tr className="bg-white  ">
                    <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="bg-white  hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="bg-white hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  {/* row 4 */}
                  <tr className="bg-white hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  {/* row 5 */}
                  <tr className="bg-white hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  {/* row 6 */}
                  <tr className="bg-white hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  {/* row 7 */}
                  <tr className="bg-white hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  {/* row 8 */}
                  <tr className="bg-white hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  {/* row 9 */}
                  <tr className="bg-white hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  {/* row 10 */}
                  <tr className="bg-white hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
                  <tr className="bg-white hover">
                  <td><a href="#">Kate Cho</a></td>
                    <td>2</td>
                    <td>superior Garden View</td>
                    <td>1</td>
                    <td>Single Bed</td>
                    <td>Th,19 Oct 2022</td>
                    <td>Fri,20 Oct 2022</td>
                  </tr>
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
      </content>
)
}
export default Customer