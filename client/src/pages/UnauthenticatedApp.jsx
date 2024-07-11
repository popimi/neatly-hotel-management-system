import "../App.css";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import NavBar from "../components/NavBar";
import RoomDetailPage from "./RoomDetailPage";

function UnauthenticatedApp() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={< RoomDetailPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default UnauthenticatedApp;
