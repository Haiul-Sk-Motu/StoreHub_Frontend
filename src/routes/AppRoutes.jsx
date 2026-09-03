import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/Dashboard";
import CreateStore from "@/pages/store/CreateStore";
import { Route, Routes } from "react-router-dom";

function AppRoute(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/store/CreateStore" element={<CreateStore/>}/>
        </Routes>
    )
}

export default AppRoute;