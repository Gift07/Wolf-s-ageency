import React from 'react'
import Image from 'next/image'
import Cover from "../assets/nubel.jpg"
import BlogCard from './blogCard'

const Blog = () => {
  return (
    <div className='w-full pb-4 bg-gray-100'>
        <div className='px-12 w-full pt-5'>
             <div className='mt-5 my-3'>
                <h1 className='uppercase text-md font-semibold text-sky-400'>Blog</h1>
                <h1 className='text-4xl font-semibold my-3'>Get Every Single Updates.</h1>
                <hr className='w-44 border border-orange-400 mt-3 bg-orange-400'/>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-screen flex items-center justify-center gap-x-6 py-5'>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog