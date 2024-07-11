import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });
  
  useEffect(() => {
    console.log(state);
  }, [state]);

  const navigate = useNavigate();

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
      console.log(userDataFromToken);
      setState({ ...state, user: userDataFromToken, loading: false }); //set user on state
      
    } catch (error) {
      setState({ ...state, loading: false, error: error });
    }
    navigate("/");
  };

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
      await axios.post("http://localhost:4000/register", newUser);
      setState({ ...state, loading: false });
      navigate("/login");
    } catch (err) {
      setState({ ...state, loading: false });
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error(error);
      setState({ ...state, error: error });
    }
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));
  let isToken;
  if (isAuthenticated) {
    isToken = jwtDecode(localStorage.getItem("token"));
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        register,
        isAuthenticated,
        isToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
