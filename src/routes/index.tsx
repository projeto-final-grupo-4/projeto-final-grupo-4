import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Community from "../pages/Community";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" /*element={<login/>}*/ />
      <Route path="/register" /*element={<register/>}*/ />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/community" element={<Community/>}/>
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default MainRoutes;
