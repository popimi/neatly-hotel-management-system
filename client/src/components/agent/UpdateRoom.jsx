import select from "../../assets/icons/CreateRoom/select.png";
import { useEffect, useState } from "react";
import plusimage from "../../assets/icons/CreateRoom/plus.png";
import drag from "../../assets/icons/CreateRoom/drag.png";
import arrow from "../../assets/icons/CustomerBookingDetail/arrow-left.png";
import { Link } from "react-router-dom";
import { useParams,useNavigate} from 'react-router-dom'
import axios from "axios";
import { useAuth } from "../../contexts/authentication";

function UpdatingRoom (){
    const params = useParams()
    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false);
    const [img, setImg] = useState([]);
    const [imgSub, setImgsub] = useState([]);
    const [roomType, setRoomType] = useState("");
    const [roomSize, setRoomSize] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [amenitiy, setAmenitiy] = useState("");
    const [guest, setGuest] = useState("");
    const [bedType, setBedtype] = useState("");
    const [promotion, setPromotion] = useState("");
    const {apiUrl,apiPort} = useAuth()
    const [amenities, setAmenities] = useState([{ id: 1, name: "" }]);

    const addAmenity = () => {
      const newAmenity = {
        id: amenities.length + 1,
        name: "",
      };
      setAmenities([...amenities, newAmenity]);
    };

    const getData = async()=>{
      console.log(params);
      try{
        const result = await axios.get(`${apiUrl}:${apiPort}/admin/room/${params.room_id}`)
        // console.log(`${result.data.data}`);
        console.log(result.data.data.amenity);
        setRoomType(result.data.data.type)
        setRoomSize(result.data.data.size)
        setPrice(result.data.data.price_per_night)
        setDescription(result.data.data.description)
        setGuest(result.data.data.guests)
        setBedtype(result.data.data.bed_type)
        // setAmenities
          // setRoomType,
          // setRoomSize,
          // setBedtype,
          // setGuest,
          // setPrice,
          // setDescription,
        }catch(e){
      console.log(e);
      }
    }

    const handleUpdate = async()=>{
      try{
        await axios.put(`${apiUrl}:${apiPort}/admin/editroom/${params.room_id}`,{
          type:roomType,
          size:roomSize,
          bed_type:bedType,
          guests:guest,
          price_per_night:price,
          description:description,
        })
        alert("Succesfully Update")
        navigate("/property")
      }catch(e){
        console.log(e);
      }
    }
    useEffect(()=>{
      getData()
    },[])

    const submit = (e)=>{
      e.preventDefault()
      handleUpdate()
    }

    const handleSubmit = () => {
      // const createRoom = {
      //   RoomType: roomType,
      //   RoomSize: roomSize,
      //   PricePerNight: price,
      //   RoomDescription: description,
      //   amenitiy: amenitiy,
      //   promotion: promotion,
      // };
      ;
    };
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    return (
      <content className="flex flex-1 flex-col bg-gray-100 ">
        <nav className="flex items-center justify-between bg-white h-[80px] py-[16px] px-[60px] ">
        
          <div className="flex">
          <Link to="/property">
        <img src={arrow} alt="arrow-left " className="w-[20px] h-[20px] mt-1" />
        </Link>
            <h5 className="pl-[20px]">{roomType}</h5>
          </div>
          <div className="flex ">
            
            <button
            onClick={handleUpdate}
              className="flex rounded-md items-center align-middle button-primary w-[116px] h-[48px] 
              px-[32px] py-[16px] border border-1"
              type="submit"
            >
              Update
            </button>
          </div>
        </nav>
        <div className="bg-gray-100  p-10">
          <form onSubmit={submit}>
            <main className="bg-white h-[1701px] gap-[40px] pt-[40px] pr-[80px] pb-[60px] pl-[80px]">
              <div className="w-[880px] h-[58px] gap-[4px] ">
                <h5 className="text-gray-600">Basic Information</h5>
              </div>
              <div className=" h-[58px] gap-[4px] ">
                <form>
                  <div className="mb-5">
                    <label>
                      Room type *
                      <br />
                      <input
                        value={roomType}
                        type="text"
                        name="roomType"
                        onChange={(e) => setRoomType(e.target.value)}
                        className="mb-10 rounded w-full h-[48px] gap-[4px] mb-5 border border-1 px-[16px] py-[12px]"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex mb-5">
                  <form  className="flex gap-10 w-full">
                    
                      <label className="body-1 font-inter flex-1">
                        Room size (sqm)*
                        <br />
                        <input
                          value={roomSize}
                          type="text"
                          name="RoomSize"
                          onChange={(e) => setRoomSize(e.target.value)}
                          className="rounded w-full h-[48px] gap-[4px] mb-5 border border-1 px-[16px] py-[12px] mr-5"
                          required
                        />
                      </label>
                    
                    
                   
                      <label className="flex-1">
                        Bed type *<br />
                        <select
                          value ={bedType}
                          onChange={(e) => {
                            setBedtype(e.target.value);
                          }}
                          style={{
                            backgroundImage: `url(${select})`,
                            backgroundPosition: "95% 50%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: " 15px",
                          }}
                          className=" appearance-none rounded w-full h-[48px] border border-1 pl-[16px]"
                          required
                        >
                          <option value="">Select Types:</option>
                        <option value="Single Bed">Single Bed</option>
                        <option value="Double Bed">Double Bed</option>
                        <option value="Double Bed(king size)">Double Bed(king size)</option>
                        <option value="Triple Bed">Triple Bed</option>
                        <option value="Twin Bed">Twin Bed</option>
                        </select>
                      </label>
                    
                    </form>
                  </div>
                  <div className="flex mb-10 w-full">
                    <label className="flex flex-col w-[calc(50%-20px)]">
                      Guest(s) *
                      <select
                      value={guest}
                      onChange={(e) => {
                        setGuest(e.target.value);
                      }}
                        style={{
                          backgroundImage: `url(${select})`,
                          backgroundPosition: "95% 50%",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: " 15px",
                        }}
                        className=" appearance-none rounded h-[48px] border border-1 pl-[16px]"
                        required
                      >
                        <option value="0">---SELECT---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </label>
                  </div>
                  <div className="flex justify-between items-end ">
                  <div className="flex w-full gap-10">
                    <label className="body-1 font-inter flex-1">
                      Price per Night(THB) *
                      <br />
                      <input
                        value={price}
                        type="number"
                        name="price"
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        className="rounded h-[48px] w-full mb-5 border border-1 px-[16px] py-[12px]"
                        required
                      />
                    </label>
                    <div className="flex items-center gap-4 flex-1">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-[24px] h-[24px] accent-orange-500 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        onChange={handleCheckboxChange}
                        checked={isChecked}
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className=" text-gray-900 font-medium"
                      >
                        Promotion Price
                      </label>

                      <input
                        className=" rounded flex-1 h-[48px] border border-1 "
                        type="text"
                        value={promotion}
                        name="promotion"
                        onChange={(e) => {
                          setPromotion(e.target.value);
                        }}
                        disabled={!isChecked}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label>Room Description*</label>
                  <textarea
                    value={description}
                    name="Room Descrpition"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    style={{ resize: "none" }}
                    className="rounded border border-1  h-[96px] mb-10 px-[16px] py-[12px]"
                  ></textarea>
                </div>
                <hr />
                  <div className="w-[880px] h-[58px] gap-[4px] mt-5">
                    <h5 className="text-gray-600">Room Image</h5>
                  </div>
                  <div
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    className="  flex flex-col"
                  >
                    <div className="flex w-[90%] justify-start ">
                      <p>main Image *</p>
                    </div>
                    <div className=" bg-slate-400 h-[240px] w-[240px] flex items-center justify-start gap-5 flex-wrap rounded-xl relative">
                  {img.hasImg && (
                    <div className="absolute h-full w-full bg-gray-200 rounded-[4px] flex justify-center items-center z-20">
                      <img
                        src={URL.createObjectURL(img.data)}
                        className="rounded-[4px] object-cover h-[144px]"
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
                  </div>
                  <div
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    className="  flex flex-col mb-5"
                  >
                    <div className="flex w-[90%] justify-start mt-5 ">
                      <p>Image Gallery (At least 4 pictures)*</p>
                    </div>
                    <div className=" w-[90%] flex items-start justify-start pt-3 gap-5 flex-wrap rounded-xl">
                      {imgSub.map((v, i) => {
                        return (
                          <div
                            key={i}
                            className="w-[150px] h-[150px]  bg-bg flex justify-center items-center relative p-0.5 "
                          >
                            <img
                              src={v.fileimage}
                              alt=""
                              className=" h-[100px] object-cover"
                            />
                            <button
                              onClick={() => {
                                setImgsub(imgSub.toSpliced(i, 1));
                              }}
                              className="absolute z-10 -top-[15px] -right-[15px] py-1 px-3 bg-red bg-bg border-2 rounded-full text-white font-bold text-md"
                            >
                              X
                            </button>
                          </div>
                        );
                      })}
                      <label className="w-[160px] h-[160px] cursor-pointer  bg-gray-200 flex justify-center items-center overflow-hidden relative">
                        <span className="text-orange-500 body-4  ">
                          <img
                            className="absolute top-[40px] right-[70px]"
                            src={plusimage}
                          ></img>
                          {imgSub.length > 9 ? "Max file upload" : "Upload photo"}
                        </span>
                        <input
                          type="file"
                          onChange={(e) => {
                            let images = [];
                            for (let i = 0; i < e.target.files.length; i++) {
                              images.push(e.target.files[i]);
                              let reader = new FileReader();
                              let file = e.target.files[i];
                              reader.onloadend = () => {
                                setImgsub((preValue) => {
                                  return [
                                    ...preValue,
                                    {
                                      filename: e.target.files[i].name,
                                      filetype: e.target.files[i].type,
                                      fileimage: reader.result,
                                    },
                                  ];
                                });
                              };
                              if (e.target.files[i]) {
                                reader.readAsDataURL(file);
                              }
                            }
                          }}
                          multiple
                          disabled={img.length > 9 ? true : false}
                          className=" hidden w-full h-full z-20"
                        />
                      </label>
                    </div>
                  </div>
                  <hr />
  
                  <div className="flex h-[58px] gap-[4px] mt-5">
                  <h5 className="text-gray-600">Room Amenities</h5>
                </div>
                <div className="relative flex flex-row justify-between">
                  <label className="body-1 font-inter pl-[50px] w-full">
                    <img
                      className="absolute left-[0px]"
                      src={drag}
                      alt="drag"
                    ></img>
                    Amenitiy *
                    <br />
                    <input
                      value={amenitiy}
                      name="amenitiy"
                      onChange={(e) => {
                        setAmenitiy(e.target.value);
                      }}
                      className="rounded-lg w-full h-[48px] gap-[4px] mb-5 border border-1 px-[16px] py-[12px] "
                      type="text"
                    />
                  </label>
                  <button className="button-ghost flex items-start p-6" disabled>
                    Delete
                  </button>
                </div>
                <div className="w-[277px] h-[48px] flex items-center justify-center">
                  <button className="button-secondary h-[48px] flex items-center">
                    {" "}
                    + Add Amenity
                  </button>
                  </div>
                </form>
                
              </div>
              
            </main>
           
          </form>
          
          <div className="flex justify-end"><button >Delete Room</button></div>
        </div>
        
      </content>
    )
}
export default UpdatingRoom