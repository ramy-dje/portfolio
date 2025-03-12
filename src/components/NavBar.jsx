import React from 'react'
import Magnetic from '../utils/Magnetic'
import { useNavigate } from 'react-router-dom'

function NavBar({isBlack=false}) {
  const navigate = useNavigate()
  return (
    <div className=' flex justify-between p-5 text-lg  z-20' style={{color:isBlack?'black':'white'}}>
        <div onClick={()=>navigate('/')} className='flex gap-2 cursor-pointer z-20'>
            <img src="/logo.png" alt="" />
            <h1 className='font-[600] '>Djebeli Ramy</h1>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4">
            <Magnetic >
              <a href="#about" className="navlink ">about</a>
            </Magnetic>
            <Magnetic>
              <a href="#skills" className="navlink">skills</a>
            </Magnetic>
            <Magnetic>
              <a href="#projects" className="navlink">projects</a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="navlink">contact</a>
            </Magnetic>
          </div>
        </div>
        <div className='block md:hidden'>
          <p className='navlink'>Menu</p>
        </div>

    </div>
  )
}

export default NavBar