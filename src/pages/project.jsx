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
  const decodedName = decodeURIComponent(name || '').trim().toLowerCase();

  const project =
    projects.find(
      (p) =>
        p.name === name ||
        p.name.toLowerCase() === decodedName ||
        p.name.toLowerCase().startsWith(decodedName) ||
        decodedName.startsWith(p.name.toLowerCase())
    ) || projects[0];

  let projectIndex = projects.findIndex((p) => p.name === project?.name);
  if (projectIndex === -1) projectIndex = 0;
  const nextProjectIndex = (projectIndex + 1) % projects.length;

  if (!project) {
    return (
      <div className="text-gray-800 bg-white min-h-screen">
        <NavBar isBlack={true} />
        <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <a href="/#projects" className="text-blue-600 underline">
            Back to Projects
          </a>
        </div>
      </div>
    );
  }

  const intro = Array.isArray(project.intro)
    ? project.intro
    : project.intro
    ? [project.intro]
    : project.description
    ? [project.description]
    : [];

  const points = Array.isArray(project.points) ? project.points : [];

  return (
    <div className="text-gray-800 bg-white min-h-screen">
      <NavBar isBlack={true} />
      <MenuTrigger />
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-16">
        {/* Title and Logo */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {project.name}
          </h1>
          {project.logo ? (
            <img
              src={project.logo}
              alt="logo"
              className="w-[100px] mt-6 md:mt-0 object-contain max-h-[60px]"
            />
          ) : (
            <div className="text-xl font-bold bg-gray-100 py-3 px-6 rounded-2xl shadow-sm border border-gray-200 mt-6 md:mt-0 text-gray-700 flex items-center gap-2">
              🏢 {project.name}
            </div>
          )}
        </div>

        {/* Description: Intro & Bullet Points */}
        <div className="mb-16">
          {/* Intro Paragraphs */}
          {intro.length > 0 && (
            <div className="space-y-4 mb-8">
              {intro.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-lg md:text-xl leading-relaxed font-normal"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>
          )}

          {/* Bullet Points with small black circle */}
          {points.length > 0 && (
            <ul className="space-y-3.5">
              {points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3.5 text-gray-600 text-base md:text-lg leading-relaxed"
                >
                  <span className="w-2 h-2 rounded-full bg-black mt-2.5 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tech and Meta Info */}
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Tech Stack */}
          <div className="md:w-7/12">
            <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech, i) => (
                <div
                  key={i}
                  className="h-12 w-12 rounded-full bg-gray-100 p-2 shadow-sm flex items-center justify-center shrink-0 border border-gray-200 hover:scale-105 transition-transform"
                  style={
                    tech.image
                      ? {}
                      : {
                          backgroundColor: tech.color || '#f3f4f6',
                          color: tech.textColor || '#000',
                        }
                  }
                  title={tech.name}
                >
                  {tech.image ? (
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain rounded-full"
                    />
                  ) : (
                    <span className="text-xs font-extrabold tracking-tight">
                      {tech.symbol || tech.name.substring(0, 2)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Created At */}
          <div className="md:w-4/12">
            <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-4">
              Created
            </h2>
            <p className="text-gray-600 text-lg">
              {project.created || 'July 2024'}
            </p>
          </div>
        </div>

        {/* Live Site Button + Primary Image */}
        <div className="relative my-20">
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="absolute xl:right-[-80px] right-0 -top-16 z-20"
            >
              <MagneticButton
                isSMall={window.innerWidth < 768}
                title={'Live Site'}
              />
            </a>
          )}
          {project.images?.[0] && (
            <img
              src={project.images[0]}
              alt="Project Screenshot"
              className="w-full rounded-lg shadow-xl"
            />
          )}
        </div>

        {/* Additional Images */}
        {project.images?.slice(1).map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`Screenshot ${i + 2}`}
            className="w-full mt-12 rounded-lg shadow-md"
          />
        ))}
      </div>

      {projects[nextProjectIndex] && (
        <NextProject
          name={projects[nextProjectIndex].name}
          image={projects[nextProjectIndex].images?.[0]}
        />
      )}
    </div>
  );
}

export default Project;
