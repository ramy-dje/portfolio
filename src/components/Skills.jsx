import React,{useRef} from 'react'
import { theBlack } from '../utils/colors'
import {motion,useInView} from 'framer-motion'
import { scaleVariants, slideUp } from '../utils/animate'
import { webDevSkills,authers,databases,mobileDevSkills } from '../utils/info'

function Skills() {


  const topLeftRef = React.useRef(null);
  const topRightRef = React.useRef(null);
  const bottomLeftRef = React.useRef(null);
  const bottomRightRef = React.useRef(null);
  const descriptionRef = useRef(null);
  
  // Setting up inView for each div
  const topLeftInView = useInView(topLeftRef, { once: true, amount: 0.3 });
  const topRightInView = useInView(topRightRef, { once: true, amount: 0.3 });
  const bottomLeftInView = useInView(bottomLeftRef, { once: true, amount: 0.3 });
  const bottomRightInView = useInView(bottomRightRef, { once: true, amount: 0.3 });
  const descriptionInView = useInView(descriptionRef,{once:true,amount:0.3})

  const description = 'With this technology stack, I develop and deliver high-quality solutions that add value to your business'
  const words = description.split(/\s+/);
  return (
    <section id='skills' className='p-4 md:p-8 lg:p-16 flex md:flex-row flex-col items-center lg:gap-16 md:gap-8 ' style={{backgroundColor:theBlack}}> 
        <div className='md:w-7/6'>
        <div className="flex">
        <motion.div 
          ref={topLeftRef}
          initial="hidden"
          animate={topLeftInView ? "visibleTopLeft" : "hidden"}
          variants={scaleVariants}
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] py-2 lg:h-[250px] flex items-center flex-wrap justify-center  bg-white "
        >
       
            {
              webDevSkills.map((e,i)=>(
                <img key={i} src={e.image} alt="" className='md:w-14 md:h-14 p-2 h-10 w-10 inline'  />
              ))
            }
  
        </motion.div>
        <motion.div 
          ref={topRightRef}
          initial="hidden"
          animate={topRightInView ? "visibleBottom" : "hidden"}
          variants={scaleVariants}
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] bg-white flex items-center flex-wrap justify-center"
        >
         
            {
              databases.map((e,i)=>(
                <img key={i} src={e.image} alt="" className='md:w-14 md:h-14 p-2 h-10 w-10 inline'  />
              ))
            }
    

        </motion.div>
      </div>
      <div className="flex">
        <motion.div 
          ref={bottomLeftRef}
          initial="hidden"
          animate={bottomLeftInView ? "visibleTop" : "hidden"}
          variants={scaleVariants}
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] bg-white flex items-center flex-wrap justify-center"
        >
      
            {
              mobileDevSkills.map((e,i)=>(
                <img key={i} src={e.image} alt="" className='md:w-14 md:h-14 p-2 h-10 w-10 inline'  />
              ))
            }

        </motion.div>
        <motion.div 
          ref={bottomRightRef}
          initial="hidden"
          animate={bottomRightInView ? "visibleBottomRight" : "hidden"}
          variants={scaleVariants}
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] bg-white flex items-center flex-wrap justify-center"
        >
    
            {
              authers.map((e,i)=>(
                <img key={i} src={e.image} alt="" className='md:w-14 md:h-14 p-2 h-10 w-10 inline'  />
              ))
            }

        </motion.div>
      </div>
        </div>

        <div ref={descriptionRef}>
          {
            words.map((word,index)=>(
              <motion.span
              key={index}
              custom={index}
              variants={slideUp}
              initial="initial"
              animate={descriptionInView ? "animate" : "initial"}
              className="md:text-4xl text-xl text-white"
            >
              {word}{" "}
            </motion.span>
            ))
          }
        </div>
       
       
    </section>
  )
}

export default Skills