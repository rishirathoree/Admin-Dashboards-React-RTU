import React, { useEffect, useRef, useState } from 'react'
import {CaretDown} from 'phosphor-react'

const CalenderDownloadFormatDropdown = () => {
    const [show,setShow] = useState(false)

    const imageRef = useRef()
    const boxRef = useRef()

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (boxRef.current && show && !boxRef.current.contains(e.target) && !imageRef.current.contains(e.target)) {
          setShow(false);
        }
      };
  
      window.addEventListener('click', handleClickOutside);
  
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, [show]);

  return (
    <div className='relative'>
        <button onClick={()=>{setShow(p=>!p)}} ref={imageRef} type="button" class="text-gray-900 h-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2 flex items-center gap-1">
        <p className='font-medium text-[12px]'>Download</p>
        <CaretDown size={14}/>
        </button>
        <div ref={boxRef} className={`absolute duration-200 top-12 right-0 w-full h-min bg-white rounded-lg shadow-lg 
        ${show ? 'visible opacity-100 translate-y-0' : '-translate-y-4 invisible opacity-0'}
        `}>
          <li className='list-none hover:bg-gray-50 cursor-pointer p-2 text-center'><p className='font-medium text-[12px]'>CSV</p></li>
          <li className='list-none hover:bg-gray-50 cursor-pointer p-2 text-center'><p className='font-medium text-[12px]'>XLS</p></li>
          <li className='list-none hover:bg-gray-50 cursor-pointer p-2 text-center'><p className='font-medium text-[12px]'>PDF</p></li>
        </div>
    </div>
  )
}

export default CalenderDownloadFormatDropdown