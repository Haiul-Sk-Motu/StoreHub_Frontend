import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function AppRoute(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default AppRoute;