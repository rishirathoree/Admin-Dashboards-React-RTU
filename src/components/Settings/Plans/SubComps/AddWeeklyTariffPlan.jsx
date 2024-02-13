import React from 'react'

const AddWeeklyTariffPlan = ({ onCancel }) => {

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className='w-full h-screen bg-black/50 z-50 fixed top-0 left-0 flex items-center justify-center'>
            <div className='w-1/3 h-min bg-white rounded-lg'>
                
                <span className='p-4 border-b-[1px] border-black/5 block text-center'><p className='font-semibold text-[12px]'>Weekly Plans</p></span>

                <label htmlFor="percentageInput" className='p-4 block space-y-4'>
                    <p className='font-semibold text-sm'>Increment</p>
                    <input type="text" className='w-full bg-gray-50 p-3 outline-none text-sm rounded' placeholder='Percentage' />
                </label>

                <div className='grid grid-cols-3 gap-4 p-4'>
                    {daysOfWeek.map((item, idx) => {
                        return (
                            <div class="flex items-center mb-4">
                                <input id={item} type="checkbox" value="" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500" />
                                <label for={item} class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item}</label>
                            </div>
                        )
                    })}
                </div>

                <span className='flex items-center gap-4 px-4 py-6 border-t-[1px] justify-end'>

                    <button onClick={() => setShowPops(1)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300/20 font-medium rounded-lg text-[12px] px-5 py-3">Save</button>

                    <button onClick={onCancel} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-[12px] px-5 py-3">Cancel</button>

                </span>

            </div>
        </div>
    )
}

export default AddWeeklyTariffPlan