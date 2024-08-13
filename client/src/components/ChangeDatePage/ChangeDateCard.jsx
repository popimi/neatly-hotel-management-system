import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authentication";
import axios from "axios";
import ChangeDatePopup from "./ChangeDatePopup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import calendar from "../../assets/icons/HomePage/calendar.svg";
import { useNavigate } from "react-router-dom";

function ChangeDateCard({ details }) {
  
  const convertDate = (date) => {
    const result = format(new Date(date), "yyyy-MM-dd");
    return result;
  };

  const getMinEndDate = () => {
    if (startDate) {
      const nextDay = new Date(startDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay > today ? nextDay : today;
    }
    return today;
  };

  const { state, apiUrl } = useAuth();
  const [changeDate, setChangeDate] = useState([]);
  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const bookingDetail = details;
  const checkIn = convertDate(startDate);
  const checkOut = convertDate(endDate);
  const navigate = useNavigate();

  const getChangeDate = async () => {
    try {
      const result = await axios.get(
        `${apiUrl}/changedate/${bookingDetail.booking_id}`
      );
      setChangeDate(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [changeDatePopup, setChangeDatePopup] = useState(false);
  const handleChangeDate = () => {
    setChangeDatePopup(!changeDatePopup);
  };

  const confirmChangeDate = async() => {
    try {
      const result = await axios.put(`${apiUrl}/booking/changedate/${details.booking_id}`,{
        checked_in: checkIn,
        checked_out: checkOut
      })
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getChangeDate();
  }, []);

  return (
    <>
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
                    <label className="relative w-[311px] h-[76px] gap-[4px] flex flex-col font-inter font-normal text-[16px] leading-[24px] text-gray-900">
                      Check In
                      <DatePicker
                        selected={startDate}
                        minDate={today}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="EEE, dd MMM yyyy"
                        placeholderText="Check In"
                      />
                      <img src={calendar} className="absolute top-[45%] right-[5%]" />
                    </label>

                    <br></br>
                    <label className="relative w-[311px] h-[76px] gap-[4px] flex flex-col font-inter font-normal text-[16px] leading-[24px] text-gray-900">
                      Check Out
                      <DatePicker
                        selected={endDate}
                        minDate={getMinEndDate()}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="EEE, dd MMM yyyy"
                        placeholderText="Check Out"
                      />
                      <img src={calendar} className="absolute top-[45%] right-[5%]" />
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
                  {changeDatePopup ? <ChangeDatePopup confirmChangeDate={confirmChangeDate} /> : null}

                  <button onClick={()=>navigate('/bookinghistory')} className="w-[343px] h-[24px] rounded py-[4px] px-[8px] gap-[8px]  text-orange-500 font-sans font-semibold text-[16px] leading-[16px]  xl:flex xl:items-start">
                    {" "}
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ChangeDateCard;
