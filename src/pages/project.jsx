import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import MagneticButton from '../components/MagneticButton'
import NextProject from '../components/NextProject'
import { projects } from '../utils/info'

function Project() {
    
  useEffect(() => {
    // Disable scroll memory by resetting scroll position
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts

    return () => {
      // Optionally, you can reset scroll position again when the component unmounts
      window.scrollTo(0, 0);
    };
  }, []);

  const { name } = useParams()
  const project = projects.find(project => project.name === name)

  return (
    <div>
        <NavBar isBlack/>
        <div className='md:m-16 m-4'>
            <h1 className=' text-4xl'>{project.name}</h1>
            <div className='w-full flex justify-end py-2 md:px-16'>
                <img src={project.logo} alt="" className=' w-[100px]  my-4'/>
            </div>
            <p >
                {project.description.split('<br/>').map((e,i)=><span key={i}>{e}<br/></span>)}
            </p>
            <div className='flex md:flex-row flex-col justify-between mt-16'>
                <div className='md:w-7/12 w-full'>
                    <h2 className='text-xl text-gray-400 py-2 border-b-1 border-gray-400'>Tech stack</h2>
                    <div className='flex gap-1 mt-4'>
                        {project.techStack.map((tech, index) => (
                            <div className='h-10 w-10 rounded-full mx-1'>
                                <img src={tech.image} alt={tech.name} className='w-full h-full object-cover'/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='md:w-4/12 w-full mt-4 md:mt-0'>
                    <h2 className='text-xl text-gray-400 py-2 border-b-1 border-gray-400'>created at</h2>
                    <p className='mt-4 text-lg'>July@2024</p>
                </div>
            </div>

            <div className='md:mt-40 mt-16 relative'>
                <a href={project.link} target='_blank' className='absolute md:top-[-100px] top-[-150px] md:right-[-20px] right-0'>
                    <MagneticButton isSMall={window.innerWidth < 500} title={'live site'}/>
                </a>
                <img src={project.images[0]} alt="" className='bg-gray-500 w-full'/>
            </div>
            {project.images.slice(1).map((image, index) => (
                <img src={image} alt="" className='bg-gray-500 w-full  mt-8'/>
            ))}
        </div>
        <NextProject />
    </div>
  )
}

export default Project