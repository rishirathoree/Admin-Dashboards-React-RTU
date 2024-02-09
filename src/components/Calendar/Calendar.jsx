import React, { useEffect, useRef, useState } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';

const Calendar = () => {
    
    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const datesArray = [];
        for (let day = 1; day <= daysInMonth; day++) {
            datesArray.push(day);
        }
        setDates(datesArray);
    }, [currentYear, currentMonth, daysInMonth]);

    return (
        <div className='w-full p-4 h-full space-y-2'>
            <p className='font-semibold text-sm'>Calender</p>

        </div>
    );
};

export default Calendar;
