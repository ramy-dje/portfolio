import React,{useRef,useState} from 'react'
import { theRed } from '../utils/colors'
import { motion } from 'framer-motion';
import Magnetic from '../utils/Magnetic';

function MagneticButton({title,isSMall=false}) {


  return (
    <Magnetic modify={0.9}>
    <button className='text-white rounded-full font-light text-lg cursor-pointer' style={{backgroundColor:theRed,height:isSMall?'150px':'180px',width:isSMall?'150px':'180px'}}>
        {title}
    </button>
    </Magnetic>
  )
}

export default MagneticButton