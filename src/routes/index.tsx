import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Community from "../pages/Community";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/community" element={<Community/>}/>
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default MainRoutes;
