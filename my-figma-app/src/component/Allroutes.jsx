import React from "react";

import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Enroll from "../pages/Enroll";
import Courses from "../pages/Courses";

function AllRoutes(){
    return(
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/enroll" element={<Enroll/>}/>
        <Route path="/courses" element={<Courses/>}/>
        
        </Routes>
    )
}

export default AllRoutes