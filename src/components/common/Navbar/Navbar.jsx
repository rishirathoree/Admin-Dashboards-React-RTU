import React from 'react'
import Profile from './Components/Profile'
import Notifications from './Components/Notifications'
import { Link } from 'react-router-dom'
import { Storefront } from 'phosphor-react'
const Navbar = () => {
  return (
    <div className='w-full p-4 border-b-[1px] bg-white flex items-center justify-between border-black/5 sticky top-0 left-0 z-50'>
      <p className='font-semibold text-sm'>Good Morning, <span className='text-gray-200'>Rishi</span></p>
      <span className='flex items-center gap-4'>
        <Link to={'/rooms/create'}>
          <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-[12px] px-4 py-2 flex items-center gap-2">
            <Storefront weight='light' size={15} />
            Add Rooms
          </button>
        </Link>
        <Notifications />
        <Profile />

      </span>
    </div>
  )
}

export default Navbar
