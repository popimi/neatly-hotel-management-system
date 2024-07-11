import { useState, useEffect } from "react";
import { countries } from "../../country/CountriesData.js";
import axios from "axios";
import { useParams } from "react-router-dom";
export function ProfilePage() {
  // const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState();
  const { id } = useParams();

  // const profile = async () => {
  //   try {
  //     await axios.get(`http://localhost:4000/users/${id}`);
  //     setUsers(data.lastname);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   profile();
  // }, []);

  const handleFileChange = (e) => {
    console.log(e.target.files);
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="w-screen h-[1110px] overflow-x-hidden sm:w-full sm:h-[1110px] sm:overflow-x-hidden md:max-2xl:w-screen md:max-2xl:h-[1187px] md:max-2xl:bg-bg 2xl:bg-bg relative">
      <div
        className="absolute w-[373px] h-[1062px] pt-[40px] pr-[16px] pb-[40px] pl-[16px] leading-[55px] gap-6 md:max-2xl:w-[837px] md:max-2xl:h-[840px] 2xl:h-[840px] 
        md:max-2xl:top-20 md:max-2xl:left-[255px] md:max-2xl:gap-[60px] md:max-2xl:rounded-md md:max-2xl:p-0 2xl:top-20 2xl:left-[20%] 2xl:w-[930px] 2xl:p-0 "
      >
        <div className="md:max-2xl:w-[837px] flex md:max-2xl:items-center md:max-2xl:justify-between 2xl:items-center 2xl:justify-between 2xl:w-[930px]">
          <h3 className="w-[341px] h-[55px] text-[44px] font-medium text-green-800 ">
            Profile
          </h3>
          <button
            className="ld:max-2xl:flex lg:max-2xl:justify-center lg:max-2xl:items-center lg:max-2xl:w-[176px] lg:max-2xl:h-12 lg:max-2xl:gap-[10px] 
           2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-[176px] 2xl:h-12 2xl:gap-[10px] bg-orange-600 mt-4 md:flex hover:bg-orange-700 hidden"
          >
            <p className="text-white text-[16px] leading-4 font-semibold text-center">
              Update Profile
            </p>
          </button>
        </div>

        <div className="md:max-2xl:w-[837px] md:max-2xl:h-[695px] 2xl:w-[930px] 2xl:h-[695px]">
          <h5 className="font-semibold text-gray-600 leading-[30px] mt-10 mb-10">
            Basic Information
          </h5>
          <form className="w-[341px] mb-5 gap-[24px] flex flex-col">
            <div className="w-full h-[76px] gap-[4px] md:w-[341px] lg:max-2xl:w-[837px] 2xl:w-[930px]">
              <div className="w-[341px] h-[24px]">
                <label>Full Name</label>
              </div>
              <div className="w-[341px] h-[48px] pt-[12px] pr-[16px] pb-[12px] gap-[8px] md:max-2xl:w-[837px] 2xl:w-[930px]">
                <input
                  type="text"
                  className="w-[341px] h-[48px] border border-gray-400 lg:max-2xl:w-[837px] 2xl:w-[930px] md:w-[341px]"
                  // value={users}
                  // onChange={}
                />
              </div>
            </div>
            <div className="w-[341px] h-[76px] gap-[4px] lg:max-2xl:hidden 2xl:hidden">
              <div className="w-[341px] h-[24px]">
                <label>Tel</label>
              </div>
              <div className="w-[341px] h-[48px] pt-[12px] pr-[16px] pb-[12px] gap-[8px]">
                <input
                  type="tel"
                  className="w-[341px] h-[48px] border border-gray-400 "
                  // value={tel}
                />
              </div>
            </div>
            <div className="flex md:max-2xl:w-[837px] md:max-2x:h-[76px] justify-between 2xl:w-[930px] 2x:h-[76px]">
              <div className="w-[341px] h-[76px] lg:max-2xl:w-[407px]">
                <div className="h-[24px]">
                  <label>Email</label>
                </div>
                <div className="h-[48px] pt-[12px] pr-[16px] pb-[12px]">
                  <input
                    type="email"
                    className="w-[341px] h-[48px] border border-gray-400 lg:max-2xl:w-[407px] 2xl:w-[453px] md:w-[341px]"
                  />
                </div>
              </div>
              <div className="w-[341px] h-[76px] lg:max-2xl:w-[407px] lg:max-2xl:flex lg:max-2xl:flex-col 2xl:flex 2xl:flex-col 2xl:w-[453px] hidden">
                <div className="h-[24px]">
                  <label>Tel</label>
                </div>
                <div className="h-[48px] pt-[12px] pr-[16px] pb-[12px]">
                  <input
                    type="tel"
                    className="w-[341px] h-[48px] border border-gray-400 lg:max-2xl:w-[407px] 2xl:w-[453px]"
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-[76px] gap-[4px] ">
              <div className="w-[341px] h-[24px]">
                <label>Date of Birth</label>
              </div>
              <div className="w-[341px] h-[48px] pt-[12px] pr-[16px] pb-[12px] gap-[8px]">
                <input
                  type="date"
                  className="w-[341px] h-[48px] border border-gray-400"
                />
              </div>
            </div>
            <div className="w-full h-[76px] gap-[4px] ">
              <div className="w-[341px] h-[24px]">
                <label htmlFor="country">Country</label>
              </div>
              <div className="relative w-[341px] h-[48px] pt-[12px] pr-[16px] pb-[12px] gap-[8px]">
                <select
                  id="country"
                  name="country"
                  className="w-[341px] h-[48px] border border-gray-400 pl-2"
                >
                  <option value="null">---</option>
                  {countries.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </select>
              </div>
            </div>
          </form>
          <div className="w-[341px] h-[277px] border border-gray-300 pt-10 mt-5 flex flex-col justify-between md:max-2xl:m-0 2xl:m-0">
            <h5 className="text-gray-600 leading-[30px] font-semibold ">
              Profile Picture
            </h5>
            <label className="w-[167px] h-[167px] rounded-[1px] bg-gray-200 relative">
              <input
                type="file"
                name="myImage"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
              <img src={img} className="w-[167px] h-[167px] rounded-[1px] " />
              <div className="absolute right-[-10px] top-[-10px] rounded-[99px] bg-red w-6 h-6 flex justify-center items-center">
                <button className="text-white" onClick={() => setImg(null)}>
                  X
                </button>
              </div>
            </label>
          </div>
          <button className="w-[341px] h-12 bg-orange-600 hover:bg-orange-700 mt-5 lg:max-2xl:hidden 2xl:hidden">
            <p className="text-white text-[16px] leading-4 font-semibold text-center">
              Update Profile
            </p>
          </button>
        </div>

        {/* <div className="w-[341px] h-[277px] border border-gray-300 pt-10 mt-5 flex flex-col justify-between md:max-2xl:hidden 2xl:hidden">
          <h5 className="text-gray-600 leading-[30px] font-semibold ">
            Profile Picture
          </h5>
          <label className="w-[167px] h-[167px] rounded-[1px] bg-gray-200 relative">
            <input
              type="file"
              name="myImage"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="hidden"
            />
            <img src={img} className="w-[167px] h-[167px] rounded-[1px] " />
            <div className="absolute right-[-10px] top-[-10px] rounded-[99px] bg-red w-6 h-6 flex justify-center items-center">
              <button className="text-white" onClick={() => setImg(null)}>
                X
              </button>
            </div>
          </label>
        </div> */}
      </div>
    </div>
  );
}
