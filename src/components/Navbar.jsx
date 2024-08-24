import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import AutoComplete from './Input'
import close from '../assets/icons/close.png'
import menu from '../assets/icons/menu.png'
import cart from '../assets/icons/cart.png'
import profile from '../assets/icons/profile.png'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import { motion } from 'framer-motion'
import LoginPopup from './LoginPopup'
import { delay } from 'lodash'

let list=[
  {name:'Home',path:''},
  {name:'About Us',path:'about'},
  {name:'Product',path:'product'},
  {name:'Contact Us',path:'contact'}
]

function Navbar() {
  const [ham,setHam]=useState(false)
  const [visible,setVisible]=useState(false)
  const navigate=useNavigate()
  const AnimatePop=motion(LoginPopup)

  useEffect(()=>{
    let showPop=setTimeout(() => {
      setVisible(true)
    }, 1500);
    let hidePop=setTimeout(() => {
      setVisible(false)
    }, 7000);

    return ()=>{
      clearTimeout(showPop)
      clearTimeout(hidePop)
    }
  },[])

  function handleHam(){
    setHam(!ham)
  }

  return (
    <>
      <div className='fixed top-0 z-20 w-full flex text-black justify-around items-center backdrop-blur-sm p-3 shadow-lg'>
        <NavLink to='' className='flex cursor-pointer'>
          <img loading='lazy' className='w-9' src={logo1} alt="" />
          <span className='pl-2 pt-1 text-xl font-bold'>NextGen</span>
        </NavLink>
        <div className='flex justify-center gap-7 items-center'>
          <div onClick={handleHam} className="sm:hidden">
            {ham ? (
              <img loading="lazy" className="w-7 p-1" src={close} alt="close" />
            ) : (
              <img loading="lazy" className="w-7" src={menu} alt="menu" />
            )}
          </div>
          <ul onClick={handleHam} className={`absolute sm:static top-16 right-2 z-10 flex flex-col sm:flex-row sm:gap-5 gap-1 ${ham ?'flex bg-black/70 text-white px-7 py-5 rounded-lg' :'hidden sm:flex'}`}>
          {list.map((item,id)=>{
            return <NavLink key={id} to={item.path} className={({isActive})=>`${isActive?'text-emerald-600':''} text-lg font-semibold md:text-xl font-quicksand hover:text-emerald-600`}>{item.name}</NavLink>
          })}
          </ul>
          <div className='hidden xl:block'>
            <AutoComplete/>
          </div>
          <img onClick={()=>navigate('profile')} className='cursor-pointer hidden md:block w-7' src={profile} alt="" />
          {visible && <AnimatePop initial={{scale:0}} animate={{scale:1}} className={`animate-bounce duration-100 absolute top-14 right-[132px] drop-shadow-md`}/>}
          <img onClick={()=>navigate('cart')} className='cursor-pointer  hidden md:block w-7' src={cart} alt="" />
        </div>
      </div>
    </>
  )
}

export default Navbar