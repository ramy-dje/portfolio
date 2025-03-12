import React from 'react'
import { theBlack } from '../utils/colors'

function NextProject() {
  return (
    <div className='w-full h-screen text-white relative' style={{backgroundColor:theBlack}}>
        <p className='text-center text-lg pt-28'>next project</p>
        <p className='text-center text-5xl pt-8'>Project two</p>
        <div className='flex flex-col items-center mt-20'>
            <div className='md:w-[350px] w-[250px]  h-[150px] bg-gray-500 '></div>
            <div className='md:w-5/6 w-11/12 h-[1px] bg-gray-400 '></div>
            <button className='bg-transparent mt-24 w-64 h-16 rounded-full border border-white'>check it</button>
        </div>
       
      
       
    </div>
  )
}

export default NextProject