import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate=useNavigate()

  return (
    <div className='mt-20'>
      <div onClick={()=>navigate('/login')}>Login</div>
      <div onClick={()=>navigate('/signup')}>Signup</div>
    </div>
  )
}

export default Profile