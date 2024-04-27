import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='bg-hero bg-cover bg-center h-screen w-full flex p-60 ' >
      <div className=' text-white w-[50%]'>
        <h1 className='text-[64px]'>We are at the forefront of AI</h1> 
        <p className='text-[1.2rem]'>From Conserving Wildlife to Automatically Generating Caricatures- We Do It All</p>
        <Button className="bg-white text-black px-8 py-6 text-lg mt-8">
          Learn More
        </Button>
      </div>
      </div>
  )
}

export default Hero