import axios from "axios";
import * as Yup from "yup";

const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex check valid email type

export const registerSchema = ({ apiUrl, apiPort }) =>
  Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters long")
      .max(16, "Username cannot be more than 16 characters long")
      .required("Please enter username")
      .test(
        "check-username-availability",
        "Username is already taken",
        async (value) => {
          try {
            if (String(value).length > 2) {
              const response = await axios.get(
                `${apiUrl}:${apiPort}/check-available?checkColumn=username&checkValue=${value.toLowerCase()}`
              );
              return response.data.data;
            }
          } catch (error) {
            console.error(`Error checking username availability: ${error}`);
            return false;
          }
        }
      ),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .required("Please enter password"),
    phoneNumber: Yup.string()
      .matches(/^(\+66|0)/, "Phone number must start with +66 or 0")
      .min(9, "must be at least 9 characters long")
      .max(12, "cannot be more than 12 characters long")
      .required("Please enter phone number"),
    firstName: Yup.string().min(3).required("Please enter first name"),
    lastName: Yup.string().min(3).required("Please enter last name"),
    email: Yup.string()
      .email("Please enter valid email")
      .matches(emailValid, "Please enter valid email")
      .required("Please enter your email")
      .test(
        "check-email-availability",
        "Email is already taken",
        async (value) => {
          if (!emailValid.test(value)) {
            return false;
          }
          try {
            const response = await axios.get(
              `${apiUrl}:${apiPort}/check-available?checkColumn=email&checkValue=${value.toLowerCase()}`
            );
            return response.data.data;
          } catch (error) {
            console.error(`Error checking email availability: ${error}`);
            return false;
          }
        }
      ),
  });

export const loginSchema = ({ apiUrl, apiPort, type, setType }) =>
  Yup.object({
    usernameOrEmail: Yup.string()
      .required("enter username or email")
      .test(
        "check-username-or-email-correct",
        `${type} incorrect`,
        async (value) => {
          try {
            emailValid.test(value) ? setType("email") : setType("username");
            if (String(value).length > 2) {
              const response = await axios.get(
                `${apiUrl}:${apiPort}/check-available?checkColumn=${type}&checkValue=${value.toLowerCase()}`
              );
              return !response.data.data;
            }
          } catch (error) {
            console.error(`Error checking username availability: ${error}`);
            return false;
          }
        }
      ),
    password: Yup.string().max(36).required("enter password"),
  });
