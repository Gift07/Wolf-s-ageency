import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div className='w-64 p-3 my-3'>
        <div className="w-full flex items-center justify-center">
            <div className='text-white bg-sky-600 p-3 text-2xl hexagon'>
             {data.icon}
            </div>
        </div>
        <div className='w-full text-md text-sky-400 my-2 font-semibold flex items-center justify-center uppercase'>
            <h1>{data.title}</h1>
        </div>
        <div className='w-full text-sm text-center'>
            <p>{data.explanation}</p>
        </div>
        <div className='w-full flex items-center justify-center'>
            <button className='text-sm px-4 py-2 my-3 bg-orange-400 rounded-md text-white'>
                Learn More
            </button>
        </div>
    </div>
  )
}

export default ServiceCard