import React from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo1.png'

function Navbar() {
  
  return (
    <>
      <div className='fixed top-0 z-20 w-full flex text-white justify-around items-center backdrop-blur-sm p-4 shadow-lg' >
        <div className='flex cursor-pointer'>
          <img className='w-9' src={logo1} alt="" />
          <span className='pl-2 pt-1 text-xl font-bold'>NextGen</span>
        </div>
        <div className='flex gap-10 text-xl font-medium'>
          <NavLink to='' className={({isActive})=>`${isActive?'text-green-600':''} mix-blend-difference hover:underline`}>Home</NavLink>
          <NavLink to='about' className={({isActive})=>`${isActive?'text-green-600':''} mix-blend-difference hover:underline`}>About Us</NavLink>
          <NavLink to='product' className={({isActive})=>`${isActive?'text-green-600':''}  hover:underline`}>Product</NavLink>
          <NavLink to='contact' className={({isActive})=>`${isActive?'text-green-600':''} hover:underline`}>Contact Us</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar