import React from 'react'
import ReserverDetailModal from './SubComps/ReserverDetailModal'
import CalenderViewer from './SubComps/CalenderViewer'
import { CalenderTops } from './SubComps/Index'
const Calendar = () => {
  return (
    <>
      <div className='space-y-4'>
        <CalenderTops />
        <CalenderViewer />
      </div>
    </>
  )
}

export default Calendar