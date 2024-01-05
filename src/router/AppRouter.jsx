import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import PrivateRouter from "./PrivateRouter"
import Home from "../pages/Home"
import Questions from "../pages/Questions"
import AddQuestions from "../pages/AddQuestions"
import Footer from "../components/Footer"

import About from "../pages/About"
import NotFound from "../pages/NotFound"
import React from "react"
import Navbar from "../components/Navbar"
import { LoginContext } from "../context/LoginContext"


const AppRouter =()=>{
    return(
        <LoginContext.Provider>

        <Navbar/>     
        <Routes>
            <Route path="/" element={<Home/>}/>      
            <Route path="*" element={<NotFound/>}/>
            <Route path="/login" element={<Login/>}/>  
            <Route path="/about" element={<About/>}/>         
            <Route path="/" element={<PrivateRouter/>}>               
                <Route path="questions" element={<Questions/>}/>                
                <Route path="addquestions" element={<AddQuestions/>}/>           
            </Route>
                 
            
        </Routes>
        <Footer/>
        </LoginContext.Provider>  
    )
}
export default AppRouter