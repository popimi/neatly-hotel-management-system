import select from "../../assets/icons/CreateRoom/select.png";
import { useState, useRef } from "react";
import plusimage from "../../assets/icons/CreateRoom/plus.png";
import drag from "../../assets/icons/CreateRoom/drag.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import ValidCustomer from "./Alert";

function CreateNewRoom() {
  const { apiUrl, state } = useAuth();
  const [isChecked, setIsChecked] = useState(false);
  const [img, setImg] = useState("");
  const [imgSub, setImgsub] = useState([]);
  const [roomType, setRoomType] = useState("");
  const [roomSize, setRoomSize] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [guest, setGuest] = useState("");
  const [bedType, setBedtype] = useState("");
  const [promotion, setPromotion] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertinfo,setAlertInfo] = useState({message:"",type:""})
  const [Open,setOpen] =useState(false)
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleClick =()=>{
      setOpen(false)
  }

  console.log(isChecked);
  const addAmenity = (e) => {
    e.preventDefault()
    setAmenities([...amenities, ""]);
  };

  // Function to handle input change in amenity fields
  const handleAmenityChange = (index, value) => {
    setAmenities(amenities.toSpliced(index, 1, value));
  };

  // Function to remove an amenity input
  const removeAmenity = (e,id) => {
    e.preventDefault()
    if (amenities.length) {
      const updatedAmenities = amenities.filter(
        (amenity, index) => index !== id
      );
      setAmenities(updatedAmenities);
    }
  };

  // const initialValues = {
  //   type: "",
  //   size: "",
  //   bed_type: "",
  //   guests: "",
  //   price_per_night: "",
  //   description: "",
  // };
  console.log("img", imgSub);

  const handleSubmit = async () => {
    setLoading(true);
    
    let create;
    try {
      if (price.length > 6 || !price) {
        
        setLoading(false);
        setAlertInfo({
          message:"Please insert price not more than 5 digits or not empty",
          type:"alert-error"})
          setOpen(true)
          setTimeout(() => {
            setOpen(false)
          }, 3000);
         return
      }

      if (guest === "") {
        
        setLoading(false);
        setAlertInfo({
          message:"Please choose number of guests",
          type:"alert-error"})
          setOpen(true)
          setTimeout(() => {
            setOpen(false)
          }, 3000);
         return
      }
      if (!roomSize) {

        setLoading(false);
        setAlertInfo({
          message:"Please insert room size",
          type:"alert-error"})
          setOpen(true)
          setTimeout(() => {
            setOpen(false)
          }, 3000);
        return 
      }
      if (!roomType) {
        setLoading(false);
        setAlertInfo({
          message:"Please insert roomtype",
          type:"alert-error"})
          setOpen(true)
          setTimeout(() => {
            setOpen(false)
          }, 3000);
        return 
      }
      if (bedType === "") {
        setLoading(false);
        setAlertInfo({
          message:"Please choose bedtype",
          type:"alert-error"})
          setOpen(true)
          setTimeout(() => {
            setOpen(false)
          }, 3000);
        return 
      }
      if (imgSub.length <= 3) {
        setLoading(false);
        setAlertInfo({
          message:"Please insert photo at least 4 photos",
          type:"alert-error"})
          setOpen(true)
          setTimeout(() => {
            setOpen(false)
          }, 3000);
        return 
      }

      const postData = new FormData();
      postData.append("type", roomType);
      postData.append("size", roomSize);
      postData.append("bed_type", bedType);
      postData.append("guests", guest);
      postData.append("price_per_night", price);
      postData.append("price_promotion", promotion);
      postData.append("promotion_status", isChecked);
      postData.append("description", description);
      postData.append("created_by", state.user.id);
      postData.append("main_image", img);

      for (let data of amenities) {
        postData.append("amenity", data);
      }

      for (let imgsSub of imgSub) {
        postData.append("image_gallery", imgsSub);
      }

      create = await axios.post(
        `${apiUrl}/admin/createroom`,

        postData,
        //   {
        //   type: roomType,
        //   size: roomSize,
        //   bed_type: bedType,
        //   guests: guest,
        //   price_per_night: price,
        //   price_promotion: promotion,
        //   promotion_status:isChecked,
        //   description: description,
        //   created_by: state.user.id,
        //   amenity: amenities,
        //   main_image:img,
        //   image_gallery:imgSub
        // },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setLoading(false);
      setOpen(true)
      setAlertInfo({
        message:"Successfully Create",
        type:"alert-success"})
      navigate("/property");

    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
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
  // const dragItem = useRef(0)
  // const dragOverItem = useRef(0)
  // const handleDrag =()=>{
  //   console.log("hi");
  //   const amenityClone= [...amenities]
  //   const temp = amenityClone[dragItem.current]
  //   const temp2 = amenityClone[dragOverItem.current]

  //   amenityClone[dragItem.current] =temp2
  //   amenityClone[dragOverItem.current]=temp
  //   setAmenities(amenityClone)
  // }

  const submit = (e) => {
    e.preventDefault();
    // setLoading(true)
    handleSubmit();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
    {Open&&
      <ValidCustomer 
      alert={alertinfo}
      handleClick={handleClick}
      />}
      {loading && (
        <span className="loading loading-dots loading-lg absolute top-[150px] right-[600px]"></span>
      )}
      <body className="flex flex-1 flex-col bg-gray-100 ">
        <nav className="flex items-center justify-between  bg-white h-[80px] py-[16px] px-[60px] ">
          <div>
            <h5>Create New Room</h5>
          </div>
          <div className="flex ">
            <Link to="/property">
              <button
                className="flex items-center button-secondary  text-orange-500 align-middle w-[116px] h-[48px] 
            px-[32px] py-[16px] 
            border border-1 border-orange-500 rounded mr-5"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex items-center align-middle button-primary w-[116px] h-[48px] 
            px-[32px] py-[16px] border border-1"
            >
              Create
            </button>
          </div>
        </nav>
        <div className="bg-gray-100 h-fit p-10">
          <div>
            <main className="bg-white  gap-[40px] pt-[40px] pr-[80px] pb-[60px] pl-[80px]">
              <div className="w-[880px] h-[58px] gap-[4px] ">
                <h5 className="text-gray-600">Basic Information</h5>
              </div>
              <div className="  gap-[4px] ">
                <form>
                  <div className="mb-5">
                    <label>
                      Room type *
                      <br />
                      <input
                        value={roomType}
                        type="text"
                        name="roomType"
                        onChange={(e) => {
                          setRoomType(e.target.value);
                        }}
                        className="mb-10 rounded w-full h-[48px] gap-[4px] border border-1 px-[16px] py-[12px]"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex mb-5">
                    <form onSubmit={submit} className="flex gap-10 w-full">
                      <label className="body-1 font-inter flex-1">
                        Room size (sqm)*
                        <br />
                        <input
                          value={roomSize}
                          type="text"
                          name="RoomSize"
                          onChange={(e) => {
                            setRoomSize(e.target.value);
                          }}
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
                          className=" appearance-none w-full rounded h-[48px] border border-1 pl-[16px]"
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

                  {/* main Image */}
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
                              src={
                                typeof imgSub == "object"
                                  ? URL.createObjectURL(v)
                                  : v
                              }
                              className=" h-[100px] object-cover"
                            />
                            <button
                              onClick={(e) => {
                                e.preventDefault()
                                setImgsub(imgSub.toSpliced(i, 1));
                              }}
                              className="absolute flex justify-center items-center z-10 -top-1 -right-1 w-6 h-6 bg-red rounded-full"
                            >
                              <svg
                                width="10"
                                height="10"
                                className="absolute right-[7px] top-[7px] bg-red"
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
                      <label className="w-[167px] h-[167px] cursor-pointer rounded-[8px]  bg-gray-200 flex justify-center items-center overflow-hidden relative">
                        <span className="text-orange-500 body-4  ">
                          <img
                            className="absolute top-[50px] right-[70px]"
                            src={plusimage}
                          ></img>

                          {imgSub.length > 9 ? (
                            "Max file upload"
                          ) : (
                            <p className=" absolute top-[80px] right-[30px] text-center">
                              Upload photo
                            </p>
                          )}
                        </span>
                        <input
                          type="file"
                          name="sub_img"
                          onChange={(e) => {
                            let images = [...imgSub];
                            for (let i = 0; i < e.target.files.length; i++) {
                              images.push(e.target.files[i]);
                            }
                            setImgsub(images);
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
                  {amenities.map((amenity, index) => (
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
                      className="relative flex flex-row justify-between mb-5"
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
                        onClick={(e) => removeAmenity(e,index)}
                        className="button-ghost flex items-start p-6"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
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
          </div>
        </div>
      </body>
    </>
  );
}
export default CreateNewRoom;
