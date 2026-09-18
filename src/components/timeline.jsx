import React from 'react';
import { Timeline } from './ui/timeline';

const experiences = [
  {
    title: 'Full Stack Developer · Big Nova Company',
    location: 'Remote · Full-time',
    period: 'Nov 2025 – Present',
    bullets: [
      'Engineered and maintained production web and mobile systems across 10+ major projects, building reusable components and shared patterns that improved codebase consistency while helping modernize dashboard design and user experience across customer and internal platforms.',
      'Containerized and deployed production services using Docker, Nginx, Linux VPS, and CI/CD.',
      'Refactored authentication and real-time messaging modules, reducing code duplication and strengthening security against common OWASP vulnerabilities.',
    ],
  },
  {
    title: 'Full Stack Developer · Nexo Pizza',
    location: 'Remote · Part-time',
    period: 'Oct 2025 – Jun 2026',
    bullets: [
      'Designed a full-stack stock management system with MERN stack, covering inventory tracking, stock movements, supplier management, and an admin dashboard, fully integrated with the existing POS system.',
      'Engineered a real-time low-stock and expiry alerting pipeline via the Telegram Bot API, replacing a manual, error-prone process with automated notifications.',
      'Managed deployment infrastructure containerized with Docker, configured Nginx as reverse proxy, and built CI/CD pipelines via GitHub Actions.',
    ],
  },
  {
    title: 'Full Stack Developer · Black and Yellow',
    location: 'Remote · Freelance',
    period: 'Jan 2025 – Oct 2025',
    bullets: [
      "Engineered a CMS module for Madar one of Algeria's largest companies featuring a Notion-style rich-text editor built with Tiptap and a custom file manager backed by MinIO for image and asset handling, delivered alongside their full corporate website.",
      'Contributed to a large-scale e-commerce and stock management platform for a pharmaceutical manufacturing and distribution company, supporting large-catalog, multi-item sales and inventory operations across the country.',
      'Developed property management system solutions tailored to the operational needs of Algerian hotel groups, covering dynamic pricing, tax configuration, room and service inventory, and end-to-end workflow automation.',
    ],
  },
  {
    title: 'Full Stack Developer Intern · Evact',
    location: 'Constantine',
    period: 'Jan 2024 – Jun 2024',
    bullets: [
      'Designed and built a cross-platform POS system for mobile and desktop with a client-server architecture and offline-first capabilities. Load-tested critical flows with k6 using up to 7,000 simulated concurrent users, identifying performance bottlenecks before deployment.',
      'Implemented a loyalty management system tracking customer spending, points contributing to improved customer retention and higher average spend.',
    ],
  },
];

function timeLine() {
  return <Timeline data={experiences} />;
}

export default timeLine;
