import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedLayout = () => {
  console.log(localStorage.getItem("UserData"));
  return (<>
    <Outlet/>
  </>
  )
}

export default ProtectedLayout