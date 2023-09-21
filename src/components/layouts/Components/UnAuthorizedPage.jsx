import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UnAuthorizedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 5000);
  }, [])

  return (
    <div className='container h-[100vh] d-flex flex-col justify-center items-center gap-10'>
      <div className='d-flex flex-col items-center gap-6'>
        <Icon className='h-32 w-32 text-red-600' icon="fluent-mdl2:blocked-site-solid-12" />
        <span className='text-2xl font-bold'>You are not Authorized to view this page</span>
      </div>
      <button className='underline font-semibold text-slate-900 hover:text-sky-800' onClick={() => { navigate("/") }}>Get back to login</button>
    </div>
  )
}

export default UnAuthorizedPage