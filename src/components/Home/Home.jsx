import React from 'react'
import Toasters from '../common/Toasters/Toasters'
const Home = () => {
  return (
    <div className='w-full py-6'>
      <div className='grid grid-cols-4 gap-4 p-4 bg-white'>
      {Array(12).fill(1).map((item,idx)=>{
        return(
          <div key={idx} className={`h-72 flex-1 w-full rounded-lg bg-gray-100 ${idx % 6 === 0 ? 'col-span-3' : ''}`}></div>
        )
      })}
      </div>
    </div>
  )
}

export default Home
