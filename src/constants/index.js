export const PERSONAL = {
  name: 'Gouru Rakesh',
  tagline: 'Building intelligent, scalable, and impactful digital solutions.',
  email: 'rakeshgouru4@gmail.com',
  phone: '+91 6301018813',
  whatsapp: '916301018813',
  linkedin: 'https://www.linkedin.com/in/gouru-rakesh',
  github: 'https://github.com/goururakesh',
  resumeUrl: '/resume.pdf',
};

/** Top navigation — sections below remain on the page */
export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact Me' },
];

export const TYPING_ROLES = [
  'AI Developer',
  'Full Stack Developer',
  'Mainframe Support Engineer',
  'Prompt Engineer',
];

export const HERO_STATS = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Tech Stack', value: '20+' },
  { label: 'Hackathons', value: '3+' },
  { label: 'Internships', value: '4+' },
];

export const ABOUT_SUMMARY = [
  'I am Gouru Rakesh — an AI & Full Stack Developer and Mainframe Application Support Apprentice at CGI, Bangalore. I combine enterprise-grade production support with modern web development and generative AI to build solutions that are reliable, scalable, and user-focused.',
  'With a B.Tech in Computer Science (IoT) from Sphoorthy Engineering College (JNTUH), I have hands-on experience across Python, Java, JavaScript, React, Node.js, SQL databases, and prompt engineering for real-world AI applications.',
  'I am passionate about solving complex problems — from monitoring mainframe systems and managing incidents to shipping AI chatbots, inventory apps, and automated document generators. I am always learning and open to internships, freelance work, and full-time opportunities.',
];

export const ABOUT_POINTS = [
  {
    title: 'Education — B.Tech CSE (IoT)',
    detail:
      'Sphoorthy Engineering College (JNTUH), 2021–2025. Coursework in IoT, embedded systems, data structures, DBMS, and software engineering.',
  },
  {
    title: 'CGI — Mainframe Application Support Apprentice',
    detail:
      'Bangalore (Feb 2026 – Present). Mainframe monitoring, incident management, production support, and batch job analysis in enterprise environments.',
  },
  {
    title: 'AI & Full Stack Development',
    detail:
      'Built NeoTalks AI Chatbot (Python, Streamlit, DialoGPT), grocery inventory apps, notary document automation, and retail database systems with optimized SQL.',
  },
  {
    title: 'Prompt Engineering & Generative AI',
    detail:
      'Designing effective prompts, contextual AI workflows, and scalable integrations for chatbots and intelligent automation tools.',
  },
];

export const WHAT_I_DO = [
  {
    title: 'AI & Chatbot Development',
    description:
      'End-to-end conversational AI using Python, Streamlit, and transformer models with contextual memory and optimized responses.',
  },
  {
    title: 'Full Stack Web Apps',
    description:
      'Responsive frontends (HTML, CSS, React) with Node.js/Express backends, REST APIs, and MongoDB or MySQL databases.',
  },
  {
    title: 'Mainframe & Production Support',
    description:
      'Enterprise monitoring, incident triage, batch job analysis, and stable production operations at CGI.',
  },
  {
    title: 'Automation & Databases',
    description:
      'Document automation, CRUD systems, normalized schemas, Power BI reporting, and data-driven dashboards.',
  },
];

export const SKILL_CATEGORY_INFO = {
  Programming: 'Core languages for backend logic, AI scripts, and enterprise applications.',
  Frontend: 'Modern, responsive interfaces with React and component-based design.',
  Backend: 'RESTful APIs, server logic, and scalable Node.js services.',
  Databases: 'Structured and NoSQL storage with optimized queries and normalization.',
  Tools: 'Version control, API testing, analytics, IoT prototyping, and integrations.',
  AI: 'LLM workflows, prompt design, and generative AI solution building.',
};

export const SKILLS = {
  Programming: ['Python', 'Java', 'JavaScript', 'SQL'],
  Frontend: ['HTML', 'CSS', 'React.js', 'Bootstrap'],
  Backend: ['Node.js', 'Express.js'],
  Databases: ['MongoDB', 'MySQL'],
  Tools: ['GitHub', 'Postman', 'Power BI', 'Arduino', 'REST APIs'],
  AI: ['Prompt Engineering', 'Generative AI'],
};

