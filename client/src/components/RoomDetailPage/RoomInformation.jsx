import { useEffect, useState } from "react";
import BookNowButton from "./ButtonNowBook";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import { useLocation } from "react-router-dom";

function RoomInformation() {
  const location = useLocation();
  const { state, apiUrl, apiPort } = useAuth();
  const [roomDetail, setRoomDetail] = useState([]);
  
  

  const getRoomDetail = async () => {
    try {
      const result = await axios.get(`${apiUrl}/roomdetail/116`);
      setRoomDetail(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRoomDetail();
  }, []);

  return (
    <section className=" w-full h-[862px] flex flex-col top-[297px] gap-[24px]  lg:hidden items-center">
      {roomDetail.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className=" w-full h-[344px] gap-[40px] m-[16px] pl-[10px] "
            >
              <br></br>

              <p className=" w-[343px] h-[110px] font-medium text-[44px] font-[noto] leading-[55px] text-green-800  ">
                {item.type}
              </p>

              <br></br>
              <br></br>
              <div className=" w-full h-[96px] content-between ">
                <p className=" w-[354px] h-[48px] font-normal text-[16px] font-[inter] leading-[24px] text-gray-700 ">
                  {item.description}
                </p>

                <br></br>

                <div className="flex flex-row justify-between gap-[10px] font-[inter] font-normal text-[16px] leading-[24px] text-gray-700 ">
                  <span>{item.guests} Persons</span> <span>|</span>
                  <span>1 {item.bed_type}</span> <span>|</span>
                  <span>{item.size} sqm</span>
                </div>
                <br></br>
                <br></br>
                <div className=" flex flex-row justify-between items-center  ">
                  <div className="flex flex-col gap-[4px] font-[inter] ">
                    <p className="font-normal text-[16px] leading-[24px] text-gray-700 line-through">
                      THB {item.price_per_night}.00
                    </p>
                    <p className="font-semibold text-[20px] leading-[30px] text-gray-900">
                      THB {item.price_promotion}.00
                    </p>
                  </div>
                  <div className="flex items-end justify-end relative right-[20px]">
                    <BookNowButton />
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full h- border-t-[1px] pt-[24px] gap-[24px] m-[18px] relative bg-white pl-[10px]">
              <p className="font-[inter] font-semibold text-[20px] leading-[30px] text-[#000000] ">
                Room Amenities
              </p>
              <br></br>
              <ul className="h- font-[inter] font-normal text-[16px] leading-[24px] list-disc list-inside text-gray-700 ">
                <li>{item.amentity}</li>
                <li>Air Conditioning</li>
                <li>High speed internet connection</li>
                <li>Hairdryer </li>
                <li>Shower</li>
                <li>Bathroom amenities</li>
                <li>Lamp</li>
                <li>Minibar</li>
                <li>Telephone</li>
                <li>Ironing board</li>
                <li>A floor only accessible via a guest room key</li>
                <li>Alarm clock</li>
                <li>Bathrobe</li>
              </ul>
            </div>
          </>
        );
      })}
    </section>
  );
}

export default RoomInformation;

// import BookNowButton from "./ButtonNowBook";

// function RoomInformation() {
//   const{state, apiUrl, apiPort} = useAuth()
//   const[roomDetail, setRoomDetail] = useState([])
//   const getRoomDetail = async() =>{
//     try {
//       const result = await axios.get(`${apiUrl}/roomdetail/`)

//     } catch (error) {

//     }
//   }

//   return (
//     <section className=" w-full h-[862px] flex flex-col top-[297px] gap-[24px]  lg:hidden items-center">
//       <div className=" w-full h-[344px] gap-[40px] m-[16px] pl-[10px]">
//         <br></br>

//         <p className="  font-medium text-[44px] font-[noto] leading-[55px] text-green-800  ">
//           Superior Garden View
//         </p>

//         <br></br>
//         <br></br>
//         <div className=" w-full h-[96px] content-between ">
//           <p className="font-normal text-[16px] font-[inter] leading-[24px] text-gray-700 ">
//             Rooms (36sqm) with full garden views, 1 single bed, bathroom with
//             bathub & shower.
//           </p>

//           <br></br>

//           <div className="flex flex-row gap-[16px] font-[inter] font-normal text-[16px] leading-[24px] text-gray-700 ">
//             <span>2 Persons</span> <span>|</span>
//             <span>1 Double bed</span> <span>|</span>
//             <span>32 sqm</span>
//           </div>
//           <br></br>
//           <br></br>
//           <div className=" flex flex-row justify-between items-center  ">
//             <div className="flex flex-col gap-[4px] font-[inter] ">
//               <p className="font-normal text-[16px] leading-[24px] text-gray-700 line-through">
//                 THB 3,100.00
//               </p>
//               <p className="font-semibold text-[20px] leading-[30px] text-gray-900">
//                 THB 2,500.00
//               </p>
//             </div>
//             <div className="flex items-end justify-end relative right-[20px]">
//               <BookNowButton />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" w-full h-[414px] border-t-[1px] pt-[24px] gap-[24px] m-[18px] relative bg-white pl-[10px]">
//         <p className="font-[inter] font-semibold text-[20px] leading-[30px] text-[#000000] ">
//           Room Amenities
//         </p>
//         <br></br>
//         <ul className="font-[inter] font-normal text-[16px] leading-[24px] list-disc list-inside text-gray-700 ">
//           <li>Safe in Room</li>
//           <li>Air Conditioning</li>
//           <li>High speed internet connection</li>
//           <li>Hairdryer </li>
//           <li>Shower</li>
//           <li>Bathroom amenities</li>
//           <li>Lamp</li>
//           <li>Minibar</li>
//           <li>Telephone</li>
//           <li>Ironing board</li>
//           <li>A floor only accessible via a guest room key</li>
//           <li>Alarm clock</li>
//           <li>Bathrobe</li>
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default RoomInformation;
