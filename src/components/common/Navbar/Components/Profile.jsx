import React, { useEffect, useRef, useState } from 'react'
import profile from '../../../../assets/images/profile.avif'
const Profile = () => {
    const [show,setShow] = useState(false)
    useEffect(()=>{},[])
    const boxRef = useRef()
    const imageRef = useRef()

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
    <div>
      <div className='relative'>
        <div ref={imageRef} onClick={()=>{setShow(p=>!p)}} className='w-max p-1 cursor-pointer items-center flex min overflow-hidden rounded-md ring-1 ring-black/5 text-[12px] text-white font-semibold capitalize tracking-tighter'>
            <img src={profile} className='object-cover w-8 h-8' alt="" />
            <p className='font-semibold select-none text-black text-[10px]'>Rishi Rathore</p>
        </div>
        <div ref={boxRef} className={`w-40 top-12 right-0 bg-white ring-1 ring-black/5 shadow-xl rounded-lg shadow-black/5 py-2 absolute h-min duration-200
        ${show ? 'visible opacity-100 scale100 translate-y-0' : '-translate-y-4 scal-75 invisible opacity-0'}`}>
        <ul>
          <li className='cursor-pointer hover:bg-gray-100/60 duration-500 text-[12px] font-light p-2'><p className=''>My Account</p></li>
          <li className='cursor-pointer hover:bg-gray-100/60 duration-500 text-[12px] font-light p-2'><p className=''>Revenue</p></li>
          <li className='cursor-pointer hover:bg-gray-100/60 duration-500 text-[12px] font-light p-2'><p className=''>Bookings</p></li>
          <li className='cursor-pointer hover:bg-gray-100/60 duration-500 text-[12px] font-light p-2'><p className=''>Logout</p></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
