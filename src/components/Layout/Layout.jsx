import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return <>
    <div className='flex flex-col h-screen'>
      <header className='w-full flex items-center justify-center '>
        <h1 className='text-center my-5'>Customer Transactions</h1>
      </header>
      <div className='layout flex-grow bg-gray-200'>
        <Outlet />
      </div>
      <footer className='text-center  shadow-lg'>
        <p className='my-5'>&copy; 2024 Customer Transactions App By <Link className='text-red-600 font-bold' to="https://www.linkedin.com/in/mesmail2/">Mohamed Esmail</Link></p>
      </footer>
    </div>
  </>
}

export default Layout
