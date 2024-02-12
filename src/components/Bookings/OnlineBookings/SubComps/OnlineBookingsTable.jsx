import React, { useState } from "react";
import { Trash, House } from "phosphor-react";
import {Check,X,CheckSquare} from 'phosphor-react'
import DeleteModalComponent from "../../../common/Modals/DeleteModal";

const OnlineBookingsTable = () => {
    
    const generateRandomName = () => {
        const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Michael', 'Olivia'];
      const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis'];
      const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
      return `${randomFirstName} ${randomLastName}`;
    
    };
    
    const generateRandomReservation = () => {
      const fullName = generateRandomName(1);
      const roomTypes = ['Single', 'Double', 'Twin', 'Suite', 'Deluxe', 'Family', 'Studio', 'Penthouse'];
      const randomRoomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
      const roomType = randomRoomType;
      const roomNumber = Math.floor(Math.random() * 100) + 1;
      const numberOfPeople = Math.floor(Math.random() * 5) + 1
      const money = Math.floor(Math.random() * 1000) + 100;
      const paidAmount = money / 3;
      const status = Math.random() > 0.5 ? 'Paid' : 'Pending'; 
      const checkedIn = Math.random() > 0.7;
      return { fullName, roomNumber, roomType, numberOfPeople,paidAmount, money, status, checkedIn };
    };
    
    const generateReservationsArray = (count) => {
      const reservations = [];
      for (let i = 0; i < count; i++) {
        reservations.push(generateRandomReservation());
      }
      return reservations;
    };
    const [reservations,setReservations] = useState(generateReservationsArray(20))
    const [deleteReservationId,setDeleteReservationId] = useState(null)
return (
  <>
  <div className="m-4 pb-8 space-y-4 ">
      <p className="font-medium text-[12px]">Online Booking</p>
  <div className=" rounded-lg border-gray-100 border-[1px] overflow-x-auto">
    <table className="border-collapse select-none table-auto w-full text-sm">
      <thead>
      <tr className="">
          <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Sr.No</th>
          <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Client Name</th>
          <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">Room Number</th>
          <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center max-w-full">Room Type</th>
          <th 
          onClick={()=>{
              console.log('first')
              const sorted = reservations.sort((a,b)=>{
                  return a.money - b.money 
              })
              setReservations(sorted)
          }}
          className="font-semibold cursor-pointer min-w-min py-2 px-4 text-[11px] text-center">Amount</th>
          <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">CTA</th>
        </tr>
      </thead>
      <tbody className="bg-white">

       {reservations.map((reservation, index) => (
           <tr key={index} className="border-y-[1px] cursor-pointer hover:bg-gray-100/40 last:border-y-0 border-slate-100">
            <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{index + 1}</td>
            <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{reservation.fullName}</td>
            <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{parseInt(reservation.money - reservation.paidAmount)}</td>
            <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{reservation.roomType}</td>
            <td className="font-medium py-2 min-w-min text-center max-w-max p-4 text-[12px] ">{reservation.money}</td>
            <td className="font-medium py-2 w-full text-center p-4 text-[12px] flex items-center justify-center ">
              <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg text-black/60 bg-green-500/50"><Check size={20} /></span>
              <span className="p-2 rounded-lg text-black/60 bg-red-500/50"><X size={20} /></span>
            <button onClick={()=>{setDeleteReservationId(index)}}><Trash size={20}  className="" /></button>
              </div>
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

export default OnlineBookingsTable
