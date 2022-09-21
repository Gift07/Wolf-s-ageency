import React from 'react'
import Joseph from "../../assets/joseph.jpg"
import Image from 'next/image'

const TeamCard = () => {
  return (
    <div className='w-80 h-[32rem] shadow hover:shadow-xl bg-white rounded-lg'>
    <div className='w-full h-2/3'>
        <Image src={Joseph} alt="cover" width={320} height={340} className="rounded-t-lg" objectFit="cover"/>
    </div>
    <div className='w-full px-2 py-2'>
        <h1 className='text-lg font-semibold'>Martin Mwaimu</h1>
        <h1>Chief Executive Officer (C.E.O)</h1>
        <p className='my-2 text-sm text-gray-400'>
        This is a toggle button for an accordion. There is an icon
        </p>
        <button className='text-sm px-4 py-2 bg-orange-400 text-white rounded-md my-2'>
            Contact Me
        </button>
    </div>
</div>
  )
}

export default TeamCard