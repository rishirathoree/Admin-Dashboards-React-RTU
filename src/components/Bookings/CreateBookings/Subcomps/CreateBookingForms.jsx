import React from 'react'
import { ImageUploader } from '../../../Layout';
const CreateBookingForms = () => {
    const bookingFormFields = [
        'First Name',
        'Last Name',
        'Email',
        'Phone Number',
        'Check-in Date',
        'Check-out Date',
        'Number of Guests',
    ];

  return (
    <>
   <div className='space-y-4'>
   <div className='grid grid-cols-3 gap-4'>
        {bookingFormFields.map((item,idx)=>{
            return (
            <div className='space-y-2'>
            <label for={item} className="block text-[12px] font-medium text-gray-700 dark:text-white">{item}</label>
            <input
            type={item.startsWith('Check') ? 'date' : 'text'}
            id={item} 
            className="ring-[1px] ring-black/5 w-full p-3 text-[12px] rounded-lg focus:outline-none focus:ring-black/20 duration-500 outline-none" 
             placeholder={`Enter ${item}`} required />
        </div>
            )
        })}
    </div>
  <span className='space-y-2 block'>
  <p className='font-semibold text-[12px]'>Upload Customer ID</p>
  <ImageUploader />
  </span>
  <span className='inline-block space-x-2'>
  <button type="button" class="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Create Booking</button>
  <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Cancel</button>

  </span>
   </div>
    </>
  )
}

export default CreateBookingForms
