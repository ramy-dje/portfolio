import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MagneticButton from '../components/MagneticButton';
import NextProject from '../components/NextProject';
import { projects } from '../utils/info';
import MenuTrigger from '../components/menuTrigger';

function Project() {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => window.scrollTo(0, 0);
  }, []);

  const { name } = useParams();
  const project = projects.find((p) => p.name === name);

  let projectIndex = projects.findIndex((p) => p.name === name);
  projectIndex = (projectIndex + 1) % projects.length;

  return (
    <div className="text-gray-800 bg-white min-h-screen">
      <NavBar isBlack={true} />
      <MenuTrigger />
      <div className="max-w-6xl mx-auto px-4 md:px-12 py-16">
        {/* Title and Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {project.name}
          </h1>
          <img
            src={project.logo}
            alt="logo"
            className="w-[100px] mt-6 md:mt-0"
          />
        </div>

        {/* Description */}
        <div className="text-gray-600 text-lg leading-relaxed mb-16 space-y-4">
          {project.description.split('<br/>').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* Tech and Meta Info */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Tech Stack */}
          <div className="md:w-7/12">
            <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, i) => (
                <div
                  key={i}
                  className="h-12 w-12 rounded-full bg-gray-100 p-2 shadow-sm"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Created At */}
          <div className="md:w-4/12">
            <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
              Created
            </h2>
            <p className="text-gray-600 text-lg">July 2024</p>
          </div>
        </div>

        {/* Live Site Button + Primary Image */}
        <div className="relative my-20">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="absolute xl:right-[-80px] right-0 -top-16"
          >
            <MagneticButton
              isSMall={window.innerWidth < 768}
              title={'Live Site'}
            />
          </a>
          <img
            src={project.images[0]}
            alt="Project Screenshot"
            className="w-full rounded-lg shadow-xl"
          />
        </div>

        {/* Additional Images */}
        {project.images.slice(1).map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Screenshot ${i + 2}`}
            className="w-full mt-12 rounded-lg shadow-md"
          />
        ))}
      </div>

      <NextProject
        name={projects[projectIndex].name}
        image={projects[projectIndex].images[0]}
      />
    </div>
  );
}

export default Project;
