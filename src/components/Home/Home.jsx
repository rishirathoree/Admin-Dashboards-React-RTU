import React, { useEffect } from 'react'
import Toasters from '../common/Toasters/Toasters'
import { CardsHome, GraphsHome, TableHome, TariffsHead } from './SubComps/Index'
const Home = () => {
  
  return (
    <>
    <TariffsHead />
    <div className='w-full py-2 h-full'>
      <CardsHome />
      <TableHome />
    </div>
    </>
  )
}

export default Home
