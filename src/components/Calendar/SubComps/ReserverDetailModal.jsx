import React, { useState } from 'react'
import {X} from 'phosphor-react'
import {WarningCancelBookingModals, WarningCheckoutBookingModals} from './Index'

const ReserverDetailModal = ({onCancel}) => {

    const [handleCancelBooking,setHandleCancelBooking] = useState({booking:false,checkout:false})

    return (
        <>
            <div className='w-full h-screen bg-black/50 fixed top-0 left-0 z-50 flex items-center justify-center'>
                <div className='w-2/4 h-min bg-white rounded-lg'>

                    <span className='px-8 py-4 border-b-[1px] block flex items-center justify-between'>
                        <p className='font-semibold text-[12px] '>Customer Details</p>
                        <X onClick={onCancel} size={20}/>
                    </span>


                    <div className='grid grid-cols-3 gap-4 px-8 py-2 place-content-center'>

                        <span className='space-y-2'>
                            <p className='font-semibold text-sm text-gray-900'>Guest Name</p>
                            <p className='font-medium text-[12px] text-gray-900'>Rishi Rathore</p>
                        </span>

                        <span className='space-y-2'>
                            <p className='font-semibold text-sm text-gray-900'>Check In</p>
                            <p className='font-medium text-[12px] text-gray-900'>25 October 2024 / 12:00 pm</p>
                        </span>

                        <span className='space-y-2'>
                            <p className='font-semibold text-sm text-gray-900'>Check Out</p>
                            <p className='font-medium text-[12px] text-gray-900'>26 October 2024 / 12:00 pm</p>
                        </span>

                        <span className='space-y-2'>
                            <p className='font-semibold text-sm text-gray-900'>Room Number</p>
                            <p className='font-medium text-[12px] text-gray-900'>100</p>
                        </span>

                        <span className='space-y-2'>
                            <p className='font-semibold text-sm text-gray-900'>Phone Number</p>
                            <p className='font-medium text-[12px] text-gray-900'>+918770501295</p>
                        </span>

                        <span className='space-y-2'>
                            <p className='font-semibold text-sm text-gray-900'>Email Address</p>
                            <p className='font-medium text-[12px] text-gray-900'>cyc@gmail.com</p>
                        </span>

                        <span className='space-y-2'>
                            <p className='font-semibold text-sm text-gray-900'>Guest Name</p>
                            <p className='font-medium text-[12px] text-gray-900'>Rishi Rathore</p>
                        </span>

                        <span className='space-y-2'>
                            <p className='font-semibold text-sm text-gray-900'>Address</p>
                            <p className='font-medium text-[12px] text-gray-900'>26,Rustom Sidhwa Marg Corner Of D.N.Road, 400001</p>
                        </span>
                    </div>

                   <span className='px-6 py-4 block border-t-[1px]'>
                   <button type="button" 
                        onClick={()=>{window.print()}}
                        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-[12px] px-5 py-2.5">Download Receipt</button>
                   </span>

                    <span className='py-4 px-8 gap-2 space-x-4 border-t-[1px] block'>
                    <button 
                    onClick={() => {
                        setHandleCancelBooking(prevState => ({ ...prevState, booking: true }));
                    }}
                     type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-[12px] px-5 py-2.5">Cancel Booking</button>
                    
                    <button 
                     onClick={() => {
                        setHandleCancelBooking(prevState => ({ ...prevState, checkout: true }));
                    }}
                    type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-[12px] px-5 py-2.5">Check out</button>
                       
                    </span>

                </div>
            </div>


            {handleCancelBooking.booking && <WarningCancelBookingModals onCancel={()=>{setHandleCancelBooking(p=>!p.booking)}} />}
            {handleCancelBooking.checkout && <WarningCheckoutBookingModals 
            onContinue={()=>{

            }} 
            active={handleCancelBooking.checkout} onCancel={()=>{setHandleCancelBooking(p=>!p.checkout)}} />}

        </>

    )
}

export default ReserverDetailModal