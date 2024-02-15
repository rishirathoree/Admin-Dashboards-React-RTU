import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { ImageUploader } from '../../../Layout'
import { RoomSubmissionModal } from './Index'
import AddRoomsModal from './AddRoomsModal'
import AllRoomsTable from '../../AllRooms/SubComps/AllRoomsTable'
import AddRoomsTable from './AddRoomsTable'

const CreateRoomForms = () => {

  const typeSelect = ['Room Type', 'Occupancies', 'Room Size', 'Price', 'Discount Type', 'Status']

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

  const [handleSendSubmitted, setHandleSendSubmitted] = useState(false)

  const [addRooms,setAddRooms] = useState(false)

  const [allRoomsData,setAllRoomsData] = useState(()=>{
    const storedRooms = localStorage.getItem('allRooms');
        return storedRooms ? JSON.parse(storedRooms) : [];
  })

  useEffect(() => {
    const storedRooms = localStorage.getItem('allRooms');
    setAllRoomsData(storedRooms ? JSON.parse(storedRooms) : []);
}, [addRooms]);


  useEffect(() => {
    localStorage.setItem('allRooms', JSON.stringify(allRoomsData));
}, [allRoomsData]);


  return (
    <>
      <div className='py-2 pb-4 w-full'>
        <div className='h-full bg-white p-6 space-y-8'>

          {/* selects */}
          <span className='block space-y-4'>
            <p className='font-semibold tracking-tight text-lg'>Price</p>
            <div className='grid grid-cols-2 gap-4'>

              <div className='space-y-2'>
                <label htmlFor='price' className="block text-[12px] font-medium text-gray-700 dark:text-white">Price</label>
                <input
                  type='text'
                  id='price'
                  className="ring-[1px] ring-black/5 w-full p-3 text-[12px] rounded-lg focus:outline-none focus:ring-black/20 duration-500 outline-none"
                  placeholder={`Enter price`} required />
              </div>

              <div className='space-y-2'>
                <label htmlFor='Percentage' className="block text-[12px] font-medium text-gray-700 dark:text-white">Percentage</label>
                <input
                  type='text'
                  id='Percentage'
                  className="ring-[1px] ring-black/5 w-full p-3 text-[12px] rounded-lg focus:outline-none focus:ring-black/20 duration-500 outline-none"
                  placeholder={`Enter Percentage`} required />
              </div>

              <div className='space-y-2'>

                <label className="block text-[12px] font-medium text-gray-700 dark:text-white">Select Discount</label>
                <span className='flex gap-4'>

                  <div class="flex items-center gap-2 p-2 rounded ring-[1px] ring-black/10">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" checked class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label for="default-radio-1" class="text-[12px] font-medium text-gray-900 dark:text-gray-300">Yes</label>
                  </div>
                  <div class="flex items-center gap-2 p-2 rounded ring-[1px] ring-black/10">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                    <label for="default-radio-2" class="text-[12px] font-medium text-gray-900 dark:text-gray-300">No</label>
                  </div>

                </span>

              </div>

            </div>
          </span>

          {/* //Rooms Detailing  */}
          <div className='flex items-center gap-2'>

            <button type="button" onClick={()=>{setAddRooms(true)}} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-[12px] px-5 py-2.5">Add Rooms</button>
            
            <div className=''>
              <Select options={options} className='text-[12px]' placeholder='Select Category' />
            </div>

          </div>

          {allRoomsData.length > 0 && <AddRoomsTable
          deleteRoom={(id)=>{
            const r = allRoomsData.filter((item,idx)=>{return item.id !== id})
            setAllRoomsData(r)
          }}
          rooms={allRoomsData} />}

          {/* <div className='grid grid-cols-4 gap-8'>
      {typeSelect.map((item,i)=>{
        return (
            <label htmlFor="roomType" className='block space-y-1'>
        <p className='font-medium text-[10px]'>{item}</p>
        <Select className='text-[12px]' id='roomType' options={options} />
      </label>
        )
      })}
      </div> */}

          <div className='space-y-4'>
            <p className='font-semibold tracking-tight text-lg'>Amenities</p>
            <div className='grid grid-cols-6 gap-4 '>
              {amenities.map((item, idx) => {
                return (
                  <div className="flex items-center space-x-2">
                    <input id={item} type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500/20 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for={item} className="w-full text-[12px] font-medium text-gray-900 dark:text-gray-300">{item}</label>
                  </div>
                )
              })}
            </div>
          </div>

          <ImageUploader />

          <div className='space-x-2'>
            <button onClick={() => { setHandleSendSubmitted(true) }} type="button" className="text-white bg-red-400 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Add Room</button>
            <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Cancel</button>
          </div>
        </div>
      </div>

      {addRooms && <AddRoomsModal onCancel={()=>{setAddRooms(false)}} /> }
      {handleSendSubmitted && <RoomSubmissionModal onCancel={() => { setHandleSendSubmitted(false) }} />}
    </>
  )
}

export default CreateRoomForms