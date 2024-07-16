import { loginSchema } from "../schemas";
import { Formik, Form, Field } from "formik";
import image from "../assets/images/login/banner.png";
import alert from "../assets/icons/input/alert.svg";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authentication";

export const LoginPage = () => {
  const { login, navigate } = useAuth();
  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
    login(values);
  };

  return (
    <div className="flex flex-row flex-wrap lg:flex-nowrap h-[calc(100dvh-48px)] lg:h-[calc(100dvh-100px)]">
      <figure className="w-full h-full min-w-[320px] lg:max-w-[708px] max-h-[269px] lg:max-h-[calc(100dvh-100px)]">
        <img
          src={image}
          alt="banner login"
          className="max-h-fit h-full w-full object-cover object-[50%_75%]"
        />
      </figure>
      <div className="flex flex-col w-full px-4 py-10 gap-10 min-w-[320px] justify-center items-center">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col justify-center w-full gap-10 max-w-[452px] ">
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
                    placeholder="Enter your password"
                  />
                  {errors.password && touched.password && (
                    <img
                      className="absolute w-4 h-4 right-4 top-4 p-[1.6px]"
                      src={alert}
                    />
                  )}
                </div>
              </label>
              <section className="flex flex-col gap-4">
                <button type="submit" className="button-primary">
                  Login
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
