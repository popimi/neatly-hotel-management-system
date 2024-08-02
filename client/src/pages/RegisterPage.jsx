import { useAuth } from "../contexts/authentication";
import background from "../assets/images/register/background.png";
import { Formik, Form, Field } from "formik";
import alert from "../assets/icons/input/alert.svg";
import { registerSchema } from "../schemas";
import { useEffect, useState } from "react";

export const RegisterPage = () => {
  const { register, state, apiUrl, apiPort } = useAuth();
  const [show, setShow] = useState(false);

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
    register(values);
  };

  return (
    <div className="flex md:justify-center md:items-center min-h-[calc(100dvh-48px)] lg:min-h-[calc(100dvh-100px)] shadow-shadow relative">
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
          validationSchema={registerSchema({ apiUrl, apiPort })}
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
                disabled={
                  (errors.firstName && touched) ||
                  (errors.lastName && touched) ||
                  (errors.username && touched) ||
                  (errors.email && touched) ||
                  (errors.password && touched) ||
                  (errors.phoneNumber && touched)
                    ? true
                    : false
                }
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
