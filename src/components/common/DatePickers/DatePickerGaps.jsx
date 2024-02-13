import React, { useEffect, useRef, useState } from 'react';

const DatePickerGaps = ({ onSelect }) => {
  const getToday = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
  };

  const getLastNDays = (n) => {
    const date = new Date();
    date.setDate(date.getDate() - n);
    return date.toISOString().split('T')[0];
  };

  const dateRanges = [
    { label: 'Today', value: getToday },
    { label: 'Yesterday', value: getYesterday },
    { label: 'Last 7 days', value: () => getLastNDays(7) },
    { label: 'Last 30 days', value: () => getLastNDays(30) }
  ];

  const [showDates, setShowDates] = useState(false);
  const boxRef = useRef();
  const imageRef = useRef();

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

  const handleSelect = (value) => {
    setShowDates(false);
  };

  return (
    <div className='relative'>
      <h3 onClick={() => setShowDates(p => !p)} ref={imageRef} className='cursor-pointer font-medium text-[12px]'>Select Date Range</h3>
      <ul ref={boxRef} className={`absolute w-max duration-200 top-8 shadow right-0 bg-white p-1 rounded-md 
      ${showDates ? 'visible opacity-100 translate-y-0' : '-translate-y-4 invisible opacity-0'}
      `}>
        {dateRanges.map((item, idx) => (
          <li key={idx} onClick={() => handleSelect(item.value())} className='list-none py-2 px-6 hover:bg-gray-50 cursor-pointer'><p className='font-medium text-[12px]'>{item.label}</p></li>
        ))}
      </ul>
    </div>
  );
};

export default DatePickerGaps;
