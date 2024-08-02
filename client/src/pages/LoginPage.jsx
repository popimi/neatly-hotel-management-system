import { loginSchema } from "../schemas";
import { Formik, Form, Field } from "formik";
import image from "../assets/images/login/banner.png";
import alert from "../assets/icons/input/alert.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authentication";
import { useEffect, useState } from "react";

export const LoginPage = () => {
  const { login, apiUrl, apiPort, state } = useAuth();

  const [type, setType] = useState("username");
  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 10);
  }, []);

  const onSubmit = (values, actions) => {
    login(values, setStatus, setShowStatus);
  };

  return (
    <div className="flex flex-row flex-wrap lg:flex-nowrap h-[calc(100dvh-48px)] lg:h-[calc(100dvh-100px)] relative">
      <figure className="w-full h-full min-w-[320px] lg:max-w-[708px] max-h-[269px] lg:max-h-[calc(100dvh-100px)]">
        <img
          src={image}
          alt="banner login"
          className="max-h-fit h-full w-full object-cover object-[50%_75%]"
        />
      </figure>
      {status && (
        <div
          className={`absolute inset-0 flex items-center transition-all duration-1000 justify-center z-10 ${
            showStatus
              ? " opacity-100 -translate-y-20"
              : "-translate-y-40 opacity-0 "
          }`}
        >
          <div
            className={`bg-bg px-12 py-4 transition-all duration-1000 flex flex-col items-center gap-10 rounded-lg`}
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
              <img src="" alt="" />
            )}
            <h5>
              {state.loading
                ? "Waiting for login"
                : state.error
                ? "Failed to login"
                : "Login Successfully"}
            </h5>
          </div>
        </div>
      )}

      <div
        className={` relative flex flex-col w-full px-4 py-10 gap-10 min-w-[320px] duration-1000 justify-center items-center ${
          show ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema({ apiUrl, apiPort, type, setType })}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form className="flex flex-col justify-center w-full gap-10 max-w-[452px]">
              <h3 className="lg:text-[68px] lg:leading-[85px] duration-700">
                Log In
              </h3>

              <label className="flex flex-col flex-1 min-w-[288px] gap-1 ">
                <p className="body-1 text-gray-900">
                  Username or Email
                  {errors.usernameOrEmail && touched.usernameOrEmail && (
                    <span className="body-2 text-red">
                      {" "}
                      ({errors.usernameOrEmail})
                    </span>
                  )}
                </p>
                <div className="relative">
                  <Field
                    className={`w-full px-4 py-3 duration-1000 outline-none leading-4 border border-gray-400 rounded-[4px] focus:border-orange-500 ${
                      errors.usernameOrEmail &&
                      touched.usernameOrEmail &&
                      "border-red"
                    }`}
                    type="text"
                    name="usernameOrEmail"
                    placeholder="Enter your username Or email"
                    onChange={(e) => {
                      const newValue = e.target.value.replace(/\s+/g, "");
                      setFieldValue("usernameOrEmail", newValue);
                    }}
                  />
                  {errors.usernameOrEmail && touched.usernameOrEmail && (
                    <img
                      className="absolute w-4 h-4 right-4 top-4 p-[1.6px]"
                      src={alert}
                    />
                  )}
                </div>
              </label>
              <label className="flex flex-col flex-1 min-w-[288px] gap-1 ">
                <p className="body-1 text-gray-900">
                  Password
                  {errors.password && touched.password && !state.error && (
                    <span className="body-2 text-red">
                      {" "}
                      ({errors.password})
                    </span>
                  )}
                  {state.error !== null && (
                    <span className="body-2 text-red">
                      {" "}
                      {state.error.response.data.message}
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
                    placeholder="Enter your password"
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
              <section className="flex flex-col gap-4 ">
                <button
                  type="submit"
                  className="button-primary overflow-hidden h-[48px] flex items-center justify-center"
                >
                  {!state.loading ? (
                    "Login"
                  ) : (
                    <span className=" loading loading-dots loading-lg top-1 " />
                  )}
                </button>

                <p className="">
                  Don’t have an account yet?
                  <Link to={"/register"} className="button-ghost">
                    Register
                  </Link>
                </p>
              </section>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
