import {
  PersonalInfo,
  Project,
  SkillCategory,
  EducationItem,
  ExperienceItem,
  ServiceItem,
  PortfolioMetric,
  SocialLink,
} from '@/types/portfolio';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'ADHARSH S',
  role: 'Full Stack Developer | MERN Stack',
  phone: '+91 8891580990',
  phoneRaw: '+918891580990',
  email: 'adharshkattaikonam@gmail.com',
  // Configure actual profile URLs here when available
  linkedinUrl: 'https://www.linkedin.com/in/adharsh--s/',
  githubUrl: 'https://github.com/Adharshs07',
  leetcodeUrl: 'https://leetcode.com/u/SOWEzQH3XY/',
  location: 'Trivandrum, Kerala',
  bioShort:
    'Full Stack Developer specializing in modern web technologies, Clean Architecture, scalable backend development, and real-time applications.  ',
  bioDetailed: [
    'My journey into software engineering is driven by a passionate obsession with building resilient digital systems. Coming from an academic background in English Language & Literature, I developed sharp analytical thinking, structured communication, and nuanced problem-solving skills.',
    'I transitioned into full-stack software development through an intensive, rigorous engineering program at Brototype. Over hundreds of hours of hands-on architectural design and code reviews, I focused on building production-grade web systems from the ground up.',
    'I specialize in TypeScript, Next.js, Node.js, Express, MongoDB, PostgreSQL, and cloud deployments with AWS. My development ethos emphasizes Clean Architecture, SOLID principles, type safety, modular dependency injection, and deterministic state management.',
  ],
  resumeUrl: '#',
};

export const PORTFOLIO_METRICS: PortfolioMetric[] = [
  {
    id: 'projects-completed',
    value: 4,
    suffix: '+',
    label: 'Verified Projects',
    description: 'Production-ready full-stack applications built and deployed',
    accent: 'cyan',
  },
  {
    id: 'major-systems',
    value: 2,
    suffix: '',
    label: 'Major Architectures',
    description: 'Multi-tiered marketplaces with payments, WebSockets & WebRTC',
    accent: 'blue',
  },
  {
    id: 'technologies',
    value: 20,
    suffix: '+',
    label: 'Tech Stack Tools',
    description: 'Modern frameworks, databases, and DevOps utilities',
    accent: 'violet',
  },
  {
    id: 'end-end',
    value: 100,
    suffix: '%',
    label: 'End-to-End Development',
    description: 'Hands-on involvement across frontend, backend, database integration, and application deployment.',
    accent: 'cyan',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: PERSONAL_INFO.githubUrl,
    handle: 'github.com/your-profile',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: PERSONAL_INFO.linkedinUrl,
    handle: 'linkedin.com/in/your-profile',
    icon: 'linkedin',
  },
  {
    name: 'LeetCode',
    url: PERSONAL_INFO.leetcodeUrl,
    handle: 'leetcode.com/u/your-profile',
    icon: 'leetcode',
  },
  {
    name: 'Email',
    url: `mailto:${PERSONAL_INFO.email}`,
    handle: PERSONAL_INFO.email,
    icon: 'mail',
  },
  {
    name: 'Phone',
    url: `tel:${PERSONAL_INFO.phoneRaw}`,
    handle: PERSONAL_INFO.phone,
    icon: 'phone',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      'React.js',
      'Next.js 15/16',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Zustand',
      'HTML5 & Modern CSS3',
      'React Router',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'JWT Authentication',
      'Socket.IO (Real-time)',
      'WebRTC (Video & Audio)',
    ],
  },
  {
    title: 'Databases',
    skills: [
      'MongoDB & Mongoose',
      'PostgreSQL',
      'Prisma',
      'Firebase',
      'Geospatial Queries',
      'Indexing & Optimization',
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    skills: [
      'AWS (EC2, S3)',
      'Docker',
      'Nginx & Reverse Proxy',
      'PM2 Process Manager',
      'pnpm',
      'Git & GitHub Actions',
      'Vercel',
      'Postman',
      'VS code',
      'Figma',
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'LLM Integrations',
      'Retrieval-Augmented Generation (RAG)',
      'Vector Databases',
      'Embeddings',
      'Semantic Search',
      'OCR (Tesseract.js & Sharp)',
    ],
  },
  {
    title: 'Architecture & Concepts',
    skills: [
      'Clean Architecture',
      'Repository Pattern',
      'Event-Driven Systems',
      'SOLID Principles',
      'Data Structures & Algorithms',
      'Role-Based Access Control (RBAC)',
    ],
  },
];

