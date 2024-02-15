
import React, { useState } from "react";
import { Trash, House } from "phosphor-react";
import {Check,X} from 'phosphor-react'
import roomImage from '../../../../assets/images/hotel.png'
import DeleteModalComponent from "../../../common/Modals/DeleteModal";
const AllRoomsTable = () => {

    const generateRandomName = () => {
          const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Michael', 'Olivia'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis'];
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      
        return `${randomFirstName} ${randomLastName}`;
      
      };
      
      const generateRandomReservation = () => {
        const fullName = generateRandomName(1);
        const bookingThrough = ['OTA Booking', 'CYC Booking']
        const roomTypes = ['Single', 'Double', 'Twin', 'Suite', 'Deluxe', 'Family', 'Studio', 'Penthouse'];
        const randomRoomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
        const bookingThroughs = bookingThrough[Math.floor(Math.random() * bookingThrough.length)];
        const roomType = randomRoomType;
        const roomNumber = Math.floor(Math.random() * 100) + 1;
        const numberOfPeople = Math.floor(Math.random() * 5) + 1
        const money = Math.floor(Math.random() * 1000) + 100;
        const paidAmount = money / 3;
        const status = Math.random() > 0.5 ? 'Paid' : 'Pending'; 
        const checkedIn = Math.random() > 0.7;
        return { fullName, roomNumber,bookingThroughs, roomType, numberOfPeople,paidAmount, money, status, checkedIn };
      };
      
      const generateReservationsArray = (count) => {
        const reservations = [];
        for (let i = 0; i < count; i++) {
          reservations.push(generateRandomReservation());
        }
        console.log(reservations)
        return reservations;
      };
      const [reservations,setReservations] = useState(generateReservationsArray(20))
      const [deleteReservationId,setDeleteReservationId] = useState(null)
  return (
    <>
    <div className="m-4 pb-8 space-y-4">
        <p className="font-medium text-[12px]">Rooms</p>
    <div className=" rounded-lg border-gray-100 border-[1px] overflow-x-auto">
      <table className="border-collapse table-auto w-full text-sm">
        <thead>
        <tr className="">
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Sr.No</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Room Image</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Room Number</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center max-w-full">Room Type</th>
            <th className="font-semibold cursor-pointer min-w-min py-2 px-4 text-[11px] text-center">Amount</th>
            <th className="font-semibold cursor-pointer min-w-min py-2 px-4 text-[11px] text-center">Booked By</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Status</th>
            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">CTA</th>
          </tr>
        </thead>
        <tbody className="bg-white">

         {reservations.map((reservation, index) => (
             <tr key={index} className="border-y-[1px] cursor-pointer hover:bg-gray-100/40 last:border-y-0 border-slate-200">
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{index + 1}</td>
              <td className="font-medium py-2 min-w-min text-center p-4 text-[12px] justify-center flex items-center gap-2">
                <img src={roomImage} className="object-cover w-16 rounded-lg h-16" alt="" />
              </td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{reservation.roomNumber}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{reservation.roomType}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{reservation.money}</td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">
              <span class={`text-white  text-xs font-medium me-2 px-2.5 py-0.5 rounded ${reservation.bookingThroughs === 'CYC Booking' ? 'bg-blue-500' : 'bg-red-500 '}`}>{reservation.bookingThroughs}</span>

                </td>
              <td className=" items-center justify-center">
                <label className="relative block translate-x-4 items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer hidden" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-400"></div>
                </label>
              </td>
              <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">
              <button onClick={()=>{setDeleteReservationId(index)}}><Trash size={20}  className="" /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
    </div>
    <DeleteModalComponent onCancel={()=>{setDeleteReservationId(null)}} active={deleteReservationId} />
    </>
  )
}

export default AllRoomsTable