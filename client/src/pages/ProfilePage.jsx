import { useState, useEffect } from "react";
import { countries } from "../../country/CountriesData.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../contexts/authentication";
export function ProfilePage() {
  const [users, setUsers] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState({});
  const { state, apiPort, apiUrl } = useAuth();
  const { id } = useParams();

  const inputImg = (e) => {
    const file = e.target.files[0]
    setImg(file);
    
  };
  console.log(img);

  const removeImg = (e) => {
    e.preventDefault();
    setImg("");
    // delete img[imgKey];
    // setImg({
    //   ...img,
    // });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const timezoneOffset = 7 * 60;
    const localTime = date.getTime() + timezoneOffset * 60 * 1000;
    const localDate = new Date(localTime);
    return localDate.toISOString().split("T")[0];
  };

  const profile = async () => {
    let result;
    try {
      result = await axios.get(`${apiUrl}:${apiPort}/users/${id}`);
      const data = result.data.data;
      setUsers(data);
      setFirstName(data.firstname);
      setLastName(data.lastname);
      setEmail(data.email);
      setTel(data.phonenumber);
      setBirth(formatDate(data.date_of_birth));
      setImg(data.profile_picture);
      setCountry(data.country);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const edit = async () => {
    try {
      const formData = new FormData();
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("phonenumber", tel);
      formData.append("email", email);
      formData.append("date_of_birth", birth);
      formData.append("country", country);
      formData.append("profile_picture", img);
      console.log(img);

      await axios.put(`${apiUrl}:${apiPort}/users/${id}`, formData
      , 
      {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    edit(id);
  };

  useEffect(() => {
    profile();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="mt-20 mb-[167px]">
        <div className="flex items-center justify-between  lg:justify-between lg:w-[930px]">
          <form
            className="w-[341px] mb-5 gap-[24px] flex flex-col"
            onSubmit={submit}
          >
            <div className=" flex items-center justify-between  lg:justify-between lg:w-[930px]">
              <h3 className="w-[341px] h-[55px] text-[44px] font-medium text-green-800 ">
                Profile
              </h3>
              <button type="submit" className="button-primary hidden lg:flex">
                <p className="text-white text-[16px] leading-4 font-semibold text-center">
                  Update Profile
                </p>
              </button>
            </div>

            <h5 className="font-semibold text-gray-600 leading-[30px] mt-10 mb-10">
              Basic Information
            </h5>
            <div
              div
              className="flex justify-between md:w-[930px]  md:h-[76px]"
            >
              <div className="w-[341px] h-[76px] md:w-[407px]">
                <div className="h-[24px]">
                  <label>Firstname</label>
                </div>
                <div className="h-[48px] pt-[12px] pr-[16px] pb-[12px]">
                  <input
                    type="text"
                    className="w-[341px] h-[48px] border border-gray-400 lg:w-[453px] md:w-[341px] pl-2"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-[341px] h-[76px] lg:flex md:flex-col md:w-[453px] hidden">
                <div className="h-[24px]">
                  <label>Lastname</label>
                </div>
                <div className="h-[48px] pt-[12px] pr-[16px] pb-[12px]">
                  <input
                    type="tel"
                    className="w-[341px] h-[48px] border border-gray-400 md:w-[453px] pl-2"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="w-[341px] h-[76px] gap-[4px] lg:max-2xl:hidden 2xl:hidden">
              <div className="h-[24px]">
                <label>Lastname</label>
              </div>
              <div className="h-[48px] pt-[12px] pr-[16px] pb-[12px]">
                <input
                  type="tel"
                  className="w-[341px] h-[48px] border border-gray-400 lg:max-2xl:w-[407px] 2xl:w-[453px] pl-2"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
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
                  className="w-[341px] h-[48px] border border-gray-400 pl-2"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between md:w-[930px] b md:h-[76px]">
              <div className="w-[341px] h-[76px] md:w-[407px]">
                <div className="h-[24px]">
                  <label>Email</label>
                </div>
                <div className="h-[48px] pt-[12px] pr-[16px] pb-[12px]">
                  <input
                    type="email"
                    className="w-[341px] h-[48px] border border-gray-400  lg:w-[453px] md:w-[341px] pl-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-[341px] h-[76px] lg:flex md:flex-col md:w-[453px] hidden">
                <div className="h-[24px]">
                  <label>Tel</label>
                </div>
                <div className="h-[48px] pt-[12px] pr-[16px] pb-[12px]">
                  <input
                    type="tel"
                    className="w-[341px] h-[48px] border border-gray-400 md:w-[453px] pl-2"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
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
                  className="w-[341px] h-[48px] border border-gray-400 pl-2"
                  placeholder="yyyy-mm-dd"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
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
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="null">---</option>
                  {countries.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="w-[341px] h-[277px] border border-gray-300 pt-10 mt-5 flex flex-col justify-between md:max-2xl:m-0 2xl:m-0">
              <h5 className="text-gray-600 leading-[30px] font-semibold ">
                Profile Picture
              </h5>

              <div className=" bg-slate-400 h-[167px] w-[167px] flex items-center justify-start gap-5 flex-wrap rounded-xl relative">
              {
                  
                 img && (
                    <div  className="absolute h-full w-full bg-green-500 rounded-[4px] flex justify-center items-center z-20">
                      <img
                        src={
                         typeof img === 'object' ? URL.createObjectURL(new Blob([img])) : img
                        }
                        className="rounded-[4px] object-cover w-full h-full"
                      />
                      <button
                        className="absolute flex justify-center items-center z-10 -top-1 -right-1 w-6 h-6 bg-red rounded-full"
                        onClick={(e) => removeImg(e)}
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
                    
                    multiple
                    className=" hidden w-full h-full z-20"
                    onChange={inputImg}
                  />
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-[341px] button-primary lg:hidden"
            >
              <p className="text-white text-[16px] leading-4 font-semibold text-center">
                Update Profile
              </p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
