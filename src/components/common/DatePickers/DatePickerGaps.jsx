import React, { useEffect, useRef, useState } from 'react';
import {ArrowsLeftRight,X} from 'phosphor-react'
const DatePickerGaps = ({ onSelect }) => {
  
  
``
  const [showDates, setShowDates] = useState(false);

  const boxRef = useRef();

  const imageRef = useRef();

  const [dates,setDates] = useState({from:null,to:null})

  const getDays = (day) => {
    const datee = new Date();
    datee.setDate(datee.getDate() - day);
    const fromDate = new Date().toISOString().split('T')[0];
    const toDate = datee.toISOString().split('T')[0];
    setDates({ from: toDate, to: fromDate });
    setShowDates(false)
    return toDate;
  };
  
  console.log(dates)
  const dateRanges = [
    { label: 'Today', value: ()=>{getDays(0)} },
    { label: 'Yesterday', value: ()=>{getDays(1)} },
    { label: 'Last 7 days', value:  ()=>{getDays(7)}},
    { label: 'Last 30 days', value: ()=>{getDays(30)} }
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && showDates && !boxRef.current.contains(e.target) && !imageRef.current.contains(e.target)) {
        setShowDates(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [showDates]);

  return (
    <div className='relative'>
      <h3 onClick={() => setShowDates(p => !p)} ref={imageRef} className='cursor-pointer duration-500 ring-1 ring-black/10 rounded-md px-4 py-1 font-medium text-[10px]'>
      {dates.from && dates.to && <span onClick={()=>{setDates({from:null,to:null})}} className='absolute p-[2px] hover:animate-keep-bounce ring-[1px] rounded-full ring-black/5 bg-white -left-2 -top-2'><X size={12}/></span>}
        <span className=''>
        {dates.from && dates.to ?
        <span className='flex items-center gap-2'>
           <p>{dates.from}</p> 
           <ArrowsLeftRight /> 
           <p>{dates.to}</p>
        </span>
        : 'Select Date Range'}
        </span>
      </h3>
      <ul ref={boxRef} className={`absolute w-full duration-200 top-8 shadow-xl right-0 bg-white p-1 rounded-md 
      ${showDates ? 'visible opacity-100 translate-y-0' : '-translate-y-4 invisible opacity-0'}
      `}>
        {dateRanges.map((item, idx) => (
          <li key={idx} onClick={item.value} className='list-none py-2 px-6 hover:bg-gray-50 cursor-pointer'>
            <p className='font-medium text-[10px]'>{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatePickerGaps;
