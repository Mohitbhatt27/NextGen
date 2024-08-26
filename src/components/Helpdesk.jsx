import React from 'react'

function Helpdesk() {
  const handleClick = () => {
    
  }
  return (
    <div className='fixed right-10 cursor-pointer bottom-10'>
      <img className='w-16 lg:w-20 aspect-square' src="https://cdn.asksid.ai/himalaya/Care_icon.svg" alt="care" onClick={handleClick} loading="lazy"></img>
    </div>
  )
}

export default Helpdesk