import React from 'react'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <nav className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>The</span>
                <span className='text-slate-700'>State</span>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg'>
                <input type="search" placeholder='Search...' className='bg-transparent outline-none' />
            </form>
        </nav>
    </header>
  )
}

export default Header