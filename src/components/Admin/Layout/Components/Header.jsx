import React from 'react'

const Header = () => {
  return (
    <header className='w-full d-flex justify-between bg-slate-300 h-[10vh] static'>
        <a href='/admin/home' className='h-full'><img src='/logo.svg' alt='Digital - Q Logo' className='h-full aspect-[3/1]'/></a>
        <div className='d-flex items-center'>
            <h3>Admin : Alaspravinkumar Rajamani</h3>
        </div>
        <button className='btn btn-secondary'>logout</button>
    </header>
  )
}

export default Header