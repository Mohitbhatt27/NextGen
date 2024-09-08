import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';

function Profile() {
  const userData=useSelector(state=>state.auth.userData)
  const {logout}=useAuth0()

  function handleName(){
  }
  function handleUsername(){
  }
  
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-white min-h-56 '>
        <div className='flex'>
          <span>Profile picture</span>
          <img className='w-10 rounded-full mx-5' src={userData.picture} alt="" />
          <button className='bg-emerald-500 mr-3 active:bg-emerald-600 text-white px-1 py-[0.5px]'>Change picture</button>
          <button className='text-red-500 hover:bg-red-600 hover:text-white px-1 py-[0.5px]'>Delete picture</button>
        </div>
        <div>
          <span>Profile name</span>
          <input className='px-1 py-[0.5px]' type="text" onChange={(e)=>handleName(e)} value={userData.name} />
        </div>
        <div>
          <span>Username</span>
          <input className='px-1 py-[0.5px]' type="text" onChange={(e)=>handleUsername(e)} value={userData.nickname} />
        </div>
      </div>
      <button onClick={()=>logout()}>logout</button>
    </div>
  )
}

export default Profile