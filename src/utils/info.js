const programmingLanguages = [
  { name: 'JavaScript', color: '#F7DF1E', textColor: '#000', symbol: 'JS' },
  { name: 'Python', color: '#3776AB', textColor: '#fff', symbol: 'Py' },
  { name: 'TypeScript', color: '#3178C6', textColor: '#fff', symbol: 'TS' },
  { name: 'PHP', color: '#777BB4', textColor: '#fff', symbol: 'PHP' },
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
    name: 'Photoshop',
    image: '/icons/ps.png',
    color: '#3178C6',
    textColor: '#fff',
  },
];

const categories = [
  {
    title: 'Frontend development',
    items: [
      'React',
      'Next.js',
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
      'Redis',
      'MySQL',
      'SQLite',
    ],
  },
  {
    title: 'Mobile development',
    items: ['React Native'],
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
      'Photoshop',
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
  },

  {
    name: 'FindDoc',
    description: `
      🏥 A web app for booking doctor appointments, built with React.js, Node.js and MongoDB, and designed using Figma for a smooth user experience.<br/>
      👥 Roles:<br/>
      🧑‍⚕️ Patient : Request appointments, track status, and manage bookings.<br/>
      👨‍⚕️ Doctor : Accept or reject appointments and manage availability.<br/>
      👨‍💼 Admin : Oversee users, appointments, and platform settings.<br/>
      I enjoyed developing this project, ensuring efficiency, ease of use, and a clean design for seamless healthcare management. 🚀
    `,
    images: [
      '/findDoc/1.png',
      '/findDoc/2.png',
      '/findDoc/3.png',
      '/findDoc/4.png',
      '/findDoc/5.png',
    ],
    techStack: [
      { name: 'reactjs', image: '/icons/reactjs.png' },
      { name: 'nodejs', image: '/icons/node.png' },
      { name: 'express', image: '/icons/express.png' },
      { name: 'mongodb', image: '/icons/mongo.png' },
    ],
    link: 'https://finddoct.netlify.app/',
    logo: '/logos/finddoc.png',
  },
  {
    name: 'Shiek Shop',
    description: `
    🛍️ A modern e-commerce platform for fashion, built with React.js, Laravel, and MySQL, and designed using Figma for a seamless shopping experience.<br/>
    👥 Roles:<br/>
    🛒 Customer : Browse products, add to cart, place orders, track shipments, and leave reviews.<br/>
    👨‍💼 Admin : Manage products, orders, users, stock, and promotions.<br/>
    I truly enjoyed developing this project, focusing on performance, design, and user experience to create a fast, elegant, and efficient shopping platform. ✨
    `,
    images: ['/shiek/1.png', '/shiek/2.png', '/shiek/3.png', '/shiek/4.png'],
    techStack: [
      { name: 'reactjs', image: '/icons/reactjs.png' },
      { name: 'nodejs', image: '/icons/node.png' },
      { name: 'express', image: '/icons/express.png' },
      { name: 'mongodb', image: '/icons/mongo.png' },
    ],
    link: 'https://chiek.netlify.app/',
    logo: '/logos/chieck.png',
  },
];

export { programmingLanguages, categories, projects };
