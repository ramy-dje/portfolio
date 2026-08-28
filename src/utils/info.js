const programmingLanguages = [
  { name: 'JavaScript', color: '#F7DF1E', textColor: '#000', symbol: 'JS' },
  { name: 'Python', image: '/icons/python.png', color: '#3776AB', textColor: '#fff' },
  { name: 'TypeScript', color: '#3178C6', textColor: '#fff', symbol: 'TS' },
  { name: 'PHP', color: '#777BB4', textColor: '#fff', symbol: 'PHP' },
  { name: 'Java', color: '#5382A1', textColor: '#fff', symbol: 'Java' },
  { name: 'Dart', color: '#0175C2', textColor: '#fff', symbol: 'Dart' },
  // 🖥️ Web Development
  {
    name: 'ReactJS',
    image: '/icons/reactjs.png',
    color: '#61DAFB',
    textColor: '#000',
  },
  {
    name: 'Next.js',
    image: '/icons/next.png',
    color: '#FFFFFF',
    textColor: '#000',
  },
  {
    name: 'Angular',
    image: '/icons/angular.png',
    color: '#DD0031',
    textColor: '#fff',
  },
  {
    name: 'Node.js',
    image: '/icons/node.png',
    color: '#3C873A',
    textColor: '#fff',
  },
  {
    name: 'Express',
    image: '/icons/express.png',
    color: '#CCCCCC',
    textColor: '#000',
  },
  {
    name: 'Spring Boot',
    image: '/icons/spring.png',
    color: '#6DB33F',
    textColor: '#fff',
  },
  {
    name: 'Redux',
    image: '/icons/redux.png',
    color: '#764ABC',
    textColor: '#fff',
  },

  // 📱 Mobile Development
  {
    name: 'Expo',
    image: '/icons/expo.png',
    color: '#FFFFFF',
    textColor: '#fff',
  },
  {
    name: 'React Native',
    image: '/icons/reactnative.png',
    color: '#61DAFB',
    textColor: '#000',
  },
  {
    name: 'Flutter',
    color: '#02569B',
    textColor: '#fff',
    symbol: 'Fl',
  },

  // 🛢️ Databases
  {
    name: 'Redis',
    image: '/icons/redis.png',
    color: '#DC382D',
    textColor: '#fff',
  },
  {
    name: 'MySQL',
    image: '/icons/mysql.png',
    color: '#00758F',
    textColor: '#fff',
  },
  {
    name: 'MongoDB',
    image: '/icons/mongo.png',
    color: '#47A248',
    textColor: '#fff',
  },
  {
    name: 'SQLite',
    image: '/icons/sqlite.png',
    color: '#FFFFFF',
    textColor: '#fff',
  },

  // ⚙️ Tools / Others
  {
    name: 'Docker',
    image: '/icons/docker.png',
    color: '#2496ED',
    textColor: '#fff',
  },
  { name: 'Git', image: '/icons/git.png', color: '#F1502F', textColor: '#000' },
  {
    name: 'Linux',
    image: '/icons/linux.png',
    color: '#FCC624',
    textColor: '#000',
  },
  {
    name: 'Figma',
    image: '/icons/figma.png',
    color: '#F24E1E',
    textColor: '#fff',
  },
  {
    name: 'Laravel',
    image: '/icons/laravel.png',
    color: '#FF2D20',
    textColor: '#fff',
  },
  {
    name: 'NestJS',
    image: '/icons/nest.js.png',
    color: '#E0234E',
    textColor: '#fff',
  },
  {
    name: 'PostgreSQL',
    image: '/icons/postgresSQL.png',
    color: '#336791',
    textColor: '#fff',
  },
];

