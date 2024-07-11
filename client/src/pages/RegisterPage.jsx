import { useState } from "react";
import { useAuth } from "../contexts/authentication";
import background from "../assets/images/register/background.png";
import { Formik, Form, Field } from "formik";
import { registerSchema } from "../schemas/index";
import alert from "../assets/icons/input/alert.svg";

export const RegisterPage = () => {
  const { register, state } = useAuth();

  const initialValues = {
    username: "",
    password: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const onSubmit = (values, actions) => {
    register(values);
    console.log(state);
  };

  return (
    <div className="flex md:justify-center md:items-center min-h-[calc(100dvh-48px)] shadow-shadow relative">
      <img
        src={background}
        alt="register background"
        className="absolute top-0 -z-10 h-full w-full object-cover brightness-50"
      />
      <div className="flex flex-col h-full py-10 px-4 gap-10 w-full min-h-[100dvh] md:min-h-0 md:rounded-[4px] transition-all duration-1000 min-w-[320px] lg:p-20 md:max-w-[1092px] bg-bg">
        <h3 className="lg:text-[68px] lg:leading-[85px] ">Register</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
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
                      type="text"
                      name="username"
                      placeholder="Enter your username"
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
              <button type="submit" className="button-primary leading-4">
                {state.loading ? (
                  <span className="loading loading-spinner loading-lg"></span>
                ) : (
                  "Register"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
