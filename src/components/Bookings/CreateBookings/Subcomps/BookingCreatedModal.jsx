import React from 'react'
import {Storefront,CaretLeft} from 'phosphor-react'

const BookingCreatedModal = ({onCancel}) => {
  return (
    <div className='fixed top-0 left-0 h-screen z-50 bg-black/40 w-full flex items-center justify-center'>
        <div className='animate-keep-bounce  w-1/3 h-min rounded-lg bg-white flex flex-col py-8 items-center justify-evenly'>

            <span className='submissionInner flex items-center justify-center py-12'>
                <span className='block w-24 h-24 rounded-full bg-red-400 flex items-center animate-bounce justify-center text-white'><Storefront size={32} /></span>
            </span>

            <span className='block space-y-2'>
            <p className='font-bold uppercase text-center text-lg'>Booking Successful</p>
            <p className='font-semibold text-[12px] text-gray-600 p-4 text-center'>You will soon receive a booking voucher via email and WhatsApp</p>
            </span>

            <button onClick={onCancel} type="button" class="focus:outline-none text-white bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 flex items-center gap-1">
                <CaretLeft size={20}/>
                <p>Go Back</p>
            </button>

        </div>
    </div>
  )
}

export default BookingCreatedModal