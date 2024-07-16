import { useEffect, useState } from "react";
import axios from "axios";

function HotelInformation() {
 const [dataHotel,setDataHotel] =useState("")
 const [editDataHotel,seteditDataHotel] = useState([])

 
  const [img, setImg] = useState({
    hasImg: false,
    data: {},
  });
  return (
    <div className="flex flex-1 flex-col bg-gray-100 ">
      <nav className="flex items-center justify-between bg-white w-[1200px] h-[80px] py-[16px] px-[60px] ">
        <div>
          <h5>Hotel Information</h5>
        </div>
        <div className="flex ">
          <button
            onClick={() => {
              alert("Successfully update");
            }}
            className="rouned flex items-center align-middle button-primary w-[121px] h-[48px] gap-[10px]
            px-[32px] py-[16px] border border-1"
            type="submit"
          >
            Update
          </button>
        </div>
      </nav>
      <div className="bg-gray-100  p-10">
        <body>
          <div className="bg-white w-[1080px] h-[747px] gap-[40px] pt-[40px] pr-[80px] pb-[60px] pl-[80px]">
            <form>
              <main>
                <label>Hotel name *</label>
                <input
                  value=""
                  type="text"
                  name="roomType"
                  className="mb-10 rounded w-[920px] h-[48px] gap-[4px] mb-5 border border-1 px-[16px] py-[12px]"
                  required
                />
              </main>
              <content>
                <label>Hotel Description* </label>
                <textarea
                  value=""
                  name="Room Descrpition"
                  style={{ resize: "none" }}
                  className="rounded border border-1 w-[920px] h-[264px] mb-10 px-[16px] py-[12px]"
                ></textarea>
              </content>
              <footer>
              <p>Hotel logo *</p>
                <div className=" bg-slate-400 h-[167px] w-[167px] flex items-center justify-start gap-5 flex-wrap rounded-xl relative">
                  {img.hasImg && (
                    <div className="absolute h-full w-full bg-green-500 rounded-[4px] flex justify-center items-center z-20">
                      <img
                        src={URL.createObjectURL(img.data)}
                        className="rounded-[4px] object-cover w-full h-full"
                      />
                      <button
                        onClick={() => {
                          setImg({
                            ...img,
                            hasImg: false,
                            data: {},
                          });
                        }}
                        className="absolute flex justify-center items-center z-10 -top-1 -right-1 w-6 h-6 bg-red rounded-full"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.11719 8.88232L8.88189 1.11761M1.11719 1.11761L8.88189 8.88232"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                  <label className="w-full h-full cursor-pointer rounded-lg bg-gray-200 flex justify-center items-center overflow-hidden relative">
                    <div className=" flex flex-col justify-center items-center gap-2">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 1.5V16.5M16 9H1"
                          stroke="#E76B39"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-orange-500 text-[14px] leading-[21px] font-[500] text-center">
                        Upload Photo
                      </span>
                    </div>
                    <input
                      type="file"
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          setImg({
                            ...img,
                            hasImg: true,
                            data: e.target.files[0],
                          });
                        }
                      }}
                      multiple
                      className=" hidden w-full h-full z-20"
                    />
                  </label>
                </div>
              </footer>
            </form>
          </div>
        </body>
      </div>
    </div>
  );
}
export default HotelInformation;
