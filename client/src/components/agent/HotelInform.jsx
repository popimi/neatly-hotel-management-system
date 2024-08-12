import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
import ValidCustomer from "./Alert";

function HotelInformation() {
  const [hotelName, setHotelName] = useState("");
  const [hotelDescription, setHotelDescription] = useState("");
  const [hotelLogo, setHotelLogo] = useState("");
  const [loading, setLoading] = useState(false);
  const { apiUrl } = useAuth();
  const fileInputRef = useRef(null);
  const [alertinfo,setAlertInfo] = useState({message:"",type:""})
  const [Open,setOpen] =useState(false)

  const handleClick =()=>{
    setOpen(false)
}

  const hotelDetail = async () => {
    let result;
    try {
      result = await axios.get(`${apiUrl}/admin/hotelinfo`);

      setHotelName(result.data.data.name);
      setHotelDescription(result.data.data.description);
      setHotelLogo(result.data.data.logo);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios.put(
        `${apiUrl}/admin/edithotel`,
        {
          name: hotelName,
          description: hotelDescription,
          logo: hotelLogo,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setLoading(false);
      setOpen(true)
      setAlertInfo({
        message:"Successfully Update Hotel Information",
        type:"alert-success"})
        setTimeout(() => {
          setOpen(false)
        }, 3000);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    hotelDetail();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  return (
    <>
    {Open&&
      <ValidCustomer 
      alert={alertinfo}
      handleClick={handleClick}
      />}
      {loading && (
        <span className="loading loading-dots loading-lg absolute top-[150px] right-[600px] px-2"></span>
      )}
      <div className="flex flex-1 flex-col bg-gray-100 ">
        <nav className="flex items-center justify-between bg-white h-[80px] py-[16px] px-[60px] ">

            <h5 className="py-[16px] px-[10px]">Hotel Information</h5>

          <div className="flex ">
            <button
              onClick={handleUpdate}
              className="rouned flex items-center align-middle button-primary w-[121px] h-[48px] gap-[10px]
            px-[32px] py-[16px] border border-1"
              type="submit"
            >
              Update
            </button>
          </div>
        </nav>
        <div className="bg-gray-100  p-10">
          <div>
            <div className="bg-white h-[747px] gap-[40px] pt-[40px] pr-[80px] pb-[60px] pl-[80px]">
              <form onSubmit={submit} className="flex flex-col">
                <div className="flex flex-col">
                  <label>Hotel name *</label>
                  <input
                    type="text"
                    name="roomType"
                    value={hotelName}
                    className="mb-10 rounded w-[920px] h-[48px] gap-[4px] border border-1 px-[16px] py-[12px]"
                    onChange={(e) => {
                      setHotelName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label>Hotel Description* </label>
                  <textarea
                    name="Room Descrpition"
                    style={{ resize: "none" }}
                    value={hotelDescription}
                    onChange={(e) => {
                      setHotelDescription(e.target.value);
                    }}
                    className="rounded border border-1 w-[920px] h-[264px] mb-10 px-[16px] py-[12px]"
                  ></textarea>
                </div>
                <footer>
                  <p>Hotel logo *</p>
                  <div className=" bg-slate-400 h-[167px] w-[167px] flex items-center justify-start gap-5 flex-wrap rounded-xl relative">
                    {hotelLogo && (
                      <div className="absolute h-full w-full bg-green-500 rounded-[4px] flex justify-center items-center z-20">
                        <img
                          src={
                            typeof hotelLogo == "object"
                              ? URL.createObjectURL(hotelLogo)
                              : hotelLogo
                          }
                          className="rounded-[4px] object-cover w-full h-full"
                        />
                        <button
                          onClick={(e) => {
                            fileInputRef.current.value = "";
                            e.preventDefault();
                            setHotelLogo("");
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
                        ref={fileInputRef}
                        type="file"
                        onChange={(e) => {
                          setHotelLogo(e.target.files[0]);
                        }}
                        name="hotelLogo"
                        className=" hidden w-full h-full z-20"
                      />
                    </label>
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HotelInformation;
