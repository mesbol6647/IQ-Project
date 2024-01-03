import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import PrivateRouter from "./PrivateRouter"
import Home from "../pages/Home"
import Questions from "../pages/Questions"
import AddQuestions from "../pages/AddQuestions"
import Footer from "../components/Footer"
import QuestionDetails from "../pages/QuestionDetails"
import About from "../pages/About"
import NotFound from "../pages/NotFound"
import React from "react"
import Navbar from "../components/Navbar"


const AppRouter =()=>{
    return(
        <>
        {/* <Navbar/>     */}
        <Routes>           
            <Route path="/" element={<Login/>}/>           
            <Route path="/dashboard" element={<PrivateRouter/>}>
                <Route path="" element={<Home/>}/>
                <Route path="/dashboard/questions" element={<Questions/>}/>
                <Route path="questions/:detail" element={<QuestionDetails/>}/>
                <Route path="/dashboard/addquestions" element={<AddQuestions/>}/>
                <Route path="/dashboard/about" element={<About/>}/>    
            </Route>
                    
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
        </>
    )
}
export default AppRouter