import { useEffect, useState } from "react";
import BookNowButton from "./ButtonNowBook";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";

function RoomInformationLg() {
  const { state, apiUrl, apiPort } = useAuth();
  const [roomDetail, setRoomDetail] = useState([]);
  console.log(roomDetail);

  const getRoomDetail = async () => {
    try {
      const result = await axios.get(`${apiUrl}:${apiPort}/roomdetail/116`);
      setRoomDetail(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRoomDetail();
  }, []);

  return (
    <section className="hidden lg:bg-gray-50 lg:w-full lg:h-[935px] lg:flex lg:flex-col lg:items-center ">
      {roomDetail.map((item, index) => {
        return (
          <>
            <div 
            key = {index}
            className="lg:w-[738px] lg:h-[633px] lg:gap-[80px] lg:m-[40px]  ">
              <br></br>
              <br></br>
              <p className="lg:font-[500] lg:text-[68px] lg:font-[noto] lg:leading-[85px] lg:text-green-800 ">
                {item.type}
              </p>

              <br></br>
              <br></br>

              <div className=" lg:w-[738px] lg:h-[146px] lg:flex lg:flex-row lg:justify-between">
                <div>
                  <p className="lg:w-[400px] lg:h-[48px] lg:font-[400] lg:text-[16px] lg:font-[inter] lg:leading-[24px] lg:text-gray-700 ">
                    {item.description}
                  </p>

                  <br></br>
                  <br></br>
                  <div className="lg:[288px] lg:h-[24px] lg:flex lg:flex-row lg:gap-[16px] lg:font-[inter] lg:font-[400] lg:text-[16px] lg:leading-[24px] lg:text-gray-700">
                    <span>{item.guests} Persons</span> <span>|</span>
                    <span>1 {item.bed_type}</span> <span>|</span>
                    <span>{item.size} sqm</span>
                  </div>
                </div>

                <div className="lg:w-[143px] lg:h-[146px] lg:gap-[4px] lg:flex lg:flex-col lg:font-[inter] ">
                  <p className="lg:font-[400] lg:text-[16px] lg:leading-[24px] lg:text-gray-700 lg:line-through lg:flex lg:justify-end">
                    THB {item.price_per_night}.00
                  </p>
                  <p className=" lg:font-[600] lg:text-[20px] leading-[30px] lg:text-gray-900 lg:flex lg:justify-end">
                    THB {item.price_promotion}.00
                  </p>
                  <br></br>
                  <BookNowButton />
                </div>
              </div>
              <br></br>

              <div className=" lg:w-[738px] lg:h-[262px] lg:border-t-[1px] lg:border-gray-300 lg:pt-[24px] lg:gap-[24px] ">
                <p className="lg:font-[inter] lg:font-[600] lg:text-[20px] lg:leading-[30px] lg:text-[#000000] ">
                  Room Amenities
                </p>
                <br></br>
                <ul className="lg:w-[738px] lg:h-[168px] lg:gap-[24px] lg:font-[inter] lg:font-[400] lg:text-[16px] lg:leading-[24px] lg:text-gray-700 lg:list-disc lg:list-inside lg:grid lg:grid-rows-7 lg:grid-flow-col  ">
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
            </div>
          </>
        );
      })}
    </section>
  );
}
export default RoomInformationLg;

// import BookNowButton from "./ButtonNowBook";
// function RoomInformationLg() {
//   const getDetail = JSON.parse(localStorage.getItem("roomdetail"));
//   return (
//     <section className="hidden lg:bg-gray-50 lg:w-full lg:h-[935px] lg:flex lg:flex-col lg:items-center ">
//       {localData[0].map((room, index) => {
//         return (
//           <>
//             <div
//               key={index}
//               className="lg:w-[738px] lg:h-[633px] lg:gap-[80px] lg:m-[40px]  "
//             >
//               <br></br>
//               <br></br>
//               <p className="lg:font-[500] lg:text-[68px] lg:font-[noto] lg:leading-[85px] lg:text-green-800 ">
//                 {getDetail.type}
//               </p>

//               <br></br>
//               <br></br>

//               <div className=" lg:w-[738px] lg:h-[146px] lg:flex lg:flex-row lg:justify-between">
//                 <div>
//                   <p className="lg:w-[400px] lg:h-[48px] lg:font-[400] lg:text-[16px] lg:font-[inter] lg:leading-[24px] lg:text-gray-700 ">
//                     {getDetail.description}
//                   </p>

//                   <br></br>
//                   <br></br>
//                   <div className="lg:[288px] lg:h-[24px] lg:flex lg:flex-row lg:gap-[16px] lg:font-[inter] lg:font-[400] lg:text-[16px] lg:leading-[24px] lg:text-gray-700">
//                     <span>{getDetail.guests} Persons</span> <span>|</span>
//                     <span>1 {getDetail.bed_type}</span> <span>|</span>
//                     <span>{getDetail.size} sqm</span>
//                   </div>
//                 </div>

//                 <div className="lg:w-[143px] lg:h-[146px] lg:gap-[4px] lg:flex lg:flex-col lg:font-[inter] ">
//                   <p className="lg:font-[400] lg:text-[16px] lg:leading-[24px] lg:text-gray-700 lg:line-through lg:flex lg:justify-end">
//                     THB 3,100.00
//                   </p>
//                   <p className=" lg:font-[600] lg:text-[20px] leading-[30px] lg:text-gray-900 lg:flex lg:justify-end">
//                     THB {getDetail.price_per_night}.00
//                   </p>
//                   <br></br>
//                   <BookNowButton />
//                 </div>
//               </div>
//               <br></br>

//               <div className=" lg:w-[738px] lg:h-[262px] lg:border-t-[1px] lg:border-gray-300 lg:pt-[24px] lg:gap-[24px] ">
//                 <p className="lg:font-[inter] lg:font-[600] lg:text-[20px] lg:leading-[30px] lg:text-[#000000] ">
//                   Room Amenities
//                 </p>
//                 <br></br>
//                 <ul className="lg:w-[738px] lg:h-[168px] lg:gap-[24px] lg:font-[inter] lg:font-[400] lg:text-[16px] lg:leading-[24px] lg:text-gray-700 lg:list-disc lg:list-inside lg:grid lg:grid-rows-7 lg:grid-flow-col  ">
//                   <li>Safe in Room</li>
//                   <li>Air Conditioning</li>
//                   <li>High speed internet connection</li>
//                   <li>Hairdryer </li>
//                   <li>Shower</li>
//                   <li>Bathroom amenities</li>
//                   <li>Lamp</li>
//                   <li>Minibar</li>
//                   <li>Telephone</li>
//                   <li>Ironing board</li>
//                   <li>A floor only accessible via a guest room key</li>
//                   <li>Alarm clock</li>
//                   <li>Bathrobe</li>
//                 </ul>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </section>
//   );
// }
// export default RoomInformationLg;
