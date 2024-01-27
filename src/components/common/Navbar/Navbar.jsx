import React from 'react'
import Profile from './Components/Profile'
const Navbar = () => {
    return (
    <div className='w-full p-2 border-b-[1px] bg-white flex items-center justify-end border-black/5 sticky top-0 left-0 z-50'>
      <Profile />
    </div>
  )
}

export default Navbar
