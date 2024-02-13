import React from 'react'
import { OccupancyManagerTable, PlansTop, SpecialOccassionsTable, WeeklyPlansTable } from './SubComps/Index'
const Plans = () => {
  return (
    <div>
        <PlansTop />
          <WeeklyPlansTable />
          <SpecialOccassionsTable />
          <OccupancyManagerTable />
    </div>
  )
}

export default Plans