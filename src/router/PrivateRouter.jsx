import React, { useContext } from 'react'
import {Navigate, Outlet} from "react-router-dom"
import {AuthContext} from "../context/AuthProvider"
// import Navbar from "../components/Navbar"


const PrivateRouter = () => {
    const {user} = useContext(AuthContext)
  return  user ? (
    <>
    {/* <Navbar/>  */}
    <Outlet/>
    </>
  ):(
    <Navigate to="/login "/>
  );
}

export default PrivateRouter