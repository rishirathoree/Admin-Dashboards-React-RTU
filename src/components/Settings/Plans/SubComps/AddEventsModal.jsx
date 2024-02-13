import React from 'react'

const AddEventsModal = ({onCancel}) => {
  return (
    <div className='w-full h-screen bg-black/50 z-50 fixed top-0 left-0 flex items-center justify-center'>
            <div className='w-1/3 h-min bg-white rounded-lg'>
                
                <span className='p-4 border-b-[1px] border-black/5 block text-center'><p className='font-semibold text-[12px]'>Add Events</p></span>

                <div className='grid grid-cols-2 gap-4 p-4'>
                    
                <label htmlFor="percentageInput" className=' block col-span-2'>
                    <p className='font-medium text-gray-600 text-[12px]'>Event Name</p>
                    <input id='percentageInput' type="text" className='w-full bg-gray-50 p-3 outline-none text-sm rounded' placeholder='Event Name' />
                </label>

                <label htmlFor="Selectdatefrom" className=' block'>
                    <p className='font-medium text-gray-600 text-[12px]'>Select Date</p>
                    <input id='Selectdatefrom' type="date" className='w-full bg-gray-50 p-3 outline-none text-sm rounded' placeholder='Select Date' />
                </label>

                <label htmlFor="Selectdateto" className=' block'>
                    <p className='font-medium text-gray-600 text-[12px]'>Select Date</p>
                    <input id='Selectdateto' type="date" className='w-full bg-gray-50 p-3 outline-none text-sm rounded' placeholder='Select Date' />
                </label>

                <label htmlFor="increment" className=' block col-span-2'>
                    <p className='font-medium text-gray-600 text-[12px]'>Percentage</p>
                    <input id='increment' type="text" className='w-full bg-gray-50 p-3 outline-none text-sm rounded' placeholder='Increment' />
                </label>


                </div>


                <span className='flex items-center gap-4 px-4 py-6 border-t-[1px] justify-end'>

                    <button onClick={() => setShowPops(1)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300/20 font-medium rounded-lg text-[12px] px-5 py-3">Save</button>

                    <button onClick={onCancel} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-[12px] px-5 py-3">Cancel</button>

                </span>

            </div>
        </div>
  )
}

export default AddEventsModal