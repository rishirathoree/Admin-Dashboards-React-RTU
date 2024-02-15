import React from 'react'
import {Trash} from 'phosphor-react'
const AddRoomsTable = ({rooms,deleteRoom}) => {
  return (
    <div className='space-y-4'>
        <p className='font-semibold text-sm'>Added Rooms</p>
        <div>
        <div className=" rounded-lg border-gray-100 border-[1px] overflow-x-auto">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
        <tr className="">
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Room Numbers</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Room Size</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Occupancies</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">CTA</th>
          </tr>
        </thead>
        <tbody className="bg-white">

         {rooms.map((item, index) => (
             <tr key={index} className="border-y-[1px] cursor-pointer hover:bg-gray-100/40 last:border-y-0 border-slate-200">
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{item.roomNumber}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{item.roomArea}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{item.MaximumOccupanciesAdult} Adults - {item.MaximumOccupanciesChild} Children</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">
              <button onClick={()=>{deleteRoom(item.id)}}><Trash size={20} className="" /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
        </div>
    </div>
  )
}

export default AddRoomsTable