export const MAIN_PROJECTS: Project[] = [
  {
    id: 'nest-and-nail',
    title: 'Nest & Nail - Service Marketplace Platform',
    description:
      'A full-stack home-service marketplace connecting clients with verified professionals. The platform provides location-based worker discovery, service scheduling, secure bookings, real-time messaging, WebRTC video consultations, Razorpay payments, and comprehensive worker verification.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'AWS S3',
      'Socket.IO',
      'WebRTC',
      'Razorpay',
      'Zustand',
      'Tailwind CSS',
      'Nginx',
      'PM2',
      'Certbot',
    ],


    highlights: [
      'Architected the backend using Clean Architecture, SOLID principles, Dependency Injection, DTOs, and Mappers across Domain, Application, and Infrastructure layers.',

      'Implemented JWT authentication with HttpOnly cookies, OTP verification, Google OAuth, password recovery, and Role-Based Access Control (RBAC).',

      'Engineered geospatial worker discovery with radius-based matching, availability management, time-slot scheduling, date blocking, and booking validation.',

      'Developed real-time messaging using Socket.IO and WebRTC video meetings with secure rooms and meeting time tracking.',

      'Integrated Razorpay payments with signature verification, digital wallet transactions, transaction records, and payment workflows.',

      'Built worker verification workflows, document uploads, service management, reviews, concerns, and real-time notifications.',

      'Deployed the application using AWS EC2, AWS S3, Nginx reverse proxy, PM2 process management, Certbot SSL, and Vercel.',
    ],
    image: '',
    imageAlt: 'Nest & Nail — Production Home-Service Marketplace',
    liveUrl: '',
    githubUrl: '',
    isMini: false,
  },

  {
    id: 'vintage-fashion',
    title: 'Vintage Fashion - E-Commerce Platform',

    description:
      'A full-stack fashion e-commerce platform supporting product discovery, secure payments, order management, and comprehensive admin operations.',

    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Razorpay',
      'Cloudinary',
      'Socket.IO',
      'Nodemailer',
      'Google OAuth'
    ],

    highlights: [
      'Architected the backend using MVC architecture with structured controllers, models, and services for maintainable application development.',

      'Implemented secure user management with JWT authentication, OTP verification, Google OAuth, and Role-Based Access Control (RBAC).',

      'Developed product management features including CRUD operations, product search, pagination, filtering, shopping cart, inventory management, customer reviews, coupons, and promotional offers.',

      'Integrated Razorpay payment processing with payment verification, order tracking, order cancellation, and wallet-based refund workflows.',

      'Built an administrative dashboard to manage users, products, orders, inventory, and discount coupons, with sales analytics for business operations.',

      'Integrated Cloudinary for product image management and Socket.IO for real-time customer support chat.'
    ],

    image: '',
    imageAlt: 'Vintage Fashion — Full-Stack E-Commerce Platform',
    liveUrl: '',
    githubUrl: '',
    isMini: false
  }

];

