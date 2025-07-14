import React from 'react';
import { theBlack, theRed } from '../utils/colors';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Magnetic from '../utils/Magnetic';

function NextProject({ name, image }) {
  const navigate = useNavigate();
  return (
    <section
      className="w-full text-white relative px-4 py-24"
      style={{ backgroundColor: theBlack }}
    >
      {/* Label */}
      <p className="text-center text-sm uppercase tracking-wide text-gray-400">
        Next Project
      </p>

      {/* Project Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mt-4">
        {name}
      </h2>

      {/* Project Image */}
      <div className="flex flex-col items-center mt-20">
        <motion.img
          loading="lazy"
          src={image}
          alt="this image wont load"
          className="md:w-[350px] w-[250px] bg-gray-500 md:translate-y-[100px] rounded-t-lg"
          whileHover={{ y: -100 }} // Moves the image up by 10px on hover
          transition={{ type: 'tween', duration: 0.3 }} // Smooth transition
        />
        {/* Divider line */}
        <div className="md:w-5/6 w-11/12 h-[1px] bg-gray-400 z-20" />

        {/* Spacer below line */}
        <div
          className="md:w-5/6 w-11/12 h-[100px] z-10"
          style={{ backgroundColor: theBlack }}
        />

        {/* CTA Button */}
        <div className="mt-8">
          <Magnetic modify={0.2}>
            <button
              onClick={() => {
                navigate('/project/' + name);
                window.scrollTo(0, 0);
              }}
              className="relative w-[135px] h-[70px] rounded-full border border-white overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10 text-white font-medium tracking-wide">
                View it
              </span>
              <span
                className="absolute inset-0 rounded-full scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100"
                style={{ backgroundColor: theRed }}
              />
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

export default NextProject;
