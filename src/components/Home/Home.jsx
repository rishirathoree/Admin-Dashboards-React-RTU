import React, { useEffect } from 'react'
import Toasters from '../common/Toasters/Toasters'
import { CardsHome, GraphsHome } from './SubComps/Index'

const Home = () => {
  
  return (
    <div className='w-full py-2 h-full'>
      <CardsHome />
      <GraphsHome />
    </div>
  )
}

export default Home
