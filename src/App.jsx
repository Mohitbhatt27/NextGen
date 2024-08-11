import React,{useEffect,useCallback,lazy,Suspense} from 'react'
const Navbar=lazy(()=>import('./components/Navbar'))
const Footer=lazy(()=>import('./components/Footer'))
import { Outlet } from 'react-router-dom'
const Helpdesk=lazy(()=>import('./components/Helpdesk'))
import throttle from 'lodash/throttle';

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