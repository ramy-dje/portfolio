import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { theBlack, theRed } from '../utils/colors';
import { projects } from '../utils/info';

function Projects() {
  const navigate = useNavigate();

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
      <div className="mb-16">
        {/* Top meta row */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-black">
            <span>Work</span>
            <span>({projects.length < 10 ? `0${projects.length}` : projects.length})</span>
          </div>
          <div className="mt-2 h-px w-full bg-black"></div>
        </div>

        {/* Header layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[80px] leading-[0.9] uppercase font-semibold tracking-tight text-black">
              Selected Projects.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="sm:text-lg text-black/60 max-w-3xl">
              A selection of my recent work, showcasing full-stack solutions
              built for real products.
            </p>
          </div>
        </div>
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
              setShowLabel(true);
            }}
            onMouseLeave={() => {
              manageModal(false, i);
              setShowLabel(false);
            }}
            onClick={() => navigate(`/project/${project.name}`)}
            className="group cursor-none border-b border-black/10 pb-8 md:pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            {/* Mobile image */}
            <img
              src={project.images[0]}
              alt={project.name}
              className="block md:hidden w-full h-[220px] object-cover rounded-md"
            />

            {/* Project Title */}
            <motion.div
              variants={{
                initial: { opacity: 1, x: 0 },
                hover: { opacity: 0.6, x: -16 },
              }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              className="flex items-baseline gap-4 md:gap-6 md:ml-8"
            >
              <span className="text-sm md:text-base font-medium text-black/40 tabular-nums">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl tracking-tight">
                {project.name}
              </h3>
            </motion.div>

            {/* Tech Stack */}
            <div className="flex items-center gap-2 md:mr-8 flex-wrap md:justify-end">
              {project.techStack?.map((tech, idx) => (
                tech.image ? (
                  <div key={idx} className="h-8 w-8 rounded-full bg-gray-100 p-1.5 shadow-sm flex items-center justify-center shrink-0 border border-gray-200 hover:scale-105 transition-transform" title={tech.name}>
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 border border-gray-250 shadow-sm hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: tech.color || '#f3f4f6',
                      color: tech.textColor || '#000',
                    }}
                    title={tech.name}
                  >
                    {tech.symbol || tech.name.substring(0, 2)}
                  </div>
                )
              ))}
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
              className="h-full w-full flex items-center justify-center p-6"
              style={{ backgroundColor: project.color }}
            >
              <img
                src={project.images[0]}
                alt={project.name}
                className="max-w-full max-h-full object-contain rounded shadow-md"
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
