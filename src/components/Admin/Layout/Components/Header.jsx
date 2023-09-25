import { Icon } from '@iconify/react'
import React from 'react'
import { useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='w-full d-flex justify-between bg-slate-200 h-[10vh] static '>
        <a title='Home' href='/admin/home' className='h-full'><img src='/logo.svg' alt='Digital - Q Logo' className='h-full aspect-[3/1]'/></a>
        <div className='d-flex items-center'>
            <h3>Admin : Alaspravinkumar Rajamani</h3>
        </div>
        <button title='Logout' onClick={() => {navigate("/logout")}}><Icon icon="solar:logout-3-bold" className='w-10 h-10' /></button>
    </header>
  )
}

export default Header