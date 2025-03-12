import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();
    const titleVariants = {
        initial: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        hover: {
            opacity: 0.6,
            x: -10,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    const projects = [
        { title: "VerticCity", src: "/verticCity/1.jpg",color:"#7be89f"  },
        { title: "TESSAM POS", src: "/tessam/1.png", color: "#787878" },
        { title: "FindDoc", src: "/findDoc/1.png", color: "#a2aefc" },
        { title: "Shiek Shop", src: "/shiek/1.png", color: "#EFE8D3" }
    ];
      
    const scaleAnimation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
        closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
    };
    
    const [modal, setModal] = useState({ active: false, index: 0 });
    const { active, index } = modal;
    const modalContainer = useRef(null);
    
    const manageModal = (active, index) => {
        setModal({ active, index });
    };      

    // Add mouse tracking for cursor elements
    useEffect(() => {
        const handleMouseMove = (e) => {
            if(modalContainer.current){
                modalContainer.current.style.left = `${e.clientX}px`;
                modalContainer.current.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id='projects' className='md:p-16 p-4'>
            <p className='text-gray-400 mb-2'>recent projects</p>
            
            {/* Project list */}
            {projects.map((project, i) => (
                <motion.div 
                    key={i}
                    initial="initial"
                    whileHover="hover"  
                    className='flex flex-col md:flex-row justify-between items-center md:h-[200px] border-b border-gray-400 md:py-4 cursor-pointer'
                    onMouseEnter={() => manageModal(true, i)}
                    onMouseLeave={() => manageModal(false, i)}
                    onClick={() => navigate(`/project/${project.title}`)}
                >
                    <img 
                        src={`${project.src}`} 
                        alt={project.title} 
                        className='w-full h-[250px] object-cover block mb-6 md:hidden'
                    />
                    <motion.h1 
                        variants={titleVariants} 
                        className='md:ml-16 lg:text-7xl md:text-6xl text-3xl mb-2'
                    >
                        {project.title}
                    </motion.h1>
                    <ul className='flex gap-2 md:mr-16'>
                        <img src="/icons/reactjs.png" alt="" className='w-8 h-8 rounded-full'/>
                        <img src="/icons/node.png" alt="" className='w-8 h-8 rounded-full'/>
                        <img src="/icons/mongo.png" alt="" className='w-8 h-8 rounded-full'/>
                        <img src="/icons/express.png" alt="" className='w-8 h-8 rounded-full'/>
                    </ul>
                </motion.div>
            ))}
            
            {/* Modal container */}
            <motion.div
                ref={modalContainer}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? "enter" : "closed"}
                className="h-[350px] w-[400px] fixed top-1/2 left-1/2 bg-white pointer-events-none overflow-hidden z-30"
               
            >
                <div 
                    className="h-full w-full relative transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" 
                    style={{ top: index * -100 + "%" }}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={`modal_${idx}`}
                            className="h-full w-full flex items-center justify-center"
                            style={{ backgroundColor: project.color }}
                        >
                            <img 
                                src={`${project.src}`} 
                                width={350} 
                                height={350} 
                                alt={project.title} 
                                className='object-contain'
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;