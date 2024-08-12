import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";
import ChangeDatePopup from "./ChangeDatePopup";
function ChangeDateCard() {
  const { state, apiUrl, apiPort } = useAuth();
  const [changeDate, setChangeDate] = useState([]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const getChangeDate = async () => {
    try {
      const result = await axios.get(`${apiUrl}/changedate/60`);
      setChangeDate(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [changeDatePopup, setChangeDatePopup] = useState(false);
  const handleChangeDate = () => {
    setChangeDatePopup(!changeDatePopup);
  };

  useEffect(() => {
    getChangeDate();
    console.log("b");
  }, []);

  return (
    <div className="w-full h-[819px] border-b border-gray-300 pb-[24px] bg-gray-100 flex flex-col items-center xl:pt-[70px] ">
      {changeDate.map((item, index) => {
        return (
          <div
            key={index}
            className="xl:w-[1120px] xl:h-[462px]   xl:border-b xl:border-gray-300 xl:py-[40px] xl:flex xl:flex-row "
          >
            <div className="w-[375px] h-[221px] ">
              <img
                src={item.main_image}
                className="w-[375px] h-[221px] rounded xl:w-[357] xl:h-[210px]"
              />
            </div>
            <div className="w-[375px] h-[462px] pb-[24px] px-[16px] gap-[32px] xl:h-[150px] xl:pl-[35px]">
              <br className="xl:hidden"></br>

              <div className=" w-[343px] h-[70px] flex flex-col gap-[4px]  xl:w-[715px] xl:h-[42px] xl:gap-[24px] xl:flex xl:flex-row xl:justify-between xl:items-center ">
                <p className="w-[314px] h-[42px] font-inter font-semibold text-[28px] leading-[42px] text-black ">
                  {item.type}
                </p>
                <p className="w-[250px] h-[24px] font-inter font-normal text-[16px] leading-[24px] text-gray-600 ">
                  {item.formatted_date_booking}
                </p>
              </div>

              <br></br>
              <div className="w-[343px] h-[56px] ">
                <p className="w-[150px] h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800 ">
                  Original Date
                </p>
                <p className="w-[343px] h-[32px]  py-[4px] gap-[8px]">
                  {item.formatted_date_in} - {item.formatted_date_out}
                </p>
              </div>
              <br></br>

              <div className="w-[343px] h-[248px] rounded p-[16px] gap-[16px] bg-white xl:w-[715px] xl:h-[148px] xl:rounded xl:p-[16px] xl:gap-[16px] ">
                <p className="w-[100px] h-[24px] font-inter font-semibold text-[16px] leading-[24px] text-gray-800 ">
                  Change Date
                </p>
                <br></br>

                <div className="xl:w-[683px] xl:h-[76px] xl:flex xl:flex-row xl:gap-[24px]">
                  <label className="w-[311px] h-[76px] gap-[4px] flex flex-col font-inter font-normal text-[16px] leading-[24px] text-gray-900">
                    Check In
                    <input
                      type="date"
                      min={today}
                      value={checkIn}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                      }}
                      className="border-[0.5px] border-black/20 
                  rounded-lg p-2"
                    ></input>
                  </label>

                  <br></br>
                  <label className="w-[311px] h-[76px] gap-[4px] flex flex-col font-inter font-normal text-[16px] leading-[24px] text-gray-900">
                    Check Out
                    <input
                      type="date"
                      min={today}
                      value={checkOut}
                      onChange={(e) => {
                        setCheckOut(e.target.value);
                      }}
                      className="border-[0.5px] border-black/20 
                  rounded-lg p-2"
                    ></input>
                  </label>
                </div>
              </div>
            </div>
            <br></br>

            <div className="w-[375px] h-[96px] px-[16px] gap-[24px]  flex flex-col  xl:relative xl:top-[350px] xl:right-[746px]  ">
              <div className=" flex flex-col gap-[20px] xl:w-[1120px]  xl:justify-between xl:flex xl:flex-row-reverse xl:items-center xl:relative xl:right-[15px]">
                <button
                  onClick={handleChangeDate}
                  className="w-[343px] h-[48px] rounded py-[16px] px-[32px] gap-[10px] bg-orange-600 text-white font-sans font-semibold text-[16px] leading-[16px] "
                >
                  {" "}
                  Confirm Change Date
                </button>
                {changeDatePopup ? <ChangeDatePopup /> : null}

                <button className="w-[343px] h-[24px] rounded py-[4px] px-[8px] gap-[8px]  text-orange-500 font-sans font-semibold text-[16px] leading-[16px]  xl:flex xl:items-start">
                  {" "}
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChangeDateCard;
