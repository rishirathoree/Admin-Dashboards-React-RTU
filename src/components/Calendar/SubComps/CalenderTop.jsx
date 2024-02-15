import React from 'react'
import {CalenderDownloadFormatDropdown} from './Index'
const CalenderTop = () => {
  return (
    <div className='p-2 border-b-[1px] p-4 flex items-center justify-between'>
        <p className='font-semibold text-[12px]'>Calender</p>
        <span className='flex items-center gap-4 '>


        <div className='space-y-2'>
                {/* <label htmlFor='price' className="block text-[12px] font-medium text-gray-700 dark:text-white">Price</label> */}
                <input
                  type='text'
                  id='search'
                  name='search'
                  className="ring-[1px] ring-black/5 w-full min-w-80 p-3 text-[12px] rounded-lg focus:outline-none focus:ring-black/20 duration-500 outline-none"
                  placeholder={`Enter Search`} required />
        </div>

        <CalenderDownloadFormatDropdown />


        </span>
    </div>
  )
}

export default CalenderTop