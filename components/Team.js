import React from 'react'
import Cover from "../assets/simon.jpg"
import Image from 'next/image'
import TeamCard from './components/TeamCard'

const Team = () => {
  return (
    <div className='w-full bg-gray-100'>
      <div className='px-12'>
        <div className='my-4 pt-7'>
          <h1 className='font-semibold text-sky-400 uppercase'>Our Team</h1>
        </div>
        <div className='my-3'>
          <h1 className='text-4xl font-semibold'>The best Technical Team</h1>
          <hr className='w-44 border border-orange-400 mt-3 bg-orange-400'/>
        </div>
        <div className='w-full flex flex-col px-12 items-center justify-center'>
            <p className='text-sm'>
            This is a toggle button for an accordion. There is an icon on the right
            side to emphasize that it is clickable. However, when the area is not big enough, 
            the text will overlap the icon. This might happen when we don’t account for long content. A solution would be to add an 
            enough padding to the right side to accommodate for the size of the icon: No...
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <div className='grid grid-cols-3 items-center justify-center gap-x-6 my-3'>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Team