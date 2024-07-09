import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  const login = async (userLoginData) => {
    const data = {
      username: userLoginData.usernameOrEmail,
      password: userLoginData.password,
    };
    try {
      setState({ ...state, loading: true });
      const result = await axios.post("http://localhost:4000/login", data);
      const token = result.data.token; //get token
      localStorage.setItem("token", token); //store token in local storage
      const userDataFromToken = jwtDecode(token); // decode token
      setState({ ...state, user: userDataFromToken, loading: false }); //set user on state
    } catch (err) {
      setState({ ...state, loading: false, error: err });
    }
    navigate("/");
  };

  const register = async (userRegisterData) => {
    try {
      await axios.post("http://localhost:4000/register", userRegisterData);
    } catch (err) {
      console.log(err);
      setState({ ...state, error: err });
    }
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });

    navigate("/");
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));
  let isToken;
  if (isAuthenticated) {
    isToken = jwtDecode(localStorage.getItem("token"));
  }

  return (
    <AuthContext.Provider
      value={{ state, login, logout, register, isAuthenticated, isToken }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
