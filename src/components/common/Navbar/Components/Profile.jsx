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
        <button ref={imageRef} onClick={()=>{setShow(p=>!p)}} className='w-10 h-10 overflow-hidden rounded-full bg-blue-500 text-[12px] text-white font-semibold capitalize tracking-tighter'>
            <img src={profile} className='object-contain w-full scale-125 h-full' alt="" />
        </button>
        <div ref={boxRef} className={`w-80 top-12 right-0 bg-black/5 shadow-xl rounded-lg shadow-black/5 absolute h-80 ${show ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>
      </div>
    </div>
  )
}

export default Profile
