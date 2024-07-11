import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string().min(3).max(16).required("Please enter username"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  phoneNumber: Yup.string().max(10).required("Please enter phone number"),
  firstName: Yup.string().min(3).required("Please enter firstname"),
  lastName: Yup.string().min(3).required("Please enter lastname"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),
});

export const loginSchema = Yup.object({
  usernameOrEmail: Yup.string().required("Please enter username or email"),
  password: Yup.string().max(36).required("Please enter Password"),
});
