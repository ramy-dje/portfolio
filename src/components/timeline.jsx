import React from 'react';
import { Timeline } from './ui/timeline';

const experiences = [
  {
    title: 'React Native Developer – BigNova Company',
    content: (
      <div className="text-sm md:text-base text-gray-100 dark:text-neutral-300">
        Working on various mobile applications using React Native, Expo, and TypeScript.
        Developing cross-platform solutions with modern mobile development practices
        and delivering high-quality user experiences.
        <p className="mt-2 text-xs text-gray-300">November 2025 — Present</p>
      </div>
    ),
  },
  {
    title: 'Full‑Stack Developer – Black and Yellow',
    content: (
      <div className="text-sm md:text-base text-gray-100 dark:text-neutral-300">
        Working full-time on modern full-stack applications using technologies
        like Next.js, Node.js, Nest.js and MongoDB. Contributing to scalable
        frontends and backend APIs with clean architecture.
        <p className="mt-2 text-xs text-gray-300">January 2025 — October 2025</p>
      </div>
    ),
  },
  {
    title: 'Full‑Stack Intern – Evact',
    content: (
      <div className="text-sm md:text-base text-gray-100 dark:text-neutral-300">
        Built a complete POS system from scratch, handling everything from
        database modeling to frontend UI/UX and backend APIs. Delivered a fully
        functional full-stack solution .
        <p className="mt-2 text-xs text-gray-300">January 2024 — June 2024</p>
      </div>
    ),
  },
  /*{
    title: "Freelance Full‑Stack Developer",
    content: (
      <div className="text-sm md:text-base text-gray-100 dark:text-neutral-300">
        Building full-stack applications using React, Next.js, Node.js, MongoDB,
        and GraphQL. Delivered scalable systems with real-time features and
        modular codebases.
        <p className="mt-2 text-xs text-gray-300">2023 — Present</p>
      </div>
    ),
  },*/
];

function timeLine() {
  return <Timeline data={experiences} />;
}

export default timeLine;
