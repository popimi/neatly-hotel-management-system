import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import AuthenticatedNavBar from '../components/AuthenticatedNavBar'

const AuthenticatedUser = () => {
  return (
    <div className="App">
      <AuthenticatedNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AuthenticatedUser;
