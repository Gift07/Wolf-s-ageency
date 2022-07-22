import React from 'react'
import Cover from "../assets/simon.jpg"
import Image from 'next/image'

const Clients = () => {
  return (
    <div className='w-screen h-[35rem] bg-black text-white'>
        <div className='w-full flex items-center justify-center'>
            <div className='w-full h-full grid grid-cols-2 items-center justify-center'>
                <div className='h-full w-full pl-12 pr-2'>
                  <div className='my-4 pt-7'>
                    <h1 className='font-semibold text-sky-400 uppercase'>Marketing Goal</h1>
                  </div>
                  <div className='my-3'>
                    <h1 className='text-4xl font-semibold'>Make Some Noise With Us.</h1>
                    <hr className='w-44 border border-orange-400 mt-3 bg-orange-400'/>
                  </div>
                  <div className='my-3 text-sm'>
                    <p>
                        Non laborum nisi quis aute enim enim ut. Ea quis duis et velit ex excepteur ipsum. Mollit velit minim nostrud nulla culpa magna aliquip sunt in cillum excepteur esse. Dolore elit dolore pariatur nisi ullamco quis. Enim eu excepteur occaecat eiusmod duis enim occaecat.
                    </p>
                  </div>
                  <div className='mt-6 w-full'>
                    <ul className='w-full my-3'>
                        <li className='w-full my-3'>
                            <span className='text-sm font-semibold uppercase flex itewms-center justify-between'>
                                <h1>web designing</h1>
                                <h1>82%</h1>
                            </span>
                            <span className='w-full'>
                                <input type="range" min="1" max="100" value="82" className='bg-sky-400 w-full my-2'/>
                            </span>
                        </li>
                        <li className='w-full my-3'>
                            <span className='text-sm font-semibold uppercase flex itewms-center justify-between'>
                                <h1>Graphics designing</h1>
                                <h1>90%</h1>
                            </span>
                            <span className='w-full'>
                                <input type="range" min="1" max="100" value="90" className='bg-yellow-400 w-full my-2'/>
                            </span>
                        </li>
                        <li className='w-full my-3'>
                            <span className='text-sm font-semibold uppercase flex itewms-center justify-between'>
                                <h1>Branding</h1>
                                <h1>95%</h1>
                            </span>
                            <span className='w-full'>
                                <input type="range" min="1" max="100" value="95" className='bg-green-400 w-full my-2'/>
                            </span>
                        </li>
                        <li className='w-full my-3'>
                            <span className='text-sm font-semibold uppercase flex itewms-center justify-between'>
                                <h1>web designing</h1>
                                <h1>82%</h1>
                            </span>
                            <span className='w-full'>
                                <input type="range" min="1" max="100" value="82" className='bg-sky-400 w-full my-2'/>
                            </span>
                        </li>
                    </ul>
                  </div>
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-full flex items-center justify-center h-[35rem]'>
                        <Image src={Cover} alt="cover" width={400} height={500} objectFit="cover"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients