import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

const UserLayout = () => {
    return (
        <>
            <Header />
            <ToastContainer  theme='dark'/>
            <Outlet />
            
            <Footer />
        </>
    )
}

export default UserLayout