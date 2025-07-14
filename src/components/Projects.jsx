import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { theBlack, theRed } from '../utils/colors';

function Projects() {
  const navigate = useNavigate();

  const projects = [
    { title: 'TESSAM POS', src: '/tessam/1.png', color: '#787878' },
    { title: 'VerticCity', src: '/verticCity/1.jpg', color: '#7be89f' },
    { title: 'FindDoc', src: '/findDoc/1.png', color: '#a2aefc' },
    { title: 'Shiek Shop', src: '/shiek/1.png', color: '#EFE8D3' },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showLabel, setShowLabel] = useState(false);
  const modalContainer = useRef(null);

  const manageModal = (active, index) => {
    setModal({ active, index });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (modalContainer.current) {
        modalContainer.current.style.left = `${e.clientX}px`;
        modalContainer.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="projects"
      className="md:py-16 py-10 md:px-32 px-4 text-black relative"
    >
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Projects</h2>
        <p className="text-lg md:text-xl opacity-70">
          A selection of my recent work, showcasing full-stack solutions.
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial="initial"
            whileHover="hover"
            onMouseEnter={() => {
              manageModal(true, i);
              const label = project.title.split(' ').pop();
              setShowLabel(true);
            }}
            onMouseLeave={() => {
              manageModal(false, i);
              setShowLabel(false);
            }}
            onClick={() => navigate(`/project/${project.title}`)}
            className="group cursor-none border-b border-gray-600 pb-8 md:pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            {/* Mobile image */}
            <img
              src={project.src}
              alt={project.title}
              className="block md:hidden w-full h-[220px] object-cover rounded-md"
            />

            {/* Project Title */}
            <motion.h3
              variants={{
                initial: { opacity: 1, x: 0 },
                hover: { opacity: 0.6, x: -10 },
              }}
              className="text-3xl md:text-5xl lg:text-6xl tracking-tight md:ml-8"
            >
              {project.title}
            </motion.h3>

            {/* Tech Stack */}
            <div className="flex items-center gap-3 md:mr-8">
              <img src="/icons/reactjs.png" alt="React" className="w-7 h-7" />
              <img src="/icons/node.png" alt="Node.js" className="w-7 h-7" />
              <img src="/icons/mongo.png" alt="MongoDB" className="w-7 h-7" />
              <img src="/icons/express.png" alt="Express" className="w-7 h-7" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <motion.div
        ref={modalContainer}
        initial={{ scale: 0, x: '-50%', y: '-50%' }}
        animate={
          modal.active
            ? { scale: 1, x: '-50%', y: '-50%' }
            : { scale: 0, x: '-50%', y: '-50%' }
        }
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="h-[350px] w-[400px] fixed top-1/2 left-1/2 bg-white pointer-events-none overflow-hidden z-30 shadow-lg rounded-lg"
      >
        <div
          className="h-full w-full relative transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: modal.index * -100 + '%' }}
        >
          {projects.map((project, idx) => (
            <div
              key={`modal_${idx}`}
              className="h-full w-full flex items-center justify-center"
              style={{ backgroundColor: project.color }}
            >
              <img
                src={project.src}
                width={350}
                height={350}
                alt={project.title}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hover Circle Label */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            key="hoverLabel"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="fixed z-40 rounded-full w-20 h-20 flex items-center justify-center text-white text-base font-semibold pointer-events-none"
            style={{
              top: cursorPosition.y - 40,
              left: cursorPosition.x - 40,
              backgroundColor: theBlack,
              boxShadow: `0 0 20px rgba(0,0,0,0.4)`,
            }}
          >
            View
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
