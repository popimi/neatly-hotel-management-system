import { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import { useAuth } from "../../contexts/authentication.jsx";
import axios from "axios";

function BasicInformation({ handlePrev, handleNext, setFullName }) {
  const [basicInformation, setBasicInformation] = useState({});
  const { state, apiUrl, apiPort } = useAuth();
  const getUserInfo = async () => {
    try {
      const result = await axios.get(`${apiUrl}/users/${state.user.id}`);
      const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
      const formattedDate = new Date(
        result.data.data.date_of_birth
      ).toLocaleDateString("en-US", options);
      setBasicInformation({
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

  const fullName = `${basicInformation.firstName || ""} ${
    basicInformation.lastName || ""
  }`;

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    setFullName(fullName);
  }, [fullName, setFullName]);

  return (
    <section className="box-border lg:pb-10 lg:flex lg:flex-row lg:justify-evenly lg:gap-10 bg-slate-100">
      <div className="flex flex-col lg:gap-10 lg:p-10 rounded-[1px] bg-white lg:w-[calc(50vw-80px)]">
        <BookingForm basicInformation={basicInformation} />
        <section className="hidden lg:flex justify-between py-8 px-4">
          <button className="button-ghost" onClick={handlePrev}>
            Back
          </button>
          <button className="button-primary" onClick={handleNext}>
            Next
          </button>
        </section>
      </div>
      <section className="flex lg:hidden justify-between py-8 px-4 bg-white">
        <button className="button-ghost" onClick={handlePrev}>
          Back
        </button>
        <button className="button-primary" onClick={handleNext}>
          Next
        </button>
      </section>
    </section>
  );
}

export default BasicInformation;
