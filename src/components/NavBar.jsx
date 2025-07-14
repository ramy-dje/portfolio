import React from 'react';
import Magnetic from '../utils/Magnetic';
import { useNavigate } from 'react-router-dom';

function NavBar({ isBlack }) {
  const navigate = useNavigate();
  return (
    <div
      className=" flex justify-between p-5 text-lg  z-20"
      style={{ color: isBlack ? 'black' : 'white' }}
    >
      <div
        onClick={() => navigate('/')}
        className="flex gap-2 cursor-pointer z-20"
      >
        {/*<img src="/logo.png" alt="" />*/}
        <h1 className="text-xl">&copy; Code by Ramy</h1>
      </div>
      <div className="hidden md:block">
        <div className="flex gap-8 text-xl">
          <Magnetic>
            <a href="/#about" className="navlink ">
              About
            </a>
          </Magnetic>
          <Magnetic>
            <a href="/#skills" className="navlink">
              Skills
            </a>
          </Magnetic>
          <Magnetic>
            <a href="/#projects" className="navlink">
              Projects
            </a>
          </Magnetic>
          <Magnetic>
            <a href="/#experience" className="navlink">
              Experience
            </a>
          </Magnetic>
          <Magnetic>
            <a href="/#contact" className="navlink">
              Contact
            </a>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
