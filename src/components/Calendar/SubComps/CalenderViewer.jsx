import React, { useState } from 'react';
import { ReserverDetailModalsPop } from './Index';
const CalenderViewer = () => {

  const [selectedCustomer,setSelectedCustomer] = useState(null)

  const calendarData = [
    {
      id: 1,
      fromDate: new Date(2024, 1, 1),
      toDate: new Date(2024, 1, 5),
      customerName: "John Doe",
      roomNumber: "101"
    },
    {
      id: 3,
      fromDate: new Date(2024, 1, 10),
      toDate: new Date(2024, 1, 12),
      customerName: "John Doe",
      roomNumber: "101"
    },
    {
      id: 34,
      fromDate: new Date(2024, 1, 1),
      toDate: new Date(2024, 1, 5),
      customerName: "John Doe",
      roomNumber: "102"
    },
    {
      id: 23,
      fromDate: new Date(2024, 1, 12),
      toDate: new Date(2024, 1, 14),
      customerName: "John Doe",
      roomNumber: "102"
    },
    {
      id: 34,
      fromDate: new Date(2024, 1, 1),
      toDate: new Date(2024, 1, 5),
      customerName: "John Doe",
      roomNumber: "103"
    },
    {
      id: 23,
      fromDate: new Date(2024, 1, 12),
      toDate: new Date(2024, 1, 14),
      customerName: "John Doe",
      roomNumber: "103"
    },
  ];

  const getRandomColor = () => {
    const colors = ['#3A4D39', '#FFBB64', '#F9B572', '#DC84F3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `${randomColor}4D`;
  }

  const roomsArray = calendarData.reduce((acc, curr) => {
    const existingRoomIndex = acc.findIndex(room => room[0].roomNumber === curr.roomNumber);
    if (existingRoomIndex !== -1) {
      acc[existingRoomIndex].push(curr);
    } else {
      acc.push([curr]);
    }
    return acc;
  }, []);

  const [dateRange, setDateRange] = useState({ dateFrom: '2024-02-01', dateTo: '2024-02-15' });

  const getDatesBetween = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    const endDateObj = new Date(endDate);
    while (currentDate <= endDateObj) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const dateArray = getDatesBetween(dateRange.dateFrom, dateRange.dateTo);

  return (
    <>
      <div className='flex gap-4 p-4 w-full overflow-hidden overflow-x-auto'>

        <div className='mt-[68px] grid grid-cols-1 gap-4'>
          {roomsArray.map(room => room[0].roomNumber).map((item, idx) => {

            return (
              <span className='inline-block p-4 border rounded-lg'><p className='font-medium text-[12px]'>{item}</p></span>
            )
          })}
        </div>

        <div className='space-y-4 w-full'>
          {/* Dates Top */}
          <div style={{ gridTemplateColumns: `repeat(${dateArray.length}, 1fr)` }} className='grid gap-4'>
            {dateArray.map((item, idx) => {
              return (
                <span className='inline-block p-4 border rounded-lg'><p className='font-medium text-[12px]'>{item.getDate()}</p></span>
              )
            })}
          </div>

          {/* Boxes */}
          <div className='grid gap-4'>
            {roomsArray.map((calendar, idx) => {
              return (
                <div key={idx} style={{ gridTemplateColumns: `repeat(${dateArray.length}, 1fr)` }} className='grid gap-4'>
                  {calendar.map((item, idx) => {
                    const startDate = item.fromDate.getDate();
                    const endDate = item.toDate.getDate();
                    return (
                      <span
                      onClick={()=>{setSelectedCustomer(item)}}
                        key={idx}
                        style={{
                          gridColumnStart: startDate,
                          gridColumnEnd: endDate + 1,
                        }}
                        className={`p-4 bg-red-400 cursor-pointer text-white rounded-lg`}
                      >
                        <p className='font-medium text-[12px]'>{item.customerName}</p>
                      </span>
                    );
                  })}
                </div>
              );
            })}

          </div>
        </div>

      </div>
      {selectedCustomer && <ReserverDetailModalsPop onCancel={()=>{setSelectedCustomer(null)}} />  }
    </>
  )
}

export default CalenderViewer;
