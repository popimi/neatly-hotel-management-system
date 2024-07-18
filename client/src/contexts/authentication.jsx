import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const navigate = useNavigate(); // navigate
  const apiUrl = import.meta.env.VITE_API_URL; // api url
  const apiPort = import.meta.env.VITE_API_PORT; // api port
  const isAuthenticated = Boolean(localStorage.getItem("token")); // check has token

  //decode token to localstorage
  const getDataFormToken = () => {
    const isAuth = Boolean(localStorage.getItem("token"));
    if (isAuth) {
      return jwtDecode(localStorage.getItem("token"));
    } else return null;
  };

  const [state, setState] = useState({
    loading: null,
    error: null,
    user: getDataFormToken(),
  });

  //feature login
  const login = async (userLoginData) => {
    const data = {
      username: userLoginData.usernameOrEmail,
      password: userLoginData.password,
    };
    try {
      setState({ ...state, loading: true });
      console.log(state);
      const result = await axios.post(`${apiUrl}:${apiPort}/login`, data);
      const token = result.data.token; //get token
      localStorage.setItem("token", token); //store token in local storage
      const userDataFromToken = jwtDecode(token); // decode token
      setState({
        ...state,
        user: userDataFromToken,
        loading: false,
        error: null,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      setState({ ...state, loading: false, error: error });
    }
  };

  //feature register
  const register = async (userRegisterData) => {
    const newUser = {
      username: userRegisterData.username,
      password: userRegisterData.password,
      firstname: userRegisterData.firstName,
      lastname: userRegisterData.lastname,
      email: userRegisterData.email,
      phonenumber: userRegisterData.phoneNumber,
    };
    try {
      setState({ ...state, loading: true });
      await axios.post(`${apiUrl}:${apiPort}/register`, newUser);
      setState({ ...state, loading: false });
      navigate("/login");
    } catch (err) {
      setState({ ...state, loading: false, error: err });
    }
  };

  //feature logout
  const logout = () => {
    try {
      localStorage.removeItem("token");
      setState({ ...state, user: null });
      navigate("/");
    } catch (error) {
      setState({ ...state, error: error });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        register,
        isAuthenticated,
        navigate,
        apiUrl,
        apiPort,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
