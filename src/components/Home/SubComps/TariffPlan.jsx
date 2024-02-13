import React from 'react'
import {ArrowLineUpRight} from 'phosphor-react'
import { Link } from 'react-router-dom'
const TariffPlan = () => {

  return (

    <div className='px-6 py-2 border-b-[1px] border-black/5 flex justify-between items-center'>

        <p className='font-medium text-[12px] '>Your Tariff Plan</p>
        
        <span className='flex items-center gap-4'>

        <Link to={'/settings/plans'}><button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300/20 font-medium rounded-lg text-[12px] px-3 py-2 flex items-center gap-2">
        <ArrowLineUpRight weight='bold' size={15}/>
          Go to Tariff Plans</button></Link>

        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-[12px] px-3 py-2">Download Statements</button>

        </span>

    </div>
    
  )
}

export default TariffPlan