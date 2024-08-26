import React,{useRef} from 'react'
import SuggestList from './suggestion'
import Input from './Input'
import search from '../assets/icons/search.png'

function Search() {
  const ref=useRef()

  function handleSearch(){

  }
  
  return (
    <div>
      <img onClick={()=>{handleSearch()}} className='w-6 cursor-pointer absolute top-[20px] ml-48' src={search} alt="" />
      <Input className='py-[0.5px] font-nunito bg-inherit px-2 text-lg font-normal outline-none rounded-md border-2 border-black' type="text" ref={ref} placeholder='Search here...'
      />
    </div>
  )
}

export default Search