import { Routes, Route, Navigate } from "react-router-dom"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/login" /*element={<login/>}*//>
            <Route path="/register" /*element={<register/>}*//>
            <Route path="/dashboard" /*element={<dashboard/>}*/ />
            <Route path="*" element={<Navigate to={"/login"}/>}/>
        </Routes>
    )
}

export default MainRoutes