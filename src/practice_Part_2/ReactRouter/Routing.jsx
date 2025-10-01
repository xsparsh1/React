import { Routes, Route, Navigate} from "react-router";
import { Home } from "./Home";
import { Login } from "./Login";
import { About } from "./About";

export function Routing(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>        {/*Redirecting to Home page*/}
        </Routes>
        </>
    )
}