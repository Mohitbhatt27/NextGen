import React,{useEffect,lazy,Suspense} from 'react'
const Navbar=lazy(()=>import('./components/Navbar'))
const Footer=lazy(()=>import('./components/Footer'))
import { Outlet } from 'react-router-dom'
const Helpdesk=lazy(()=>import('./components/Helpdesk'))
import throttle from 'lodash/throttle';
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import {login,logout} from './Redux/authSlice'

// const handleScroll = useCallback(
//   throttle(() => {
//     console.log('Scroll event triggered');
//   }, 200), []
// );
// useEffect(() => {
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, [handleScroll]);

function App() {
  const {user,isAuthenticated}=useAuth0()
  const dispatch=useDispatch()

  console.log(user)
  useEffect(()=>{
    if(isAuthenticated){
      dispatch(login(user))
    }else{
      dispatch(logout())
    }
  },[])

  return (
    <Suspense fallback=''>
      <Navbar/>
      <Outlet/>
      <Helpdesk/>
      <Footer/>
    </Suspense>
  )
}

export default App