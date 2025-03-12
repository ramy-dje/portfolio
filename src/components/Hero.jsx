import React from 'react'
import { theGray } from '../utils/colors'
import NavBar from './NavBar'

function Hero() {
  return (
    <section className={` h-screen flex flex-col relative`} style={{ backgroundColor: theGray }}>
      <NavBar />
        <div className='flex flex-col md:justify-center justify-end pb-8 md:pb-0 flex-grow text-white ml-2 md:ml-16'>
          <p className='lg:text-[160px] md:text-[130px] text-[90px] md:leading-24 leading-12 z-10'>Hi, I am</p>
          <p className='lg:text-[160px] md:text-[130px] text-[90px] z-10'>Software</p>
          <p className='lg:text-[160px] md:text-[130px] text-[90px] md:leading-24 leading-12 z-10'>Engineer</p>
        </div>
        <img src="ramy.png" alt="" className='md:h-screen h-[90%] absolute bottom-0  right-0 md:right-44  sm:right-[-40px]  object-cover' />
        <div className='text-white absolute md:top-[60%] top-[40%] md:text-xl text-md left-4 md:left-auto md:right-6 lg:right-16'>
          <p>Located in</p>
          <div className='flex flex-row items-baseline '> 
            <img  src="location.png" alt="" className='md:w-8 w-6 animate-move-up-down' />
            <p>Constantine ,Algeria</p>
          </div>
         
        </div>
     
    </section>
  )
}

export default Hero