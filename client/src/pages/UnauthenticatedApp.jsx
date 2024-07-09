import "../App.css";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