export const MINI_PROJECTS: Project[] = [

  {
    id: 'adukkala',
    title: 'Adukkala - Full-Stack Recipe Application',

    description:
      'A full-stack recipe discovery platform that allows users to explore recipes, search for meals, save favorites, and manage personalized recipe preferences through a responsive and user-friendly interface.',

    technologies: [
      'Next.js',
      'React',
      'Express.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma ORM',
      'Tailwind CSS',
      'JWT Authentication',
      'REST APIs'
    ],

    highlights: [
      'Designed and developed a full-stack recipe application using Next.js, React, Express.js, and TypeScript, with a responsive frontend built using Tailwind CSS.',

      'Implemented secure JWT-based authentication to manage user registration, login, and protected application features.',

      'Designed and managed relational database models using PostgreSQL and Prisma ORM to organize user data, saved recipes, and personalized preferences.',

      'Developed RESTful APIs and integrated third-party recipe APIs to support recipe discovery, search functionality, favorites, and personalized recipe preferences.'
    ],

    image: '',
    imageAlt: 'Adukkala — Full-Stack Recipe Application',
    liveUrl: '',
    githubUrl: '',
    isMini: true
  },

  {
    id: 'lenscard-aadhaar-ocr',
    title: 'LensCard - Aadhaar OCR Application',

    description:
      'A full-stack Aadhaar OCR application that allows users to securely upload Aadhaar card images and automatically extract structured information through an intuitive interface.',

    technologies: [
      'React',
      'TypeScript',
      'Express.js',
      'Tailwind CSS',
      'Clean Architecture',
      'Dependency Injection',
      'Sharp',
      'Tesseract.js',
      'Regex-Based Parsing'
    ],

    highlights: [
      'Built a full-stack Aadhaar OCR application using React, TypeScript, Express.js, and Tailwind CSS, providing an intuitive interface for uploading Aadhaar card images and viewing extracted information.',

      'Designed the backend using Clean Architecture and Dependency Injection to maintain separation of concerns and modular application components.',

      'Implemented Sharp-based image preprocessing to prepare uploaded Aadhaar images for OCR extraction.',

      'Integrated Tesseract OCR with regex-driven parsing to extract structured Aadhaar details from recognized text.',

      'Implemented upload validation and in-memory image processing, ensuring uploaded documents are processed without persistent file or database storage.'
    ],

    image: '',
    imageAlt: 'LensCard — Aadhaar OCR Application',
    liveUrl: '',
    githubUrl: '',
    isMini: true
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'freelance',
    title: 'Independent Full Stack Developer',
    company: 'Freelance & Contract Engineering',
    period: '2025 — Present',
    location: 'Remote / Trivandrum',
    type: 'Client & Independent Product Development',
    description:
      'Architecting bespoke digital platforms, responsive web applications, and backend integration layers for clients and independent projects.',
    highlights: [
      'Translating product specifications into performant, modern Next.js and MERN stack implementations.',
      'Designing clean database schemas, secure authentication flows, and payment gateway checkouts.',
      'Providing end-to-end deployment, DNS configuration, and performance optimization for web platforms.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'REST APIs',
      'Razorpay',
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'full-stack-web',
    title: 'Full Stack Web Development',
    subtitle: 'End-to-End Modern Web Applications',
    description:
      'Building production-ready, high-speed web applications with Next.js, React, Node.js, and TypeScript, optimized for user experience and SEO.',
    deliverables: [
      'Responsive, accessible frontend interfaces',
      'Robust server-rendered & client-side architectures',
      'State management with Redux Toolkit or Zustand',
      'Complete end-to-end type safety',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    icon: 'code',
  },
  {
    id: 'backend-architecture',
    title: 'Backend & API Engineering',
    subtitle: 'Scalable Services & Clean Architecture',
    description:
      'Designing structured, modular backend APIs adhering to Clean Architecture, SOLID principles, and enterprise security standards.',
    deliverables: [
      'RESTful & WebSocket real-time APIs',
      'JWT authentication, OAuth, & RBAC authorization',
      'Input validation & error handling middlewares',
      'Microservice & modular monolith architectures',
    ],
    technologies: ['Node.js', 'Express.js', 'Clean Architecture', 'JWT', 'REST APIs'],
    icon: 'server',
  },
  {
    id: 'database-design',
    title: 'Database Architecture & Modeling',
    subtitle: 'MongoDB & PostgreSQL Optimization',
    description:
      'Architecting relational and document databases with optimized indexing, aggregation pipelines, and clean schema relations.',
    deliverables: [
      'Document modeling with MongoDB & Mongoose',
      'Relational schema design with PostgreSQL & Prisma',
      'Geospatial queries & fast location discovery',
      'Data integrity, indexing & query performance',
    ],
    technologies: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Mongoose'],
    icon: 'database',
  },
  {
    id: 'real-time-cloud',
    title: 'Real-Time Systems & Cloud Deployment',
    subtitle: 'WebSockets, WebRTC & AWS Infrastructure',
    description:
      'Implementing low-latency real-time communications and deploying resilient, scalable web services to cloud infrastructure.',
    deliverables: [
      'Live chat & notification pipelines via Socket.IO',
      'P2P video/audio conferencing using WebRTC',
      'AWS EC2, S3 bucket storage & CDN setup',
      'Nginx reverse proxy, PM2 supervision & SSL automation',
    ],
    technologies: ['Socket.IO', 'WebRTC', 'AWS EC2', 'AWS S3', 'Nginx', 'Docker'],
    icon: 'cloud',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    title: 'Professional Training — Full Stack Development (MERN Stack)',
    institution: 'Brototype',
    period: '2024–2026',
    location: 'Trivandrum, Kerala',
    description:
      'Comprehensive software engineering immersion focused on building and deploying production-grade full-stack applications, scalable Node.js backends, authentication systems, real-time features, payment integrations, third-party APIs, Clean Architecture, and performance optimization.',
  },
  {
    title: 'Master of Arts (M.A.) in English Language and Literature',
    institution: 'AJ College of Science and Technology, Kerala University',
    period: '2022–2024',
    location: 'Trivandrum, Kerala',
    description:
      'Advanced study of linguistic structures, rhetoric, critical analysis, and structured communication, establishing strong foundational skills in conceptual modeling and documentation.',
  },
  {
    title: 'Bachelor of Arts (B.A.) in English Communicative',
    institution: 'AJ College of Science and Technology, Kerala University',
    period: '2019–2022',
    location: 'Trivandrum, Kerala',
    description:
      'Focused on professional communication, technical discourse, public presentation, and analytical research methodologies.',
  },
];
