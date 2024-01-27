import React from 'react'
import ReservationsTable from './Subcomps/ReservationsTable'
import Pagination from '../common/Pagination/Pagination'
const Reservations = () => {
  return (
    <div className='py-2 pb-4 w-full'>
      <div className='h-full bg-white'>
        <ReservationsTable />
      </div>
          <Pagination />
    </div>
  )
}

export default Reservations
