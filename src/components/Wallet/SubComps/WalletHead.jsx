import React from 'react'
import DatePickerGaps from '../../common/DatePickers/DatePickerGaps'
const WalletHead = () => {
  return (
    <div className='py-4 px-6 border-b-[1px] flex items-center justify-between'>
        <p className='font-semibold text-[12px]'>Total Week Revenue</p>
        <span className='flex items-center gap-2'>
         <DatePickerGaps />
        <p className='font-semibold text-[24px]'>$238.00</p>
        </span>
    </div>
  )
}

export default WalletHead