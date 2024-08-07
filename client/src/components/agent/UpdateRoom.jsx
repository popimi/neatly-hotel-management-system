import select from "../../assets/icons/CreateRoom/select.png";
import { useEffect, useRef, useState } from "react";
import plusimage from "../../assets/icons/CreateRoom/plus.png";
import drag from "../../assets/icons/CreateRoom/drag.png";
import arrow from "../../assets/icons/CustomerBookingDetail/arrow-left.png";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";
// import { useRaisedShadow } from "./use-raised-shadow";
// import { ReorderIcon } from "./Icon";

function UpdatingRoom() {
  const params = useParams();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [img, setImg] = useState("");
  const [imgSub, setImgsub] = useState([]);
  const [roomType, setRoomType] = useState("");
  const [roomSize, setRoomSize] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [guest, setGuest] = useState("");
  const [bedType, setBedtype] = useState("");
  const [promotion, setPromotion] = useState("");
  const { apiUrl, apiPort } = useAuth();
  const [amenities, setAmenities] = useState([]);
  const [loading,setLoading] = useState(false)
  const fileInputRef = useRef(null);

  const addAmenity = () => {
    setAmenities([...amenities, ""]);
  };
  
  // Function to handle input change in amenity fields
  const handleAmenityChange = (index, value) => {
    setAmenities(amenities.toSpliced(index, 1, value));
  };

  // Function to remove an amenity input
  const removeAmenity = (id) => {
    if (amenities.length) {
      const updatedAmenities = amenities.filter(
        (amenity, index) => index !== id
      );
      setAmenities(updatedAmenities);
    }
  };
  
  
  const deleteData = async ()=>{
    try{
      await axios.delete(`${apiUrl}:${apiPort}/admin/deleteroom/${params.room_id}`)
      navigate("/property")
    }catch(e){
      console.log(e);
      
    }
  }
  for(let photoUrl of imgSub){
    console.log(photoUrl);
  }
  const getData = async () => {
    console.log(params);
    try {
      const result = await axios.get(
        `${apiUrl}:${apiPort}/admin/room/${params.room_id}`
      );
      // console.log(`${result.data.data}`);
      console.log(result.data.data.main_image);
      setRoomType(result.data.data.type);
      setRoomSize(result.data.data.size);
      setPrice(result.data.data.price_per_night);
      setDescription(result.data.data.description);
      setGuest(result.data.data.guests);
      setBedtype(result.data.data.bed_type);
      setAmenities(result.data.data?.amenity || []);
      setIsChecked(result.data.data.promotion_status);
      setPromotion(result.data.data.price_promotion);
      setImg(result.data.data.main_image);
      setImgsub(result.data.data.image_gallery || [])  
      console.log(result.data.data.image_gallery || []);
      
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdate = async () => {
    setLoading(true)
    try {
       if(price.length>6 || !price){
        setLoading(false)
        return alert("Please insert the price not more than 5 digits or empty")
      } 
      if (guest===0){
        setLoading(false)
        return alert("Please insert number of guests")
      } 
      if (!roomSize){
        setLoading(false)
        return alert("Please insert room size")
      } 
      if (!roomType){
        setLoading(false)
        return alert("Please insert roomtype")
      }
       if (bedType===""){
        setLoading(false)
        return alert("Please choose bedtype")
      }
       if(imgSub.length<=3){
        setLoading(false)
        return alert("Please insert photo at least 4 photos")
      }
      
      
        const postData = new FormData()  
        postData.append ("type",roomType)
        postData.append("size", roomSize)
        postData.append("bed_type" ,bedType)
        postData.append("guests" ,guest)
        postData.append("price_per_night" ,price)
        postData.append("description", description)
        postData.append("price_promotion" ,promotion)
        postData.append("promotion_status" ,isChecked)
        postData.append("main_image" ,img)
        for(let data of amenities){
          postData.append("amenity",data)
        }
  
        for (let imgsSub of imgSub) {
          postData.append("image_gallery", imgsSub);
        }
      

      await axios.put(
        `${apiUrl}:${apiPort}/admin/editroom/${params.room_id}`,postData

        ,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setLoading(false)
      alert("Succesfully Update");
      navigate("/property");
    } catch (e) {
      console.log(e);
      setLoading(false)
    }
  };

  console.log(imgSub);
  console.log(img);
  const dragItem = useRef(0);
  const dragOverItem = useRef(0);
  const handleDrag = () => {
    console.log("hi");
    const amenityClone = [...amenities];
    const temp = amenityClone[dragItem.current];
    const temp2 = amenityClone[dragOverItem.current];

    amenityClone[dragItem.current] = temp2;
    amenityClone[dragOverItem.current] = temp;
    setAmenities(amenityClone);
  };

  useEffect(() => {
    getData();
  }, []);
  
  const deleteRoom =()=>{
    deleteData()
  }
  const submit = (e) => {
    e.preventDefault();
    
    handleUpdate();
    
  };

  // const handleSubmits = (e) => {
  //   e.preventDefault();
  //   if (imgSub.length < 5) {
  //     alert("โปรดใส่รูปขั้นต่ำ 4 รูป");
  //   }
  // };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
    {loading && <span className="loading loading-dots loading-lg absolute top-[150px] right-[600px]"></span>}
    <content className="flex flex-1 flex-col bg-gray-100 ">
      <nav className="flex items-center justify-between bg-white h-[80px] py-[16px] px-[60px] ">
        <div className="flex">
          <Link to="/property">
            <img
              src={arrow}
              alt="arrow-left "
              className="w-[20px] h-[20px] mt-1"
            />
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
      <div className="bg-gray-100 h-fit p-10">
        <form onSubmit={submit}>
          <main className="bg-white  gap-[40px] pt-[40px] pr-[80px] pb-[60px] pl-[80px]">
            <div className="w-[880px] h-[58px] gap-[4px] ">
              <h5 className="text-gray-600">Basic Information</h5>
            </div>
            <div className=" gap-[4px] ">
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
                  <form className="flex gap-10 w-full">
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
                        value={bedType}
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
                        <option value="Double Bed(king size)">
                          Double Bed(king size)
                        </option>
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
                      {/* promotion price */}
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

                {/* main Image */}
                <div
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="flex flex-col"
                >
                  <div className="flex w-[90%] justify-start ">
                    <p>main Image *</p>
                  </div>
                  <div className=" bg-slate-400 h-[240px] w-[240px] flex items-center justify-start gap-5 flex-wrap rounded-xl relative">
                    {img && (
                      <div className="absolute h-full w-full bg-gray-200 rounded-[4px] flex justify-center items-center z-20">
                        <img
                          src={
                            typeof img == "object"
                              ? URL.createObjectURL(img)
                              : img
                          }
                          className="rounded-[4px] object-cover h-[144px]"
                        />
                        <button
                          onClick={(e) => {
                            fileInputRef.current.value = "";
                            e.preventDefault();
                            setImg("");
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
                          setImg(e.target.files[0]);
                        }}
                        name="main_img"
                        className=" hidden w-full h-full z-20"
                      />
                    </label>
                  </div>
                </div>
                {/* end main Image */}

                {/* sub img */}
                <div
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className=" flex flex-col mb-5"
                >
                  <div className="flex w-[90%] justify-start mt-5 ">
                    <p>Image Gallery (At least 4 pictures)*</p>
                  </div>
                  <div className=" w-[90%] flex items-start justify-start pt-3 gap-5 flex-wrap rounded-xl">

                    {imgSub.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className="w-[167px] h-[167px]  bg-bg flex justify-center items-center relative p-0.5 "
                        >
                          <img
                            src={typeof v == "object"
                              ? URL.createObjectURL(v)
                              : v}
                            alt="รูปดีเทล"
                            className=" h-[100px] object-cover"
                          />
                          <button
                            onClick={() => {
                              setImgsub(imgSub.toSpliced(i, 1));
                            }}
                            className="absolute z-10 -top-[15px] -right-[15px] w-6 h-6 bg-red bg-bg border-2 rounded-full text-white text-md"
                          >
                            <svg
                            width="10"
                            height="10"
                            className="absolute right-[5px] top-[5px] "
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
                        
                      );
                    })}
                    
                    <label className="w-[160px] h-[160px] cursor-pointer  bg-gray-200 flex justify-center items-center overflow-hidden relative rounded-lg">
                      <span className="text-orange-500 body-4  ">
                        <img
                          className="absolute top-[50px] right-[70px]"
                          src={plusimage}
                        ></img>
                        
                        {imgSub.length > 9 ? "Max file upload" : <p className=" absolute top-[80px] right-[30px] text-center">Upload photo</p>}
                        
                      </span>
                      <input
                        type="file"
                        name="sub_img"
                        onChange={(e) => {
                          let images = [...imgSub];
                          for (let i = 0; i < e.target.files.length; i++) {
                            images.push(e.target.files[i]);
                          }
                          setImgsub(images)
                        }}
                        multiple
                        disabled={imgSub.length > 9 ? true : false}
                        className=" hidden w-full h-full z-20"
                      />
                    </label>
                  </div>
                </div>
                <hr />
                {/*end sub img */}
                
                {/* amenity */}
                <div className="flex h-[58px] gap-[4px] mt-5">
                  <h5 className="text-gray-600">Room Amenities</h5>
                </div>
                <div>
                  {/* <Reorder.Group></Reorder.Group> */}
                  {/* <Reorder.Group values={amenities} onReorder={setAmenities}> */}
                  {amenities.map((amenity, index) => (
                    // <Reorder.Item value={amenity}>
                    <div
                      draggable
                      onDragStart={() => {
                        dragItem.current = index;
                      }}
                      onDragEnter={() => {
                        dragOverItem.current = index;
                      }}
                      onDragEnd={() => {
                        handleDrag();
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      key={index}
                      className="relative flex flex-row justify-between mb-5 "
                    >
                      <label className="body-1 font-inter pl-[50px] w-full">
                        <img
                          className="absolute left-[0px]"
                          src={drag}
                          alt="drag"
                        />
                        Amenity *
                        <br />
                        <input
                          value={amenity}
                          onChange={(e) =>
                            handleAmenityChange(index, e.target.value)
                          }
                          className="rounded-lg w-full h-[48px] gap-[4px] mb-5 border border-1 px-[16px] py-[12px]"
                          type="text"
                        />
                      </label>

                      <button
                        onClick={() => removeAmenity(index)}
                        className="button-ghost flex items-start p-6"
                      >
                        Delete
                      </button>
                    </div>
                    // </Reorder.Item>
                  ))}
                  {/* </Reorder.Group> */}
                </div>
                <div className="w-[277px] h-[48px] flex items-center justify-center">
                  <button
                    type="button"
                    onClick={addAmenity}
                    className="button-secondary h-[48px] flex items-center"
                  >
                    + Add Amenity
                  </button>
                </div>
              </form>
            </div>
          </main>
        </form>

        <div className="flex justify-end mt-[20px]">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="px-[4px] py-[8px] gap-[8px] text-gray-700 button-ghost"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Delete Room
          </button>
          <dialog id="my_modal_3" className="modal p-[24px] g-[24px]">
            <div className="modal-box rounded ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h5 className="font-bold text-lg ">Delete Room</h5>
              <hr />
              <p className="py-4">
                Are you sure you want to delete this room? 
              </p>
              <div className="flex justify-end gap-[16px]">
                <button 
                onClick={deleteRoom}
                className="button-secondary w-[220px] h-[48px] flex items-center">
                  Yes,I want to delete{" "}
                </button>
                <form method="dialog">
                <button className="button-primary">No,I don't</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </content>
    </>
  );
}
export default UpdatingRoom;
