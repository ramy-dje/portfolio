import React from 'react';
import { Timeline } from './ui/timeline';

const experiences = [
  {
    title: 'Full Stack Developer · Big Nova Company',
    location: 'Remote · Full-time',
    period: 'Nov 2025 – Present',
    bullets: [
      'Engineered mobile apps, admin dashboards, and internal tools with a team of 10 for Algerian and French clients.',
      'Optimized API performance and front-end rendering to resolve key user-facing bottlenecks.',
      'Built reliable REST APIs, authentication flows, and real-time features across production systems.',
      'Collaborated closely with designers to implement UI features and streamline review cycles.',
    ],
  },
  {
    title: 'Full Stack Developer · Nexo Pizza',
    location: 'Remote · Part-time',
    period: 'Oct 2025 – Jun 2026',
    bullets: [
      'Built a full MERN stock ecosystem: inventory, supplier integration, driver delivery app, and POS-connected admin dashboard.',
      'Integrated real-time Telegram alerts for low stock and expiration, replacing manual checking.',
      'Created an internal task management platform for staff operations and workload visibility.',
      'Managed Docker and Nginx deployments with GitHub Actions CI/CD pipelines.',
    ],
  },
  {
    title: 'Full Stack Developer · Black and Yellow',
    location: 'Remote · Freelance',
    period: 'Jan 2025 – Oct 2025',
    bullets: [
      'Delivered web solutions for 4 Algerian companies, including corporate sites, a custom blog editor, and an e-commerce platform.',
      'Built a custom component-based rich text editor supporting embedded media and modular blocks.',
      'Developed a hotel PMS platform covering room bookings, pricing, tax configuration, and workflow automation.',
    ],
  },
  {
    title: 'Full Stack Developer Intern · Evact',
    location: 'Constantine',
    period: 'Jan 2024 – Jun 2024',
    bullets: [
      'Designed a cross-platform POS system (mobile & desktop) with offline resilience.',
      'Implemented a customer loyalty and rewards management system to boost retention and average spend.',
    ],
  },
];

function timeLine() {
  return <Timeline data={experiences} />;
}

export default timeLine;
