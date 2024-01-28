import React from 'react'
import Toasters from '../common/Toasters/Toasters'
import { AreaChart, Button, Statistic } from 'keep-react'
import {Buildings,CurrencyDollar,Receipt} from 'phosphor-react'

const Home = () => {

  return (
    <div className='w-full py-2 h-full'>
      <div className='grid grid-cols-4 gap-4 p-4 h-full bg-white'>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic iconBg='success'>
      <Statistic.Title ><p className='font-medium text-sm'>Members</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
      </div>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic >
      <Statistic.Title ><p className='font-medium text-sm'>Members</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
      </div>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic >
      <Statistic.Title ><p className='font-medium text-sm'>Members</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
      </div>

      <div className='ring-1 ring-black/5 h-min p-4 rounded-lg'>
      <Statistic >
      <Statistic.Title ><p className='font-medium text-sm'>Members</p></Statistic.Title>
      <div className="flex items-center gap-2">
        <Statistic.Amount className=''>{7381237}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
      </div>

      </div>
    </div>
  )
}

export default Home
