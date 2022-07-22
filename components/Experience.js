import React from 'react'
import {BsPeople} from "react-icons/bs"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {FiAward} from "react-icons/fi"
import {SiCoffeescript} from "react-icons/si"

const Experience = () => {
  return (
    <div className='w-screen h-80 flex items-center justify-center bg-black text-white'>
        <div className='flex items-center justify-center px-12'>
            <div className='flex items-center justify-centerw gap-x-4'>
                <div className='flex p-2 items-center gap-x-3'>
                    <span className='py-2 text-7xl'>
                        <BsPeople/>
                    </span>
                    <span className='text-center'>
                        <h1 className='text-2xl font-boldw'>250 +</h1>
                        <h1>Client's Served</h1>
                    </span>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center px-12'>
            <div className='flex items-center justify-centerw gap-x-4'>
                <div className='flex p-2 items-center gap-x-3'>
                    <span className='py-2 text-7xl'>
                        <AiOutlineFundProjectionScreen/>
                    </span>
                    <span className='text-center'>
                        <h1 className='text-2xl font-boldw'>250 +</h1>
                        <h1>Projects done</h1>
                    </span>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center px-12'>
            <div className='flex items-center justify-centerw gap-x-4'>
                <div className='flex p-2 items-center gap-x-3'>
                    <span className='py-2 text-7xl'>
                        <FiAward/>
                    </span>
                    <span className='text-center'>
                        <h1 className='text-2xl font-boldw'>250 +</h1>
                        <h1> Get Awards  </h1>
                    </span>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center px-12'>
            <div className='flex items-center justify-centerw gap-x-4'>
                <div className='flex p-2 items-center gap-x-3'>
                    <span className='py-2 text-7xl'>
                        <SiCoffeescript/>
                    </span>
                    <span className='text-center'>
                        <h1 className='text-2xl font-boldw'>250 +</h1>
                        <h1>Cup's of Coffee</h1>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience