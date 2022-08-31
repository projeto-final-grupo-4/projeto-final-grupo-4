import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" /*element={<dashboard/>}*/ />
            <Route path="/community"/>
            {/* <Route path="*" element={<Navigate to={"/login"}/>}/> */}
        </Routes>
    )
}

export default MainRoutes