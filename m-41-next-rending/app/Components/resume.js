export const meta = {
  name: 'Anuj Paul',
  title: 'Full-Stack Developer',
  tagline: 'Building scalable web experiences with MERN Stack & Next.js',
  email: 'fr.anujpaul@gmail.com',
  phone: '+88 01646-267167',
  location: 'Sunamganj, Bangladesh',
  github: 'https://github.com/anujpaul27',
  linkedin: 'https://www.linkedin.com/in/anujpaul28',
  twitter: 'https://x.com',
  instagram: 'https://www.instagram.com/anuj_paul_27',
  resumeUrl: '#',
  bio: 'Full-Stack Developer specializing in the MERN Stack and Next.js. I build scalable web applications with real-time features, secure authentication, and clean RESTful APIs. When I\'m not coding, I sharpen my problem-solving by tackling algorithmic challenges on competitive programming platforms.',
  bioShort: 'MERN Stack & Next.js developer. 300+ DSA problems. Building production-grade web apps.',
}

export const stats = [
  { value: '300+', label: 'DSA Problems Solved', icon: '🧠' },
  { value: '2+', label: 'Production Projects', icon: '🚀' },
  { value: '1031', label: 'Codeforces Max Rating', icon: '⚡' },
  { value: '12+', label: 'API Endpoints Built', icon: '🔌' },
]

export const skills = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Framer Motion', level: 80 },
    { name: 'HTML5 / CSS3', level: 95 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 82 },
    { name: 'Firebase', level: 78 },
    { name: 'BetterAuth', level: 75 },
    { name: 'Socket.io', level: 70 },
  ],
  tools: ['Git & GitHub', 'VS Code', 'Vercel', 'Cloudinary', 'Postman', 'npm'],
  languages: ['JavaScript', 'C', 'C++'],
}

export const experience = [
  {
    id: 'codealpha',
    role: 'Full-Stack Developer Intern',
    company: 'CodeAlpha',
    companyUrl: 'https://codealpha.tech',
    type: 'Remote · Virtual',
    period: 'May 2026 – Jun 2026',
    current: true,
    description: 'Developed and deployed full-stack web applications integrating React.js with Node.js/Express.js and MongoDB. Implemented JWT-based authentication, RESTful APIs, and responsive UI following production-grade standards.',
    achievements: [
      'Built and deployed 2+ full-stack projects end-to-end',
      'Implemented secure JWT authentication with Express middleware',
      'Maintained professional Git workflow with feature branching',
      'Reduced API response time through MongoDB query optimization',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Git'],
  },
  {
    id: 'cp',
    role: 'Competitive Programmer',
    company: 'Codeforces & CodeChef',
    companyUrl: 'https://codeforces.com',
    type: 'Self-directed',
    period: 'Jul 2025 – Present',
    current: false,
    description: 'Consistently solving algorithmic problems to strengthen problem-solving fundamentals and data structure knowledge.',
    achievements: [
      'Solved 300+ problems across Codeforces and CodeChef',
      'Achieved max rating 1031 on Codeforces',
      'Earned 2★ rating on CodeChef',
      'Strong in DP, graphs, sorting, and greedy algorithms',
    ],
    tech: ['C++', 'Data Structures', 'Algorithms', 'Dynamic Programming'],
  },
]

export const projects = [
  {
    id: 'linkup',
    title: 'LinkUp',
    subtitle: 'Social Media Web Application',
    description: 'A feature-rich, production-grade social media platform built on the MERN stack. Features real-time messaging, global feeds, friend connections, and a fully responsive design with smooth animations.',
    challenge: 'Building a real-time social platform requires careful architecture to handle state management across feeds, messages, and profiles simultaneously while maintaining performance.',
    solution: 'Implemented React Context API for global state, Firebase Auth for secure authentication, and Framer Motion for fluid UI transitions. Structured the Node.js backend with middleware-based validation.',
    impact: 'Achieved a fully functional social media MVP with 6+ core features, responsive across all devices.',
    features: [
      'Real-time feed with CRUD operations',
      'Direct messaging system',
      'User profiles & friend connections',
      'Firebase Authentication with private routes',
      'Saved posts & settings management',
      'Framer Motion page transitions',
      'Responsive across mobile & desktop',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Framer Motion', 'Tailwind CSS', 'DaisyUI', 'Axios', 'Context API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/anujpaul27',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    featured: true,
    year: '2025',
    color: '#7b4fff',
  },
  {
    id: 'thinkshare',
    title: 'ThinkShare',
    subtitle: 'Collaborative Idea Sharing Platform',
    description: 'A community-driven platform for discovering and discussing startup ideas. Features real-time search, Google OAuth, threaded comments, and a modern UI with dark/light mode support.',
    challenge: 'Designing a platform where ideas can be discovered, commented on, and managed efficiently — with a search experience that feels instant without hammering the server.',
    solution: 'Used SWR for client-side caching and revalidation to minimize redundant API calls. Implemented debounced real-time search. BetterAuth handles Google OAuth with JWT session management.',
    impact: 'Built 12+ API endpoints covering complete CRUD, with optimized data fetching reducing client-side load by ~40%.',
    features: [
      '12+ RESTful API endpoints',
      'BetterAuth: JWT + Google OAuth',
      'Real-time debounced search',
      'SWR caching & revalidation',
      'Threaded comments system',
      'Dark/Light theme switching',
      'Scrolling marquee contributors',
    ],
    tech: ['Next.js 16', 'Express.js', 'MongoDB', 'BetterAuth', 'JWT', 'Google OAuth', 'SWR', 'Tailwind CSS v4', 'DaisyUI', 'HeroUI', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: 'https://github.com/anujpaul27',
    category: 'Full Stack',
    tags: ['Next.js', 'MongoDB', 'OAuth', 'SWR'],
    featured: true,
    year: '2025',
    color: '#c2a4ff',
  },
]

export const education = [
  {
    degree: 'Bachelor of Arts in Philosophy',
    institution: 'Sunamganj Govt College',
    period: '2023 – 2024',
    note: 'While studying philosophy, I self-taught software development — proving that logical thinking and discipline transcend disciplines.',
  },
]

export const languages = [
  { name: 'Bengali', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]