export const PROJECTS = [
  {
    id: 1,
    title: 'NeoTalks AI Chatbot',
    description:
      'NeoTalks is a real-time AI chatbot built with Python and Streamlit, powered by DialoGPT. It understands conversation context, delivers optimized responses, and demonstrates practical NLP deployment for interactive user experiences.',
    role: 'Solo Developer — architecture, model integration, UI, and deployment.',
    tech: ['Python', 'Streamlit', 'DialoGPT'],
    features: [
      'Real-time AI chatbot',
      'Contextual understanding',
      'Optimized response system',
    ],
    github: 'https://github.com/goururakesh/chatbot.ai',
    demo: null,
    gradient: 'from-orange-500/20 to-cyan-500/20',
  },
  {
    id: 2,
    title: 'Grocery Tracker',
    description:
      'A web-based grocery and expense tracker with full CRUD functionality. Users can add items, track inventory levels, monitor spending, and manage daily household budgets through a clean, intuitive interface.',
    role: 'Frontend Developer — UI/UX, JavaScript logic, and local data handling.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['CRUD operations', 'Expense monitoring', 'Inventory tracking'],
    github: 'https://github.com/goururakesh/grocery',
    demo: null,
    gradient: 'from-cyan-500/20 to-blue-600/20',
  },
  {
    id: 3,
    title: 'Automated Notary Document Generator',
    description:
      'DAD (Document Automation Dashboard) generates notary and government-style forms — birth, caste, income, family certificates, and more — using dynamic HTML templates, placeholders, and print-ready outputs for fast, error-free documentation.',
    role: 'Full Stack — multi-page form system, template engine, and print styling.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Dynamic placeholders',
      'Automated document generation',
      'Print-ready outputs',
    ],
    github: 'https://github.com/goururakesh/DAD',
    demo: null,
    gradient: 'from-purple-500/20 to-orange-500/20',
  },
  {
    id: 4,
    title: 'Online Retail Store Database',
    description:
      'Designed a normalized MySQL schema for an online retail store with optimized queries, relational integrity, and Power BI dashboards for sales, inventory, and real-time business reporting.',
    role: 'Database Designer — ER modeling, SQL optimization, and analytics.',
    tech: ['MySQL', 'SQL', 'Power BI'],
    features: [
      'MySQL optimized queries',
      'Normalized database',
      'Real-time reporting',
    ],
    github: 'https://github.com/goururakesh',
    demo: null,
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
];

export const EXPERIENCE = [
  {
    company: 'CGI',
    role: 'Mainframe Application Support Apprentice',
    location: 'Bangalore',
    period: 'Feb 2026 – Present',
    summary:
      'Supporting mission-critical mainframe environments for enterprise clients — ensuring system stability, fast incident resolution, and smooth batch processing operations.',
    responsibilities: [
      'Monitor mainframe systems and proactively identify performance or availability issues',
      'Manage incidents from triage through resolution with clear documentation',
      'Provide L1/L2 production support for batch jobs and scheduled workloads',
      'Analyze batch job failures, logs, and rerun strategies to minimize downtime',
      'Collaborate with senior engineers on root-cause analysis and process improvements',
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Smart India Hackathon',
    subtitle: 'Winner',
    icon: 'trophy',
    description:
      'Recognized for innovative problem-solving and building a impactful technical solution under competitive national-level hackathon conditions.',
  },
  {
    title: 'AICTE',
    subtitle: 'Internship',
    icon: 'certificate',
    description:
      'Completed AICTE-aligned internship gaining industry exposure, structured learning, and practical software development experience.',
  },
  {
    title: 'Celonis',
    subtitle: 'Process Mining Internship',
    icon: 'chart',
    description:
      'Worked with process mining concepts to analyze workflows, identify bottlenecks, and improve operational efficiency using data-driven insights.',
  },
  {
    title: 'Smart Interviews',
    subtitle: 'Coding 101',
    icon: 'code',
    description:
      'Strengthened DSA fundamentals, problem-solving patterns, and interview readiness through structured coding practice programs.',
  },
];

export const EDUCATION = {
  degree: 'B.Tech in Computer Science (IoT)',
  college: 'Sphoorthy Engineering College (JNTUH)',
  period: '2021 – 2025',
};
