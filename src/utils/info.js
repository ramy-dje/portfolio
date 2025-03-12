const webDevSkills = [
    { name: "reactjs", image: "/icons/reactjs.png" },
    { name: "nextjs", image: "/icons/next.png" },
    { name: "nodejs", image: "/icons/node.png" },
    { name: "express", image: "/icons/express.png" },
    { name: "redux", image: "/icons/redux.png" }
  ]
  const mobileDevSkills = [
    { name: "expo", image: "/icons/expo.png" },
    { name: "react native", image: "/icons/reactnative.png" }
  ]
  const databases = [
    { name: "redis", image: "/icons/redis.png" },
    { name: "mysql", image: "/icons/mysql.png" },
    { name: "mongodb", image: "/icons/mongo.png" },
    { name: "sqlite", image: "/icons/sqlite.png" }
  ]
  const authers = [
    { name: "docker", image: "/icons/docker.png" },
    { name: "git", image: "/icons/git.png" },
    { name: "linux", image: "/icons/linux.png" },
    { name: "figma", image: "/icons/figma.png" },
    { name: "photoshop", image: "/icons/ps.png" }
  ]

const projects = [
  {
    name: "TESSAM POS",
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
        "/tessam/show.png",
        "/tessam/1.png",
        "/tessam/2.png",
        "/tessam/3.png",
        "/tessam/4.png",
        "/tessam/5.png",
    ],
    techStack: [
      { name: "reactjs", image: "/icons/reactjs.png" },
      { name: "nodejs", image: "/icons/node.png" },
      { name: "express", image: "/icons/express.png" },
      { name: "mongodb", image: "/icons/mongo.png" }
    ],
    link: "https://tessam.netlify.app/",
    logo: "/logos/tessam.png"
  },
  {
    name: "VerticCity",
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
    images: [
       '/verticCity/1.jpg',
       '/verticCity/2.jpg',
    ],
    techStack: [
      { name: "reactjs", image: "/icons/reactjs.png" },
      { name: "nodejs", image: "/icons/node.png" },
      { name: "express", image: "/icons/express.png" },
      { name: "mongodb", image: "/icons/mongo.png" }
    ],
    link: "https://drive.google.com/file/d/1O9eKu7O7xh7F00i_vEm05Z83ptAZj9Ah/view?usp=sharing",
    logo: "/logos/verticcity.png"
  },
  {
    name: "FindDoc",
    description: `
      🏥 A web app for booking doctor appointments, built with React.js, Node.js and MongoDB, and designed using Figma for a smooth user experience.<br/>
      👥 Roles:<br/>
      🧑‍⚕️ Patient : Request appointments, track status, and manage bookings.<br/>
      👨‍⚕️ Doctor : Accept or reject appointments and manage availability.<br/>
      👨‍💼 Admin : Oversee users, appointments, and platform settings.<br/>
      I enjoyed developing this project, ensuring efficiency, ease of use, and a clean design for seamless healthcare management. 🚀
    `,
    images: [
      "/findDoc/1.png",
      "/findDoc/2.png",
      "/findDoc/3.png",
      "/findDoc/4.png",
      "/findDoc/5.png"
    ],
    techStack: [
      { name: "reactjs", image: "/icons/reactjs.png" },
      { name: "nodejs", image: "/icons/node.png" },
      { name: "express", image: "/icons/express.png" },
      { name: "mongodb", image: "/icons/mongo.png" }
    ],
    link: "https://finddoct.netlify.app/",
    logo: "/logos/finddoc.png"
  },
  {
    name: "Shiek Shop",
    description: `
    🛍️ A modern e-commerce platform for fashion, built with React.js, Laravel, and MySQL, and designed using Figma for a seamless shopping experience.<br/>
    👥 Roles:<br/>
    🛒 Customer : Browse products, add to cart, place orders, track shipments, and leave reviews.<br/>
    👨‍💼 Admin : Manage products, orders, users, stock, and promotions.<br/>
    I truly enjoyed developing this project, focusing on performance, design, and user experience to create a fast, elegant, and efficient shopping platform. ✨
    `,
    images: [
      '/shiek/show.png',
      '/shiek/1.png',
      '/shiek/2.png',
      '/shiek/3.png',
    ],
    techStack: [
      { name: "reactjs", image: "/icons/reactjs.png" },
      { name: "nodejs", image: "/icons/node.png" },
      { name: "express", image: "/icons/express.png" },
      { name: "mongodb", image: "/icons/mongo.png" }
    ],
    link: "https://chiek.netlify.app/",
    logo: "/logos/chieck.png"
  }
]

export {authers,databases,mobileDevSkills,webDevSkills,projects}