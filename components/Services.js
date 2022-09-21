import React from 'react'
import { ServiceData } from '../data/services'
import ServiceCard from './components/ServiceCard'

const Services = () => {
  return (
    <div className='w-full pb-5 overflow-x-hidden bg-gray-100'>
      <div className='px-12'>
        <div className='my-4 pt-7'>
          <h1 className='font-semibold text-sky-400 uppercase'>Our Services</h1>
        </div>
        <div className='my-3'>
          <h1 className='text-4xl font-semibold'>What we can offer you</h1>
            <hr className='w-44 border border-orange-400 mt-3 bg-orange-400'/>
          </div>
      </div>
        <div className='px-12 pt-5 w-full flex items-center justify-center'>
        </div>
        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-4 justify-center gap-x-4'>
                {ServiceData.map((data)=><ServiceCard data={data}/>)}
            </div>
        </div>
    </div>
  )
}

export default Services