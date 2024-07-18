import { useState } from "react";
import countries from "../BookingRoom/CountriesData";
import {useAuth} from '../../contexts/authentication.jsx';

function BookingForm() {
  const {state} = useAuth();
  console.log(state);
  
  const [basicInformation,setBasicInformation]=useState({
   
  })

  return (
    <form className="flex flex-col p-5 gap-5 w-full">
      <p className="text-[1.3rem] text-slate-400 font-bold">
        Basic Information
      </p>
      <label className="flex flex-col gap-1">
        First Name
        <input
          type="text"
          placeholder="Your full name here"
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Last Name
        <input
          type="text"
          placeholder="Your full name here"
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Email
        <input
          type="text"
          placeholder="Your email here"
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        ID number
        <input
          type="text"
          placeholder="Your ID number here"
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Date of Birth
        <input
          type="date"
          placeholder="Your ID number here"
          className="p-2 rounded-md border border-slate-200"
        />
      </label>
      <label className="flex flex-col gap-1">
        Country
        <select className="p-2 rounded-md border border-slate-200">
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
