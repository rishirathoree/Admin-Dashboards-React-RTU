import { DatePicker } from 'keep-react'
import React, { useState } from 'react'
const DateCalender = () => {
    const [rangeDate,setRangeDate] = useState(null)
  return (
        <DatePicker showTwoMonth={true} className='pr-12 py-2 flex text-[10px] placeholder:text-[10px]' iconStyle='none' rangeDate={setRangeDate} placeholder="Start - Finish">
      <DatePicker.Range />
    </DatePicker>
  )
}

export default DateCalender