import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AuthenticatedNavBar from "../components/AuthenticatedNavBar";

const AuthenticatedUser = () => {
  return (
    <div>
      <AuthenticatedNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default AuthenticatedUser;
