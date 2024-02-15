import React, { useEffect, useState } from 'react'
import {Storefront,X} from 'phosphor-react'
import ReactSelect from 'react-select'
import { RoomsAddedTable } from './Index'
import AllRooms from '../../AllRooms/AllRooms'
const AddRoomsModal = ({onCancel}) => {

    // const optionsAvailablity = [
    //     {label:'Available',value:'Available'},
    //     {label:'Non Available',value:'Non Available'}
    // ]

    
    const [allRooms,setAllRooms] = useState(()=>{
        const storedRooms = localStorage.getItem('allRooms');
        return storedRooms ? JSON.parse(storedRooms) : [];
    })

    useEffect(() => {
        localStorage.setItem('allRooms', JSON.stringify(allRooms));
    }, [allRooms])
    
    const [currentAddingRoom,setCurrentAddingRoom] = useState({
        roomNumber: '', 
        roomArea: '', 
        MaximumOccupanciesAdult: '', 
        MaximumOccupanciesChild: ''
    })
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setCurrentAddingRoom((p)=>({...p,[name]:value}))
    }

    const [errorMessage,setErrorMessage] = useState([])
    useEffect(()=>{errorMessage.length > 0 && setTimeout(() => {
        setErrorMessage([])
    }, 5000)},[errorMessage])

    const handleAddOneRoom = () => {
        let errors = [];
    
        for (const [key, value] of Object.entries(currentAddingRoom)) {
            if (value === '') {
                errors.push(key);
            }
        }
    
        if (errors.length > 0) {
            setErrorMessage(errors);
            return;
        }
    
        setAllRooms((prevRooms) => ([...prevRooms, {...currentAddingRoom,id:allRooms.length + 1}]));
    
        setCurrentAddingRoom({
            roomNumber: '', 
            roomArea: '', 
            MaximumOccupanciesAdult: '', 
            MaximumOccupanciesChild: ''
        });
    }

    console.log(allRooms)
  return (
    <div className='flex items-center justify-center w-full h-screen bg-black/30 fixed top-0 left-0 z-50  '>
       
        <div className='w-4/5 max-h-4/5 space-y-4 relative bg-white rounded-lg overflow-y-auto overflow-hidden custom-scroll'>

            <span className='flex items-center justify-between p-4 border-b-[1px]'>
                <p className='font-semibold text-sm'>Add Rooms</p>
                <X onClick={onCancel} size={20} />
            </span>

            <div className='grid grid-cols-5 gap-4 p-4 items-start'>
            
            <div className='space-y-2'>
                <label htmlFor='RoomNo' className="block text-[12px] font-medium text-gray-700 dark:text-white">Room Number</label>
                <input
                  type='number'
                  id='RoomNo'
                  name='roomNumber'
                  onChange={handleChange}
                  value={currentAddingRoom.roomNumber}
                  className="ring-[1px] ring-black/5 w-full p-3 text-[12px] rounded-lg focus:outline-none focus:ring-black/20 duration-500 outline-none"
                  placeholder={`Enter Room Number`} required />
                  {errorMessage.includes('roomNumber') && <p className='font-semibold text-red-400 text-[12px]'>Please fill the required fields.</p> }
            </div>

            <div className='space-y-2'>
                <label htmlFor='Area' className="block text-[12px] font-medium text-gray-700 dark:text-white">Area</label>
                <input
                  type='number'
                  id='Area'
                  onChange={handleChange}
                  value={currentAddingRoom.roomArea}
                  name='roomArea'
                  className="ring-[1px] ring-black/5 w-full p-3 text-[12px] rounded-lg focus:outline-none focus:ring-black/20 duration-500 outline-none"
                  placeholder={`Enter Area SQFT`} required />
                  {errorMessage.includes('roomArea') && <p className='font-semibold text-red-400 text-[12px]'>Please fill the required fields.</p> }
            </div>

            <div className='space-y-2'>
                <label htmlFor='MaximumOccupanciesAdult' className="block text-[12px] font-medium text-gray-700 dark:text-white">Maximum Occupancies</label>
                <input
                  type='number'
                  name='MaximumOccupanciesAdult'
                  onChange={handleChange}
                  value={currentAddingRoom.MaximumOccupanciesAdult}
                  id='MaximumOccupanciesAdult'
                  className="ring-[1px] ring-black/5 w-full p-3 text-[12px] rounded-lg focus:outline-none focus:ring-black/20 duration-500 outline-none"
                  placeholder={`Enter Maximum Adult`} required />
                  {errorMessage.includes('MaximumOccupanciesAdult') && <p className='font-semibold text-red-400 text-[12px]'>Please fill the required fields.</p> }
            </div>

            <div className='space-y-2'>
                <label htmlFor='MaximumOccupanciesChild' className="block text-[12px] font-medium text-gray-700 dark:text-white">Maximum Occupancies</label>
                <input
                  type='number'
                  name='MaximumOccupanciesChild'
                  onChange={handleChange}
                  value={currentAddingRoom.MaximumOccupanciesChild}
                  id='MaximumOccupanciesChild'
                  className="ring-[1px] ring-black/5 w-full p-3 text-[12px] rounded-lg focus:outline-none focus:ring-black/20 duration-500 outline-none"
                  placeholder={`Enter Maximum Children`} required />
                  {errorMessage.includes('MaximumOccupanciesChild') && <p className='font-semibold text-red-400 text-[12px]'>Please fill the required fields.</p> }
            </div>

            {/* <div className='space-y-2'>
            <label htmlFor='optionsAvailablity' className="block text-[12px] font-medium text-gray-700 dark:text-white">Select Available Status</label>
              <ReactSelect id='optionsAvailablity' options={optionsAvailablity} className='text-[12px]' placeholder='Select Availablity' />
            </div> */}

            {/* add room button */}
            <button onClick={handleAddOneRoom} type="button" class=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 mt-3 h-min">Submit</button>

            </div>
            
            {allRooms.length > 0 
            ?
            <div className='px-4'>
                <RoomsAddedTable 
            deleteRoom = {
            (id)=>{
                const filterRooms = allRooms.filter((item)=>{return item.id !== id})
                setAllRooms(filterRooms)
            }
             }
            rooms={allRooms} />
            </div>
            :
            <div className='p-4 flex items-center flex-col justify-center py-20'>
                <Storefront size={100}/>
                <p className='font-semibold text-[12px]'>Add Rooms</p>
            </div> }

            {allRooms.length > 0 &&
            
            <div onClick={onCancel} className='sticky bottom-0 left-0 z-50 w-full bg-white p-4 border-y-[1px]'>
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-3">Submit</button>
            </div>
            }

        </div>


    </div>
  )
}

export default AddRoomsModal