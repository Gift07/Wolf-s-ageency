import React from 'react'
import {IoCallSharp, IoLocationSharp} from "react-icons/io5"
import {MdEmail} from "react-icons/md"
import {AiOutlineCopyrightCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='w-screen pb-5 pt-3 bg-black text-white'>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-screen px-12 flex pt-4 pb-8  justify-between'>
                <div>
                    <h1 className='text-3xl font-semibold my-5'>The wolf's agency</h1>
                    <p className='text-gray-600 max-w-sm'>
                        Consectetur ea pariatur veniam non.Occaecat excepteur sunt pariatur
                         adipisicing do nulla ipsum irure qui cupidatat velit quis et adipisicing.
                    </p>
                    <span>
                        <h1 className='flex items-center gap-x-2 my-2'><IoCallSharp color="blue"/> +255 745 854 301</h1>
                        <h1 className='flex items-center gap-x-2 my-2'><MdEmail color="blue"/> martinezimport@gmail.com</h1>
                        <h1 className='flex items-center gap-x-2 my-2'><IoLocationSharp color="blue"/>Kigamboni, Dar Es Salaam,Tanzania</h1>
                    </span>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold my-5'>Our Links</h1>
                    <span>
                        <ul>
                            <li className='hover:text-orange-400 duration-200 cursor-pointer'>Home</li>
                            <li className='hover:text-orange-400 duration-200 cursor-pointer'>Portifolio</li>
                            <li className='hover:text-orange-400 duration-200 cursor-pointer'>About</li>
                            <li className='hover:text-orange-400 duration-200 cursor-pointer'>Services</li>
                            <li className='hover:text-orange-400 duration-200 cursor-pointer'>Clients</li>
                        </ul>
                    </span>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold my-5'>Subscribe</h1>
                    <span className='flex flex-col'>
                        <input className='p-2 h-10 w-80 outline-none bg-gray-900' placeholder='Enter email'/>
                        <button className="my-3 h-10 w-36 flex items-center justify-center bg-orange-400 text-white">
                            Subscribe
                        </button>
                    </span>
                </div>
            </div>
            <div>
                <h1 className='text-xs italic flex items-center justify-center gap-x-2'><AiOutlineCopyrightCircle/>The wolf's agency 2022</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer