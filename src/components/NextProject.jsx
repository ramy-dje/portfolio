import React from 'react'
import { theBlack, theRed } from '../utils/colors'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'


function NextProject({name,image}) {
  const navigate = useNavigate()
  return (
    <div className='w-full  text-white relative' style={{backgroundColor:theBlack}}>
        <p className='text-center text-lg pt-16'>next project</p>
        <p className='text-center text-5xl pt-8'>{name}</p>
        <div className='flex flex-col items-center mt-20'>
            <motion.img
              loading="lazy"
              src={image}
              alt='this image wont load'
              className="md:w-[350px] w-[250px] bg-gray-500 md:translate-y-[100px]"
              whileHover={{ y: -100 }} // Moves the image up by 10px on hover
              transition={{ type: "tween", duration: 0.3 }} // Smooth transition
            />
            <div className='md:w-5/6 w-11/12 h-[1px] bg-gray-400 z-20'></div>
            <div className='md:w-5/6 w-11/12 h-[120px] z-20 ' style={{backgroundColor:theBlack}}></div>
            <button onClick={()=>{navigate('/project/'+name);window.scrollTo(0,0)}} className="relative w-64 mb-16 h-16 rounded-full border border-white overflow-hidden group cursor-pointer">
              <span className="relative z-10 text-white">check it</span>
              <span className="absolute inset-0 rounded-full scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100" style={{backgroundColor:theRed}}></span>
            </button>
            </div>
    </div>
  )
}

export default NextProject