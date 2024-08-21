import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import AutoComplete from './Input'
import close from '../assets/icons/close.png'
import menu from '../assets/icons/menu.png'

let list=[
  {name:'Home',path:''},
  {name:'About Us',path:'about'},
  {name:'Product',path:'product'},
  {name:'Contact Us',path:'contact'}
]
function Navbar() {
  const [ham,setHam]=useState(false)
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
        <div className='flex items-center'>
          <div onClick={handleHam} className="sm:hidden">
            {ham ? (
              <img loading="lazy" className="w-7 p-1" src={close} alt="close" />
            ) : (
              <img loading="lazy" className="w-7" src={menu} alt="menu" />
            )}
          </div>
          <ul onClick={handleHam} className={`absolute sm:static top-16 right-0 z-10 flex flex-col sm:flex-row sm:gap-4 gap-2 ${ham ?'flex bg-black/70 text-white px-7 py-5 rounded-lg' :'hidden sm:flex'}`}>
          {list.map((item,id)=>{
            return <NavLink key={id} to={item.path} className={({isActive})=>`${isActive?'text-emerald-600':''} text-lg font-bold sm:text-xl font-quicksand hover:text-emerald-600`}>{item.name}</NavLink>
          })}
          </ul>
          <div className='ml-10 hidden xl:block'>
            <AutoComplete/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar