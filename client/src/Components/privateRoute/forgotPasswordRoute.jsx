import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ForgotPasswordPrivateRoute() {
    const {currentUser}=useSelector((state)=>state.verifyPass);
    return currentUser?<Outlet/>:<Navigate to="/Login"/>
}