const categories = [
  {
    title: 'Frontend development',
    items: [
      'React',
      'Next.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Framer Motion',
      'Redux',
    ],
  },
  {
    title: 'Backend development',
    items: [
      'Node.js',
      'Express',
      'NestJS',
      'MongoDB',
      'PHP',
      'Laravel',
      'Java',
      'Spring Boot',
      'Redis',
      'MySQL',
      'SQLite',
      'PostgreSQL',
    ],
  },
  {
    title: 'Mobile development',
    items: ['React Native', 'Expo', 'Flutter', 'Dart'],
  },
  {
    title: 'Other skills',
    items: [
      'Git',
      'Docker',
      'GraphQL',
      'RESTful APIs',
      'Socket.IO',
      'Linux',
      'Figma',
    ],
  },
];
const projects = [
  {
    name: 'TESSAM POS',
    description: `
      TESSAM is a powerful and versatile Point of Sale (POS) system, designed as a complete solution for managing sales, inventory, and customer interactions in retail and service environments.<br/>
      🌟Key Features: <br/>
      ✔️ Real-Time Inventory Tracking: Stay updated on stock levels effortlessly 📦<br/>
      ✔️ Comprehensive Sales Reporting: Gain insights with detailed analytics 📊<br/>
      ✔️ Multi-Payment Support: Seamlessly accept cards, cash, and digital payments 💳💵<br/>
      ✔️ Employee Management: Assign roles, track performance, and ensure secure access 👩‍💻<br/>
      ✔️ Integrated Loyalty Program: Reward customers and boost retention 🎁
    `,
    images: [
      '/tessam/1.png',
      '/tessam/2.png',
      '/tessam/3.png',
      '/tessam/4.png',
      '/tessam/5.png',
      '/tessam/6.png',
    ],
    techStack: [
      { name: 'reactjs', image: '/icons/reactjs.png' },
      { name: 'nodejs', image: '/icons/node.png' },
      { name: 'express', image: '/icons/express.png' },
      { name: 'mongodb', image: '/icons/mongo.png' },
    ],
    link: 'https://tessam.netlify.app/',
    logo: '/logos/tessam.png',
    color: '#787878',
    created: 'July 2024',
  },
  {
    name: 'VerticCity',
    description: `
      The Verticcity app connects plant enthusiasts with trusted sellers while providing a platform for sharing knowledge through blogs. It features a multi-actor system with sellers, buyers, and admins.<br/>
      Key features include:<br/>
      🛒 Marketplace: Sellers showcase products; buyers shop easily.<br/>
      ✅ Admin Control: Manage seller approvals and platform activity.<br/>
      ✍️ Blogging: Create and explore plant care blogs.<br/>
      🔍 Search & Filters: Find plants effortlessly.<br/>
      📈 Analytics: Insights for admins and sellers.<br/>
      🌱 User-Friendly: Seamless experience for all users.    
    `,
    images: ['/verticCity/1.jpg', '/verticCity/2.jpg'],
    techStack: [
      { name: 'reactjs', image: '/icons/reactjs.png' },
      { name: 'nodejs', image: '/icons/node.png' },
      { name: 'express', image: '/icons/express.png' },
      { name: 'mongodb', image: '/icons/mongo.png' },
    ],
    link: 'https://drive.google.com/file/d/1O9eKu7O7xh7F00i_vEm05Z83ptAZj9Ah/view?usp=sharing',
    logo: '/logos/verticcity.png',
    color: '#7be89f',
    created: 'July 2024',
  },
  {
    name: 'NexoManager',
    description: `
    🍕 A management platform for Nexo Pizza Pizzeria, built to efficiently handle stock levels, purchases, and staff organization. Designed for seamless coordination and smooth operations.<br/>
👥 Roles:<br/>
👨‍🍳 Staff: Record stock usage, track ingredient levels, and request supplies.<br/>
📦 Manager: Monitor inventory, approve purchases, and oversee daily stock activities.<br/>
🧾 Admin: Manage users, system settings, and generate detailed reports.<br/>
I enjoyed developing this project to make restaurant stock management simpler, faster, and more organized. 🚀    `,
    images: [
      '/nexo/mockup.png',
      '/nexo/1.png',
      '/nexo/2.png',
      '/nexo/3.png',
      '/nexo/4.png',
      '/nexo/5.png',
    ],
    techStack: [
      { name: 'nextjs', image: '/icons/next.png' },
      { name: 'nodejs', image: '/icons/node.png' },
      { name: 'express', image: '/icons/express.png' },
      { name: 'mongodb', image: '/icons/mongo.png' },
    ],
    link: 'https://nexo-manager.netlify.app/',
    logo: '/logos/nexo.png',
    color: '#F24E1E',
    created: 'July 2024',
  },
  {
    name: 'Nova',
    description: `
    🏥 Nova Health is a mobile platform designed to simplify healthcare management by connecting patients, doctors, and admins in one place.<br/>
👥 Roles:<br/>
🧑‍⚕️ Patient: Book appointments, view doctor profiles, and track booking status.<br/>
👨‍⚕️ Doctor: Confirm or reject appointments, manage schedules, and update availability.<br/>
👨‍💼 Admin: Manage doctors, patients, and oversee all platform activities.<br/>
I enjoyed building this project to make doctor booking easy, fast, and well-organized, improving both patient experience and clinic efficiency. 🚀 `,
    images: ['/novadoc/1.png', '/novadoc/2.png'],
    techStack: [
      { name: 'react native', image: '/icons/reactnative.png' },
      { name: 'nodejs', image: '/icons/node.png' },
      { name: 'express', image: '/icons/express.png' },
      { name: 'mongodb', image: '/icons/mongo.png' },
    ],
    link: 'https://nova-app.netlify.app/',
    logo: '/logos/nova.png',
    color: '#dda9f0',
    created: 'July 2024',
  },
  {
    name: 'Bubble',
    description: `
    Bubble is a comprehensive management system for kindergartens, designed to streamline daily operations.<br/>
Key Roles & Features:<br/>
Child & Class Tracking: Keep detailed records of enrollment, daily attendance, and group assignments.<br/>
Activity Scheduler: Organize daily activities, events, and lessons efficiently.<br/>
Parent Connection: Facilitate seamless updates and notes between teachers and parents.<br/>
Admin Dashboard: Monitor operations, staff details, and class capacity in real time.`,
    images: [
      '/bubble/1.png',
      '/bubble/2.png',
      '/bubble/3.png',
      '/bubble/4.png',
      '/bubble/5.png',
      '/bubble/6.png',
    ],
    techStack: [
      { name: 'Angular', image: '/icons/angular.png' },
      { name: 'Spring Boot', image: '/icons/spring.png' },
      { name: 'PostgreSQL', image: '/icons/postgresSQL.png' },
    ],
    link: '#',
    logo: '/logos/bubble.png',
    color: '#99CCD3',
    created: '2026',
  },
  {
    name: 'Madar',
    description: `
    A sleek corporate website representing Madar, one of the largest and most influential companies in Algeria.<br/>
Key Features:<br/>
Premium Design: Modern layout with high-quality visual components and rich typography.<br/>
Fast Performance: Built with Next.js for server-side rendering and rapid page loads.<br/>
Fully Responsive: Seamless user experience optimized across all device screens.<br/>
Company Portfolio: Comprehensive representation of company holdings, history, and achievements.`,
    images: [
      '/madar/1.png',
      '/madar/2.png',
      '/madar/3.png',
      '/madar/4.png',
      '/madar/5.png',
      '/madar/6.png',
      '/madar/7.png',
    ],
    techStack: [
      { name: 'Next.js', image: '/icons/next.png' },
    ],
    link: '#',
    logo: '/logos/madar.png',
    color: '#1E3A8A',
    created: '2025',
  },
  {
    name: 'Kalam',
    description: `
    Kalam is a modern, high-performance rich text editor designed for developers and content creators.<br/>
Key Features:<br/>
Interactive Editing: Fully powered by Tiptap for seamless visual formatting, lists, tables, and code blocks.<br/>
Secure API: Built with a Laravel backend to handle user authentication, file uploads, and document storage.<br/>
SPA Interface: Uses Next.js to provide an instant, lag-free writing and saving experience.<br/>
Document Management: Easily organize, save, edit, and export your writing projects.`,
    images: [
      '/kalam/1.png',
      '/kalam/2.png',
      '/kalam/3.png',
      '/kalam/4.png',
      '/kalam/5.png',
      '/kalam/6.png',
      '/kalam/7.png',
    ],
    techStack: [
      { name: 'Next.js', image: '/icons/next.png' },
      { name: 'Laravel', image: '/icons/laravel.png' },
      { name: 'PostgreSQL', image: '/icons/postgresSQL.png' },
    ],
    link: '#',
    logo: '/logos/kalam.png',
    color: '#66C6FF',
    created: '2026',
  },
  {
    name: 'EcoSmart',
    description: `
    EcoSmart is a robust e-commerce management system built to coordinate sales, inventory, and analytics.<br/>
Key Features:<br/>
Business Analytics: Dashboards showing sales trends, popular items, and stock depletion rates.<br/>
Inventory Management: Track product levels, manage incoming supply shipments, and trigger low-stock alerts.<br/>
Order Processing: Streamlined system to handle incoming orders from placement to shipping status.<br/>
Scalable Backend: Powered by Spring Boot for secure enterprise data handling.`,
    images: [
      '/ecosmart/1.png',
      '/ecosmart/2.png',
      '/ecosmart/3.png',
      '/ecosmart/4.png',
      '/ecosmart/5.png',
      '/ecosmart/6.png',
      '/ecosmart/7.png',
    ],
    techStack: [
      { name: 'Next.js', image: '/icons/next.png' },
      { name: 'Spring Boot', image: '/icons/spring.png' },
      { name: 'PostgreSQL', image: '/icons/postgresSQL.png' },
    ],
    link: '#',
    logo: '/logos/ecosmart.jpg',
    color: '#BCD1FF',
    created: '2026',
  },
  {
    name: 'Elbay Hotel',
    description: `
    A premium hotel landing page and guest reservation system, designed to elevate the online booking experience.<br/>
Key Features:<br/>
Room Showcases: Beautiful displays of rooms, luxury suites, and guest amenities.<br/>
Reservation System: User-friendly booking calendar to select check-in and check-out dates.<br/>
Brand Identity: Sophisticated styling and layout representing the hotel's luxury standard.<br/>
Location & Contact: Easy integration of local maps, contact forms, and FAQ guides.`,
    images: [
      '/elbey hotel/1.png',
      '/elbey hotel/2.png',
      '/elbey hotel/3.png',
      '/elbey hotel/4.png',
      '/elbey hotel/5.png',
      '/elbey hotel/6.png',
      '/elbey hotel/7.png',
    ],
    techStack: [
      { name: 'Next.js', image: '/icons/next.png' },
    ],
    link: '#',
    logo: '/logos/elbay.png',
    color: '#FFC66D',
    created: '2025',
  },
  {
    name: 'Hotel Manager',
    description: `
    Hotel Manager is a powerful, end-to-end hotel operations management suite designed for hotel staff and administrators.<br/>
Key Features:<br/>
Booking Operations: Handle guest check-ins, check-outs, room transfers, and room statuses in real-time.<br/>
Housekeeping & Maintenance: Assign tasks to staff and update room cleanliness records dynamically.<br/>
Billing & Invoices: Generate comprehensive client receipts, track payments, and manage hotel services charges.<br/>
Multi-Role System: Distinct dashboards for admins, front desk receptionists, and service personnel.`,
    images: [
      '/hotel manager/1.png',
      '/hotel manager/2.png',
      '/hotel manager/3.png',
      '/hotel manager/4.png',
      '/hotel manager/5.png',
      '/hotel manager/6.png',
    ],
    techStack: [
      { name: 'Next.js', image: '/icons/next.png' },
      { name: 'NestJS', image: '/icons/nest.js.png' },
      { name: 'MongoDB', image: '/icons/mongo.png' },
    ],
    link: '#',
    logo: '/logos/elbay.png',
    color: '#0F9AAD',
    created: '2025',
  },
];

export { programmingLanguages, categories, projects };
