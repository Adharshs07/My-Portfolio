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
  linkedinUrl: 'https://linkedin.com/in/your-profile',
  githubUrl: 'https://github.com/your-profile',
  leetcodeUrl: 'https://leetcode.com/u/your-profile',
  location: 'Trivandrum, Kerala',
  bioShort:
    'Full Stack Developer specializing in MERN Stack, Clean Architecture, real-time communications, and scalable distributed systems.',
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
    id: 'clean-arch',
    value: 100,
    suffix: '%',
    label: 'Clean Architecture',
    description: 'Strict adherence to SOLID principles, DTOs & Repository Pattern',
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
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Zustand',
      'HTML5 & Modern CSS3',
      'Framer Motion',
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
      'Clean Architecture',
      'Dependency Injection',
    ],
  },
  {
    title: 'Databases & ORM',
    skills: [
      'MongoDB & Mongoose',
      'PostgreSQL',
      'Prisma ORM',
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
      'Git & GitHub Actions',
      'Vercel',
      'Postman',
      'Linux Server Admin',
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
    title: 'Nest & Nail',
    description:
      'A production-grade full-stack home-service marketplace connecting verified service specialists with clients. Features real-time geospatial discovery, booking workflows, WebRTC video consultations, Socket.IO live messaging, and Razorpay escrow payments.',
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
      'Architected following Clean Architecture principles: Domain, Application, and Infrastructure layers with strict Dependency Injection and DTOs.',
      'Engineered geospatial worker discovery enabling radius-based proximity matching with live booking schedule validation.',
      'Implemented WebSockets via Socket.IO for real-time chat and WebRTC peer-to-peer audio/video consultations.',
      'Integrated Razorpay escrow checkout, digital wallet balances, transaction logs, and worker identity verification workflows.',
      'Configured production cloud infrastructure on AWS EC2 with Nginx reverse proxy, PM2 process management, and Certbot SSL certificates.',
    ],
    image: '',
    imageAlt: 'Nest & Nail — Production Home-Service Marketplace',
    liveUrl: '',
    githubUrl: '',
    isMini: false,
  },
  {
    id: 'vintage-fashion',
    title: 'Vintage Fashion',
    description:
      'A full-stack fashion e-commerce ecosystem supporting high-concurrency catalog discovery, secure cart-to-checkout pipelines, inventory management, dynamic coupon discounting, and real-time customer support chat.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Razorpay',
      'Cloudinary',
      'Socket.IO',
      'Nodemailer',
      'Google OAuth',
    ],
    highlights: [
      'Engineered structured MVC architecture with layered services, controllers, and validation middlewares.',
      'Implemented secure authentication with HttpOnly JWT tokens, OTP verification via Nodemailer, and Google OAuth 2.0.',
      'Developed Razorpay payment verification with automated webhooks, digital wallet refunds, and order delivery tracking.',
      'Built a comprehensive administrative dashboard for real-time sales analytics, inventory adjustments, and discount coupon engines.',
    ],
    image: '',
    imageAlt: 'Vintage Fashion — Full-Stack E-Commerce Platform',
    liveUrl: '',
    githubUrl: '',
    isMini: false,
  },
];

export const MINI_PROJECTS: Project[] = [
  {
    id: 'adukkala',
    title: 'Adukkala',
    description:
      'A full-stack culinary recipe discovery and meal-planning application. Features complex recipe filtering, relational database schema, JWT auth, and custom user culinary collections.',
    technologies: [
      'Next.js',
      'React',
      'Express.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma ORM',
      'Tailwind CSS',
    ],
    highlights: [
      'Designed PostgreSQL schema with Prisma ORM for relational recipe bookmarking, category indexing, and user preferences.',
      'Integrated third-party recipe intelligence APIs with client-side caching and dynamic search debounce.',
      'Implemented secure JWT authentication and token verification middleware.',
    ],
    image: '',
    imageAlt: 'Adukkala — Recipe Discovery Application',
    liveUrl: '',
    githubUrl: '',
    isMini: true,
  },
  {
    id: 'lenscard-aadhaar-ocr',
    title: 'LensCard — Aadhaar OCR Engine',
    description:
      'A privacy-first optical character recognition service that performs in-memory document preprocessing and structured data extraction from identity documents without persistent storage.',
    technologies: [
      'React',
      'TypeScript',
      'Express.js',
      'Tailwind CSS',
      'Sharp',
      'Tesseract.js',
    ],
    highlights: [
      'Engineered in-memory image pipeline using Sharp for binarization, noise thresholding, and perspective normalization.',
      'Implemented Tesseract OCR engine coupled with regex-driven heuristic parsing for high-accuracy identity extraction.',
      'Strict zero-persistence security design ensuring sensitive personal documents are never written to disk or database.',
    ],
    image: '',
    imageAlt: 'LensCard — Aadhaar OCR Engine',
    liveUrl: '',
    githubUrl: '',
    isMini: true,
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'brototype',
    title: 'Full Stack Engineering Trainee (MERN Stack)',
    company: 'Brototype',
    period: '2024 — 2026',
    location: 'Trivandrum, Kerala',
    type: 'Production-Simulation & Intensive Engineering',
    description:
      'Underwent intensive software engineering immersion focused on architecting and delivering production-ready, full-stack enterprise web systems.',
    highlights: [
      'Engineered monolithic and micro-service style applications implementing Clean Architecture, SOLID principles, and the Repository Pattern.',
      'Mastered scalable Node.js/Express backends, MongoDB aggregation pipelines, PostgreSQL relational modeling, and RESTful API standards.',
      'Built real-time applications with Socket.IO WebSockets and WebRTC audio/video streaming under simulated agile team environments.',
      'Deployed production services to AWS EC2 using Nginx reverse proxy, PM2 process supervision, SSL automation, and AWS S3 media pipelines.',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'AWS',
      'Socket.IO',
      'Docker',
    ],
  },
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
