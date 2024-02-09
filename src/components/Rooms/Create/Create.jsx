import React from 'react'
import Select from 'react-select'
import {ImageUploader} from '../../Layout'
const Create = () => {

    const typeSelect = ['Room Type','Occupancies','Room Size','Price','Discount Type','Status']
    const amenities = [
        "Free Wi-Fi",
        "Swimming Pool",
        "Fitness Center",
        "Room Service",
        "Concierge",
        "Spa",
        "Business Center",
        "Airport Shuttle",
        "Restaurant",
        "Bar/Lounge",
        "Valet Parking",
        "Meeting Rooms",
        "Pet Friendly",
        "Laundry Service",
        "Air Conditioning",
        "24-Hour Front Desk",
        "Gym",
        "Hot Tub",
        "Terrace",
        "Free Parking"
      ]
      const options = [
        { value: 'standard', label: 'Standard' },
        { value: 'deluxe', label: 'Deluxe' },
        { value: 'suite', label: 'Suite' }
      ];
  return (
    <div className='py-2 pb-4 w-full'>
      <div className='h-full bg-white p-6 space-y-8'>
      
      {/* selects */}
      <div className='grid grid-cols-4 gap-8'>
      {typeSelect.map((item,i)=>{
        return (
            <label htmlFor="roomType" className='block space-y-1'>
        <p className='font-medium text-[10px]'>{item}</p>
        <Select className='text-[12px]' id='roomType' options={options} />
      </label>
        )
      })}
      </div>

      <div className='space-y-4'>
        <p className='font-medium text-[10px]'>Amenities</p>
        <div className='grid grid-cols-6 gap-4 '>
        {amenities.map((item,idx)=>{
            return(
        <div class="flex items-center space-x-2">
        <input id={item} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for={item} class="w-full text-[12px] font-medium text-gray-900 dark:text-gray-300">{item}</label>
        </div>
        )
        })}
        </div>
      </div>
      <ImageUploader />

      <div className='space-x-2'>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Add Room</button>
      <button type="button" class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Cancel</button>
      </div>
      </div>
      </div>
  )
}

export default Create