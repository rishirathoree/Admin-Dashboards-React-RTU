import React, { useEffect, useRef, useState } from 'react'
import profile from '../../../../assets/images/profile.avif'
import {User,SignOut,Gear,Storefront} from 'phosphor-react'
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
        <div ref={boxRef} className={`w-60 top-12 right-0 bg-white ring-1 ring-black/5 shadow-xl rounded-lg shadow-black/5 absolute h-min duration-200
        ${show ? 'visible opacity-100 scale100 translate-y-0' : '-translate-y-4 scal-75 invisible opacity-0'}`}>
        <ul className='p-1'>
          
          <li className='cursor-pointer hover:bg-gray-100/60 duration-500 text-[12px] flex items-center gap-2 font-light p-2'>
            <User size={13}/>
            <p className='font-semibold text-[12px]'>My Profile</p>
          </li>

          <li className='cursor-pointer hover:bg-gray-100/60 duration-500 text-[12px] flex items-center gap-2 font-light p-2'>
            <Gear size={13}/>
            <p className='font-semibold text-[12px]'>Account Settings</p>
          </li>

          <li className='cursor-pointer hover:bg-gray-100/60 duration-500 text-[12px] flex items-center gap-2 font-light p-2'>
            <Storefront size={13}/>
            <p className='font-semibold text-[12px]'>Store Management</p>
          </li>

          <li className='cursor-pointer hover:bg-gray-100/60 duration-500 text-[12px] rounded-md flex items-center justify-center ring-1 ring-black/5 gap-2 font-light p-2'>
            <SignOut size={13}/>
            <p className='font-semibold text-[12px]'>Sign out of all accounts</p>
          </li>
          
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile
