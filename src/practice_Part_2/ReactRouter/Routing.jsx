import { Routes, Route, Navigate} from "react-router";
import { Home } from "./Home";
import { Login } from "./Login";
import { About } from "./About";
import { NotFound } from "./404";

export function Routing(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Login" element={<Login/>}/>

            {/*Redirecting to Home page*/}
            {/* <Route path="/*" element={<Navigate to="/"/>}/> */}

            <Route path="/*" element={<NotFound/>}/>
        </Routes>
        </>
    )
}