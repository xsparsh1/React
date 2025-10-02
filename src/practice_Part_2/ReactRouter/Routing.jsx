import { Routes, Route, Navigate} from "react-router";
import { Home } from "./Home";
import { Login } from "./Login";
import { About } from "./About";
import { NotFound } from "./404";
import { College } from "./College";
import { Bca } from "./Bca";
import { Bba } from "./Bba";
import { Mca } from "./Mca";

export function Routing(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/College" element={<College/>}/>

            {/* Nested Rotuing Routes */}
            <Route path="/bca" element={<Bca/>}/>
            <Route path="/bba" element={<Bba/>}/>
            <Route path="/mca" element={<Mca/>}/>

            {/*Redirecting to Home page*/}
            {/* <Route path="/*" element={<Navigate to="/"/>}/> */}

            {/* 404 Page on invalid Route */}
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
        </>
    )
}