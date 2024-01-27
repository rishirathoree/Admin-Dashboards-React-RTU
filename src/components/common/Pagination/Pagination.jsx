import React, { useState } from 'react'

const Pagination = () => {

  const [pagination,setPaginations] = useState(1)

  return (
    <div className='flex items-center p-4'>
      {Array(20).fill(1).map((item,idx)=>{
        return(
          <span
          onClick={()=>{setPaginations(idx + 1)}}
          className={`w-8 h-8 text-[12px] font-medium bg-white flex items-center justify-center ${idx + 1 === pagination ? 'bg-black text-white' : ''}`}>{idx + 1}</span>
        )
      })}
    </div>
  )
}

export default Pagination
