import React from 'react'
import { Trash, PencilSimpleLine } from 'phosphor-react'

const SpecialOccassion = () => {

    const reservations = []
    for (let i = 0; i < 7; i++) {
        const specialOccasions = [
            'New Year\'s Day',
            'Valentine\'s Day',
            'St. Patrick\'s Day',
            'April Fools\' Day',
            'Easter Sunday',
            'Mother\'s Day',
            'Father\'s Day',
            'Halloween',
            'Thanksgiving Day',
            'Christmas Eve',
            'Christmas Day'
        ];
        reservations.push({ 
            occasionDay: specialOccasions[Math.floor(Math.random() * specialOccasions.length)], 
            randomMailSubjects: Math.floor(Math.random() * 100),
            randomEmailMessages: 'cbascvashcvhj' 
        });
    }
    console.log(reservations)
  return (
    <div className='my-4 mx-2 rounded py-4 px-4 space-y-4'>
            <p className='font-medium text-[12px]'>Special Occasion</p>
            <div className=" rounded-lg border-gray-200 border-[1px] overflow-x-auto">
                <table className="border-collapse table-auto w-full text-sm">
                    <thead>
                        <tr className="">
                            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Event Name</th>
                            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Increment</th>
                            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Date</th>
                            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">CTA</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">

                        {reservations.map((item, index) => (
                            <tr key={index} className="border-y-[1px] cursor-pointer hover:bg-gray-100/40 last:border-y-0 border-slate-200">
                                <td className="font-medium py-2 min-w-min text-left max-w-max p-4 text-[12px] ">{item.occasionDay}</td>
                                <td className="font-medium py-2 min-w-min text-left max-w-max p-4 text-[12px] ">{item.randomMailSubjects}</td>
                                <td className="font-medium py-2 min-w-min text-left max-w-max p-4 text-[12px] ">{new Date().toISOString().split('T')[0]}</td>
                                <td className="font-medium py-2 min-w-min text-center w-full p-4 text-[12px] flex items-center justify-center">
                                    <span className='block flex items-center gap-2'>

                                        <span class="ms-3 text-[12px] font-medium text-gray-500">Suspend</span>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" />
                                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                                        </label>

                                        <PencilSimpleLine size={20} />

                                        <button onClick={(e) => {
                                            e.stopPropagation()
                                            setDeleteReservationId(index)
                                        }}><Trash size={20} className="" />
                                        </button>

                                    </span>

                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default SpecialOccassion