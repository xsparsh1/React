import { Routes, Route, Navigate} from "react-router";
import { Home } from "./HeaderFiles/Home";
import { Login } from "./HeaderFiles/Login";
import { About } from "./HeaderFiles/About";
import { NotFound } from "./404";
import { College } from "./CollegeFiles/College";
import { Bca } from "./CollegeFiles/Bca";
import { Bba } from "./CollegeFiles/Bba";
import { Mca } from "./CollegeFiles/Mca";
import { UserDetail } from "./DynamicRouting/UserDetail";

export function Routing(){
    return(
        <>
        <Routes>

            <Route path="/" element={<Home/>}/>
            
            <Route path="/user">
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="college" element={<College/>}/>
                <Route path="userprofile/:id" element={<UserDetail/>}/>
            </Route>

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