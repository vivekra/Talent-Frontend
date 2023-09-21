import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {
    const userData = localStorage.getItem("UserData") && JSON.parse(localStorage.getItem("UserData"))
    return (userData?.token ? <Outlet /> : <Navigate to={"/unauthorized"} />)
}

export default AuthLayout