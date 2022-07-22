import React from 'react'
import Cover from "../assets/simon.jpg"
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full h-[30rem] text-white bg-black flex items-center justify-center'>
        <div className='w-full h-full grid grid-cols-2 items-center justify-center'>
            <div className='w-full h-full'>
                <div className='w-full my-2 pl-12 pr-2'>
                <div className='my-4 pt-7'>
                    <h1 className='font-semibold text-sky-400 uppercase'>About Us</h1>
                  </div>
                  <div className='my-3'>
                    <h1 className='text-4xl font-semibold'>Get to know us more</h1>
                    <hr className='w-44 border border-orange-400 mt-3 bg-orange-400'/>
                  </div>
                    <p className='my-3'>
                        his online generator helps with creating shapes for images using the css clip-path property. Select from a range of preset shapes or create a custom shape, you'll then be able to get the desired look by moving the points over the image, once you have the perfect shape the css code is automatically generated for you. If you wish, you can upload your own image to use.
                        All credit for the code of this generator goes to Bennett Feely.
                    </p>
                    <button className='px-4 py-2 bg-orange-500 text-white'>
                        Learn More
                    </button>
                </div>
            </div>
            <div className='w-full h-full'>
                <span className='w-full h-[30rem] flex items-center'>
                    <Image src={Cover} alt="cover" layout='intrinsic' objectFit='cover'/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default About