import { useEffect, useState } from "react";
import countries from "../BookingRoom/CountriesData";
import { useAuth } from "../../contexts/authentication.jsx";
import axios from "axios";


function BookingForm() {
 
  const { state, apiUrl, apiPort } = useAuth();
  const [basicInformation, setBasicInformation] = useState({});
  const getUserInfo = async () => {
    try {
      const result = await axios.get(
        `${apiUrl}:${apiPort}/users/${state.user.id}`
      );
      const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
      const formattedDate = new Date(result.data.data.date_of_birth).toLocaleDateString('en-US', options);
      setBasicInformation({
        ...basicInformation,
        firstName: `${result.data.data.firstname}`,
        lastName: `${result.data.data.lastname}`,
        email: `${result.data.data.email}`,
        phoneNumber: `${result.data.data.phonenumber}`,
        dateOfBirth: `${formattedDate}`,
        country: `${result.data.data.country}`,
      });
    } catch (err) {
      console.error("ERROR: ", err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  
  return (
    <form className="flex flex-col p-5 gap-5 w-full">
      <p className="text-[1.3rem] text-slate-400 font-bold">
        Basic Information
      </p>
      <label className="flex flex-col gap-1">
        First Name
        <input
          type="text"
          value={basicInformation.firstName}
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Last Name
        <input
          type="text"
          value={basicInformation.lastName}
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Email
        <input
          type="text"
          value={basicInformation.email}
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Phone number
        <input
          type="text"
          value={basicInformation.phoneNumber}
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Date of Birth
        <input
          type="text"
          value={basicInformation.dateOfBirth}
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Country
        <select
          value={basicInformation.country}
          className="p-2 rounded-md border border-slate-200"
        >
          <option value="none">--please select your country--</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default BookingForm;
