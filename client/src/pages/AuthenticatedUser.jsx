import React from "react";
import { Route, Routes } from "react-router-dom";

const AuthenticatedUser = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element />
      </Routes>
    </div>
  );
};

export default AuthenticatedUser;
