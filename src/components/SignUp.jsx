import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate=useNavigate()
// add google icon
// big checkbox
// logic
// dropshadow

  function handleSignup(){

  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='w-1/3 m-auto  flex flex-col drop-shadow-lg bg-white rounded-md p-5'>
        <p className='font-bold font-nunito text-2xl'>Sign Up</p>
        <div className='border-2 hover:border-green-500 rounded-sm my-4 py-1 text-center'>
          <img src="" alt="" />
          <span className='font-nunito'>Sign up with Google</span>
        </div>
        <hr />
        <div className='flex my-2 font-nunito flex-col gap-1'>
          <label htmlFor="name">Name</label>
          <input className='rounded-sm p-1 outline-none border-2 focus:border-green-500' id='name' type="text" />
          <label htmlFor="email">Email</label>
          <input className='rounded-sm p-1 outline-none border-2 focus:border-green-500' id='email' type="text" />
          <label htmlFor="password">Password</label>
          <input className='rounded-sm p-1 outline-none border-2 focus:border-green-500' id='password' type="password" />
          <div className='mt-2 ml-1'>
            <input type="checkbox" name="" id="agree"/>
            <label className='text-gray-500 ml-1' htmlFor="agree" > I agree with <span className='text-green-500'>terms & conditions</span></label>
          </div>
          <button className='bg-emerald-500 active:bg-emerald-500 hover:bg-emerald-600 text-white font-nunito text-lg font-semibold py-1 rounded-md my-3' onClick={handleSignup}>SignUp</button>
        </div>
        <hr />
        <span className='mt-3 font-nunito text-gray-500 text-center'>Already have an account?</span>
        <span className='text-center font-nunito hover:text-emerald-600 hover:underline text-green-500' onClick={()=>navigate('/login')}>LogIn</span>
      </div>
    </div>
  )
}

export default SignUp