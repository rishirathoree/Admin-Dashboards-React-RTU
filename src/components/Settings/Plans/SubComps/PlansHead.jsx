import React, { useState } from 'react'
import { AddEventsModal, AddWeeklyTariffPlanModal } from './Index'
const PlansHead = () => {
    const [showPops, setShowPops] = useState(null)
    return (

        <>
            <div className='px-6 py-2 border-b-[1px] border-black/5 flex justify-between items-center'>

                <p className='font-medium text-[12px] '>Tariff Plan</p>

                <span className='flex items-center gap-4'>

                    <button onClick={() => setShowPops(1)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300/20 font-medium rounded-lg text-[12px] px-3 py-2">Add Tariff for weekly</button>

                    <button onClick={() => setShowPops(2)} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-[12px] px-3 py-2">Add Tariff for Special Occasion</button>

                </span>

            </div>
            {showPops === 1 && <AddWeeklyTariffPlanModal onCancel={()=>{setShowPops(null)}} />}
            {showPops === 2 && <AddEventsModal onCancel={()=>{setShowPops(null)}} />}
        </>

        
    )
}

export default PlansHead