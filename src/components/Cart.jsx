import React from 'react'
import { useNavigate } from 'react-router-dom'
import missingCart from '../assets/missingCart.webp'

function Cart() {
  const navigate=useNavigate()

  return (
    <div className='p-10 flex justify-center items-center'>
      <div className='rounded-md bg-white drop-shadow-lg w-1/2 mt-10 flex flex-col m-auto p-10'>
        <img loading='lazy' className='w-56 m-auto mb-5' src={missingCart} alt="" />
        <span className='text-lg text-center'>Missing Cart items?</span>
        <span className='text-md text-center'>Login to see the items you added previously</span>
        <button className='bg-emerald-500 m-auto active:bg-emerald-500 hover:bg-emerald-600 text-white font-nunito text-lg font-semibold py-1 w-32 rounded-sm mt-3' onClick={()=>navigate('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Cart