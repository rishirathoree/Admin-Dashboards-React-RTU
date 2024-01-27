import React from 'react'
import Toasters from '../common/Toasters/Toasters'
import { Button } from 'keep-react'
const Home = () => {
  return (
    <div className='w-full py-2'>
      <div className='grid grid-cols-4 gap-4 p-4 bg-white'>
      {Array(8).fill(1).map((item,idx)=>{
        return(
        <div key={idx} className={`w-full flex flex-col space-y-4 items-center justify-center rounded-lg bg-gray-50 ${idx > 3 ? 'col-span-2 h-72' : 'h-40'}`}>
        </div>
        )
      })}
      </div>
    </div>
  )
}

export default Home
