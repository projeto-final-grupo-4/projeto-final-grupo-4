

import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"
import Register from "../pages/Register"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" /*element={<login/>}*/ />
      <Route path="/register" /*element={<register/>}*/ />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/community" />
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};


export default MainRoutes;
