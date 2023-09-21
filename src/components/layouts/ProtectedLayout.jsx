import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedLayout = () => {
  const userData = localStorage.getItem("UserData") && JSON.parse(localStorage.getItem("UserData"))
  return (userData?.token && userData?.userType === "Admin" ? <Outlet /> : <Navigate to={"/"} />)
}

export default ProtectedLayout