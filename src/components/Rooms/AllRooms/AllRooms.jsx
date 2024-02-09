import React, { useState } from "react";
import { Trash, House } from "phosphor-react";
import DeleteModalComponent from "../../common/Modals/DeleteModal";
import hotelImage from '../../../assets/images/hotel.png'
const AllRooms = () => {

    const generateRandomName = () => {
        const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Michael', 'Olivia'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis'];
      
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      
        return `${randomFirstName} ${randomLastName}`;
      };
      
      const generateRandomReservation = () => {
        const fullName = generateRandomName();
        const roomNumber = Math.floor(Math.random() * 100) + 1;
        const numberOfPeople = Math.floor(Math.random() * 5) + 1
        const money = Math.floor(Math.random() * 1000) + 100;
        const status = Math.random() > 0.5 ? 'Paid' : 'Pending'; 
        const checkedIn = Math.random() > 0.7;
      
        return { fullName, roomNumber, numberOfPeople, money, status, checkedIn };
      };
      
      const generateReservationsArray = (count) => {
        const reservations = [];
        for (let i = 0; i < count; i++) {
          reservations.push(generateRandomReservation());
        }
        return reservations;
      };

      const [deleteReservationId,setDeleteReservationId] = useState(null)

  return (
    <>
    <div className="py-2 overflow-x-auto">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
        <tr className="">
            <th className="font-semibold min-w-min min-w-20 py-4 px-4 text-[12px] text-left">Sr.No</th>
            <th className="font-semibold min-w-min min-w-20 py-4 px-4 text-[12px] text-left">Hotel Room</th>
            <th className="font-semibold min-w-min min-w-20 py-4 px-4 text-[12px] text-left">Room Number</th>
            <th className="font-semibold min-w-min min-w-20 py-4 px-4 text-[12px] text-left max-w-full min-w-[400px]">Number of peoples</th>
            <th className="font-semibold min-w-min min-w-20 py-4 px-4 text-[12px] text-left">Amount</th>
            <th className="font-semibold min-w-min min-w-20 py-4 px-4 text-[12px] text-left">Payment Status</th>
            <th className="font-semibold min-w-min min-w-20 py-4 px-4 text-[12px] text-left">Status</th>
            <th className="font-semibold min-w-min min-w-20 py-4 px-4 text-[12px] text-left">CTA</th>
          </tr>
        </thead>
        <tbody className="bg-white">

         {generateReservationsArray(10).map((reservation, index) => (
            <tr key={index} className="border-y-[1px] border-slate-100">
              <td className="font-medium py-4 min-w-20 max-w-max p-4 text-[12px] text-left">{index + 1}</td>
              <td className="font-medium py-4 min-w-20 max-w-max p-4 text-[12px] text-left  flex items-center min-w-20 max-w-max flex gap-2">
                <div className="shadow-xl w-20 h-20 rounded-lg bg-gray-200 overflow-hidden">
                    <img src={hotelImage} className="w-full h-full object-cover" alt="" />
                </div>
              </td>
              <td className="font-medium py-4 min-w-20 max-w-max p-4 text-[12px] text-left">{reservation.roomNumber}</td>
              <td className="font-medium py-4 min-w-20 max-w-max p-4 text-[12px] text-left">{reservation.numberOfPeople}</td>
              <td className="font-medium py-4 min-w-20 max-w-max p-4 text-[12px] text-left">{reservation.money}</td>
              <td className="font-medium py-4 min-w-20 max-w-max p-4 text-[12px] text-left">{reservation.status}</td>
              <td className="">
                <label className="relative inline-flex items-center me-5 cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
              <td className="font-medium py-4 min-w-20 max-w-max p-4 text-[12px] text-left">
              <button onClick={()=>{setDeleteReservationId(index)}}><Trash size={20}  className="" /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
    <DeleteModalComponent 
    onCancel={()=>{setDeleteReservationId(null)}}
    active={deleteReservationId}
    />
    </>
  )
}

export default AllRooms