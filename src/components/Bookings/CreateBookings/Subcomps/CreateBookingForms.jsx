import React, { useState } from 'react'
import { ImageUploader } from '../../../Layout';
import { CreatedBookingModal } from './Index';
import Select from 'react-select'
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
  const optionsrrom = [
    { value: 'standard', label: 'Standard' },
    { value: 'deluxe', label: 'Deluxe' },
    { value: 'suite', label: 'Suite' }
];

  const options = [
    { value: '1000', label: '1000' },
    { value: '1001', label: '1001' },
    { value: '1002', label: '1002' }
  ];

  const [handleSendSubmitted, setHandleSendSubmitted] = useState(false)

  return (
    <>
      <div className='space-y-4'>
        <div className='grid grid-cols-3 gap-4'>
          {bookingFormFields.map((item, idx) => {
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
        
        <div className='grid grid-cols-2 gap-4'>

        <div className='space-y-2'>

        <p className="block text-[12px] font-medium text-gray-700 dark:text-white">Room Type</p>
            <Select options={optionsrrom} className='text-[12px]' />
        </div>

        <div className='space-y-2'>
        <p className="block text-[12px] font-medium text-gray-700 dark:text-white">Room Number</p>
            <Select options={options} className='text-[12px]' />
        </div>

        </div>

        <span className='space-y-2 block'>
          <p className='font-semibold text-[12px]'>Upload Customer ID</p>
          <ImageUploader />
        </span>
        <span className='inline-block space-x-2'>
          <button onClick={() => { setHandleSendSubmitted(p => !p) }} type="button" class="focus:outline-none text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Create Booking</button>
          <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Cancel</button>

        </span>
      </div>

      {handleSendSubmitted && <CreatedBookingModal onCancel={() => { setHandleSendSubmitted(false) }} />}
    </>
  )
}

export default CreateBookingForms
