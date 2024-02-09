import React from 'react'
import { AreaChart, Button, Statistic } from 'keep-react'
import {BookBookmark,Robot,CloudCheck,PersonSimpleRun,PersonSimpleWalk} from 'phosphor-react'

const Cards = () => {
  return (
    <div className='grid grid-cols-4 gap-4 p-4 bg-white'>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic>
      <BookBookmark size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Booked</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{37}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
      </div>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic iconBg='primary'>
      <PersonSimpleWalk size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Available Rooms</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{77}</Statistic.Amount>
      </div>
    </Statistic>
      </div>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic >
      <CloudCheck size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Check In</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{7381237}</Statistic.Amount>
      </div>
    </Statistic>
      </div>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic >
      <PersonSimpleRun size={20}/>
      <Statistic.Title ><p className='font-medium text-sm'>Check Out</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
      </div>

      </div>
  )
}

export default Cards