import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            localStorage.clear();
            sessionStorage.clear();
            navigate("/");
            window.location.reload(true);
        }, 10000);
    }, [])

    return (
        <div className='container h-[100vh] d-flex flex-col justify-center items-center gap-10'>
            <div className='d-flex flex-col items-center gap-6'>
                <Icon className='h-32 w-32 text-red-600' icon="majesticons:logout-half-circle" />
                <span className='text-2xl font-bold'>You are Logged out Successfully</span>
            </div>
            <div className='font-semibold text-slate-900'>
                We will get you  back to the Home page or else you wanna 
                <button className='underline ml-1 hover:text-sky-800' onClick={() => { navigate("/") }}>Get back to login </button>
            </div>
        </div>
    )
}

export default LogoutPage