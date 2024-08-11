import { useAuth } from "../contexts/authentication";
import background from "../assets/images/register/background.png";
import { Formik, Form, Field } from "formik";
import alert from "../assets/icons/input/alert.svg";
import { registerSchema } from "../schemas";
import { useEffect, useState } from "react";

export const RegisterPage = () => {
  const { register, state, apiUrl } = useAuth();
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 10);
  }, []);

  const initialValues = {
    username: "",
    password: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const onSubmit = (values) => {
    register(values, setStatus, setShowStatus);
  };

  return (
    <div className="flex md:justify-center md:items-center min-h-[calc(100dvh-48px)] lg:min-h-[calc(100dvh-100px)] shadow-shadow relative">
      {status && (
        <div
          className={`absolute w-fit left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 z-10 ${
            showStatus
              ? " opacity-100 -translate-y-52"
              : "-translate-y-72 opacity-0 "
          }`}
        >
          <div
            className={`${
              !state.loading && state.error
                ? "bg-red"
                : state.error == null && !state.loading
                ? "bg-emerald-400"
                : "bg-bg"
            } px-12 py-4 min-w-[310px] transition-all duration-1000 flex flex-col items-center gap-10 rounded-lg`}
          >
            {state.loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : state.error ? (
              <svg
                width="40"
                height="40"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3996 6.99961C13.3996 10.5342 10.5342 13.3996 6.99961 13.3996C3.46499 13.3996 0.599609 10.5342 0.599609 6.99961C0.599609 3.46499 3.46499 0.599609 6.99961 0.599609C10.5342 0.599609 13.3996 3.46499 13.3996 6.99961ZM7.79961 10.1996C7.79961 10.6414 7.44144 10.9996 6.99961 10.9996C6.55778 10.9996 6.19961 10.6414 6.19961 10.1996C6.19961 9.75778 6.55778 9.39961 6.99961 9.39961C7.44144 9.39961 7.79961 9.75778 7.79961 10.1996ZM6.99961 2.99961C6.55778 2.99961 6.19961 3.35778 6.19961 3.79961V6.99961C6.19961 7.44144 6.55778 7.79961 6.99961 7.79961C7.44144 7.79961 7.79961 7.44144 7.79961 6.99961V3.79961C7.79961 3.35778 7.44144 2.99961 6.99961 2.99961Z"
                  fill="#B61515"
                />
              </svg>
            ) : (
              <svg
                className="svg-icon"
                style={{
                  width: "40",
                  height: "40",
                  verticalAlign: "middle",
                  fill: "currentColor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h1024v1024H0V0z" fill="#202425" opacity=".01" />
                <path
                  d="M955.733333 512c0 245.077333-198.656 443.733333-443.733333 443.733333S68.266667 757.077333 68.266667 512 266.922667 68.266667 512 68.266667s443.733333 198.656 443.733333 443.733333z"
                  fill="#11AA66"
                />
                <path
                  d="M512 102.4C285.7984 102.4 102.4 285.7984 102.4 512s183.3984 409.6 409.6 409.6 409.6-183.3984 409.6-409.6S738.2016 102.4 512 102.4zM34.133333 512C34.133333 248.081067 248.081067 34.133333 512 34.133333s477.866667 213.947733 477.866667 477.866667-213.947733 477.866667-477.866667 477.866667S34.133333 775.918933 34.133333 512z"
                  fill="#11AA66"
                />
                <path
                  d="M787.114667 339.285333a51.2 51.2 0 0 1 0 72.362667l-307.2 307.2a51.2 51.2 0 0 1-72.362667 0l-170.666667-170.666667a51.2 51.2 0 0 1 72.362667-72.362666L443.733333 610.235733l271.018667-271.018666a51.2 51.2 0 0 1 72.362667 0z"
                  fill="#FFFFFF"
                />
              </svg>
            )}
            <h5
              className={`text-${
                !state.loading && state.error
                  ? "white"
                  : state.error == null && !state.loading
                  ? "white"
                  : "[#323640]"
              }`}
            >
              {state.loading
                ? "Waiting for register"
                : state.error
                ? "Failed to register"
                : "Register Successfully"}
            </h5>
          </div>
        </div>
      )}
      <img
        src={background}
        alt="register background"
        className="absolute top-0 -z-10 h-full w-full object-cover brightness-50"
      />
      <div
        className={`flex flex-col h-full py-10 px-4 gap-10 w-full min-h-[100dvh] 
          md:min-h-0 md:rounded-[4px] transition-all duration-1000 min-w-[320px] 
          lg:p-20 md:max-w-[1092px] bg-bg ${
            show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
          }`}
      >
        <h3 className="lg:text-[68px] lg:leading-[85px] ">Register</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema({ apiUrl })}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form className="flex flex-col gap-6 lg:gap-10 transition-all duration-1000">
              <h5 className="text-gray-600 w-full">Basic Infomation</h5>
              <section className="flex w-full flex-wrap gap-6 lg:gap-10 transition-all duration-1000">
                <label className="relative flex flex-col flex-1 min-w-[288px] gap-1 ">
                  <p className="body-1 text-gray-900">
                    First Name
                    {errors.firstName && touched.firstName && (
                      <span className="body-2 text-red">
                        {" "}
                        ({errors.firstName})
                      </span>
                    )}
                  </p>
                  <div className="relative">
                    <Field
                      className={`w-full px-4 py-3 duration-1000 outline-none leading-4 border border-gray-400 rounded-[4px] focus:border-orange-500 ${
                        errors.firstName && touched.firstName && "border-red"
                      }`}
                      type="text"
                      name="firstName"
                      placeholder="Enter your firstname"
                      onChange={(e) => {
                        const newValue = e.target.value.replace(/\s+/g, "");
                        setFieldValue("firstName", newValue);
                      }}
                    />
                    {errors.firstName && touched.firstName && (
                      <img
                        className="absolute w-4 h-4 right-4 top-4 p-[1.6px]"
                        src={alert}
                      />
                    )}
                  </div>
                </label>
                <label className="flex flex-col flex-1 min-w-[288px] gap-1 ">
                  <p className="body-1 text-gray-900">
                    Last Name
                    {errors.lastName && touched.lastName && (
                      <span className="body-2 text-red">
                        {" "}
                        ({errors.lastName})
                      </span>
                    )}
                  </p>
                  <div className="relative">
                    <Field
                      className={`w-full px-4 py-3 duration-1000 outline-none leading-4 border border-gray-400 rounded-[4px] focus:border-orange-500 ${
                        errors.lastName && touched.lastName && "border-red"
                      }`}
                      type="text"
                      name="lastName"
                      placeholder="Enter your Lastname"
                      onChange={(e) => {
                        const newValue = e.target.value.replace(/\s+/g, "");
                        setFieldValue("lastName", newValue);
                      }}
                    />
                    {errors.lastName && touched.lastName && (
                      <img
                        className="absolute w-4 h-4 right-4 top-4 p-[1.6px]"
                        src={alert}
                      />
                    )}
                  </div>
                </label>
              </section>
              <section className="flex w-full flex-wrap gap-6 lg:gap-10 transition-all duration-1000">
                <label className="flex flex-col flex-1 min-w-[288px] gap-1 ">
                  <p className="body-1 text-gray-900">
                    Username
                    {errors.username && touched.username && (
                      <span className="body-2 text-red">
                        {" "}
                        ({errors.username})
                      </span>
                    )}
                  </p>
                  <div className="relative">
                    <Field
                      className={`w-full px-4 py-3 duration-1000 outline-none leading-4 border border-gray-400 rounded-[4px] focus:border-orange-500 ${
                        errors.username && touched.username && "border-red"
                      }`}
                      type="tel"
                      name="username"
                      placeholder="Enter your username"
                      onChange={(e) => {
                        const newValue = e.target.value.replace(/\s+/g, "");
                        setFieldValue("username", newValue);
                      }}
                    />
                    {errors.username && touched.username && (
                      <img
                        className="absolute w-4 h-4 right-4 top-4 p-[1.6px]"
                        src={alert}
                      />
                    )}
                  </div>
                </label>
                <label className="flex flex-col flex-1 min-w-[288px] gap-1 ">
                  <p className="body-1 text-gray-900">
                    Email
                    {errors.email && touched.email && (
                      <span className="body-2 text-red"> ({errors.email})</span>
                    )}
                  </p>
                  <div className="relative">
                    <Field
                      className={`w-full px-4 py-3 duration-1000 outline-none leading-4 border border-gray-400 rounded-[4px] focus:border-orange-500 ${
                        errors.email && touched.email && "border-red"
                      }`}
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      onChange={(e) => {
                        const newValue = e.target.value.replace(/\s+/g, "");
                        setFieldValue("email", newValue);
                      }}
                    />
                    {errors.email && touched.email && (
                      <img
                        className="absolute w-4 h-4 right-4 top-4 p-[1.6px]"
                        src={alert}
                      />
                    )}
                  </div>
                </label>
              </section>
              <section className="flex w-full flex-wrap gap-6 lg:gap-10 transition-all duration-1000">
                <label className="flex flex-col flex-1 min-w-[288px] gap-1 ">
                  <p className="body-1 text-gray-900">
                    Password
                    {errors.password && touched.password && (
                      <span className="body-2 text-red">
                        {" "}
                        ({errors.password})
                      </span>
                    )}
                  </p>
                  <div className="relative">
                    <Field
                      className={`w-full px-4 py-3 duration-1000 outline-none leading-4 border border-gray-400 rounded-[4px] focus:border-orange-500 ${
                        errors.password && touched.password && "border-red"
                      }`}
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      onChange={(e) => {
                        const newValue = e.target.value.replace(/\s+/g, "");
                        setFieldValue("password", newValue);
                      }}
                    />
                    {errors.password && touched.password && (
                      <img
                        className="absolute w-4 h-4 right-4 top-4 p-[1.6px]"
                        src={alert}
                      />
                    )}
                  </div>
                </label>
                <label className="flex flex-col flex-1 min-w-[288px] gap-1 ">
                  <p className="body-1 text-gray-900">
                    Phone Number
                    {errors.phoneNumber && touched.phoneNumber && (
                      <span className="body-2 text-red">
                        {" "}
                        ({errors.phoneNumber})
                      </span>
                    )}
                  </p>
                  <div className="relative">
                    <Field
                      className={`w-full px-4 py-3 duration-1000 outline-none leading-4 border border-gray-400 rounded-[4px] focus:border-orange-500 ${
                        errors.phoneNumber &&
                        touched.phoneNumber &&
                        "border-red"
                      }`}
                      type="tel"
                      name="phoneNumber"
                      maxLength={12}
                      onChange={(e) => {
                        const { value } = e.target;
                        if (/^\+?\d*$/.test(value)) {
                          setFieldValue(
                            "phoneNumber",
                            value.replace(/\s+/g, "")
                          );
                        }
                      }}
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <img
                        className="absolute w-4 h-4 right-4 top-4 p-[1.6px]"
                        src={alert}
                      />
                    )}
                  </div>
                </label>
              </section>
              <button
                type="submit"
                className="button-primary leading-4 h-[48px] flex justify-center items-center md:max-w-[calc(50%-20px)]"
              >
                {!state.loading ? (
                  "Register"
                ) : (
                  <span className=" loading loading-dots loading-lg top-1 " />
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
