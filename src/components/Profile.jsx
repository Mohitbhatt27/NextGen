import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const navigate=useNavigate()
  const { logout,loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className='mt-20'>
      <div onClick={()=>loginWithRedirect()}>Login</div>
      <div onClick={()=>navigate('/signup')}>Signup</div>
      <div onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</div>
      {isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )}
    </div>
  )
}

export default Profile