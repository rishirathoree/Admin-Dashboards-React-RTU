import React, { useState } from 'react'

const Pagination = () => {

  const [pagination,setPaginations] = useState(1)

  return (
    <div className='flex items-center p-4 select-none'>
      <div className='flex ring-1 ring-black/10 '>
      {Array(20).fill(1).map((item,idx)=>{
        return(
          <span
          onClick={()=>{setPaginations(idx + 1)}}
          className={`w-8 h-8 text-[12px] border-r-[1px] last:border-r-0 cursor-pointer font-medium bg-white flex items-center justify-center 
          ${idx + 1 === pagination ? 'bg-gray-900 text-gray-100' : ''}`}>{idx + 1}</span>
        )
      })}
      </div>
    </div>
  )
}

export default Pagination
