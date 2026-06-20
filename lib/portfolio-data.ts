export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'process', label: 'Process' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
] as const

const myName = 'Ron San Jose'
const githubUrl = 'https://github.com/ronsj'
const linkedinUrl = 'https://linkedin.com/in/ronsanjose'
const figmaUrl = 'https://www.figma.com/@ronsj'
const email = 'ronsj1@gmail.com'

export const hero = {
  label: 'Frontend Engineer',
  name: myName,
  summary:
    'Specializing in polished, production-grade interfaces for e-commerce, CMS platforms, and AI-enabled products.',
  github: githubUrl,
  linkedin: linkedinUrl,
  figma: figmaUrl,
}

export const about = {
  paragraphs: [
    `I'm a frontend engineer who can participate in the full lifecycle of a project: understanding the problem, making technical calls, working with designer, and getting something live that people actually use. I've spent most of my career on e-commerce and content-rich products, making UI decisions and performance improvements that have a real impact.`,
    `My personal stack centers on React, TypeScript, and Next.js, with solid Node.js experience when the work calls for it. I care about usability, accessibility, developer experience, and shipping tested code that holds up long-term.`,
  ],
  stats: [
    { label: 'Location', value: 'Torrance, CA' },
    { label: 'Experience', value: '10+ years' },
    { label: 'Focus', value: 'Frontend, performance, accessibility, UX' },
    {
      label: 'Open to',
      value: 'Frontend or fullstack · Remote or hybrid',
    },
  ],
}

export const clientLogos = [
  {
    name: 'Glossier',
    src: '/logos/glossier.svg',
    url: 'https://www.glossier.com',
  },
  {
    name: 'Shinola',
    src: '/logos/shinola.svg',
    url: 'https://www.shinola.com',
  },
  {
    name: 'Netflix',
    src: '/logos/netflix.svg',
    url: 'https://www.netflix.com',
  },
  {
    name: 'Dermaflash',
    src: '/logos/dermaflash.svg',
    url: 'https://www.dermaflash.com',
  },
  {
    name: 'Framebridge',
    src: '/logos/framebridge.svg',
    url: 'https://www.framebridge.com',
  },
  {
    name: 'Rare Beauty',
    src: '/logos/rare.svg',
    url: 'https://www.rarebeauty.com',
  },
  {
    name: 'Society6',
    src: '/logos/society6.svg',
    url: 'https://www.society6.com',
  },
  { name: 'SYRN', src: '/logos/syrn.svg', url: 'https://www.syrn.com' },
  { name: 'Haus', src: '/logos/haus.svg', url: 'https://www.hauslabs.com' },
  {
    name: 'Magic Spoon',
    src: '/logos/magicspoon.svg',
    url: 'https://magicspoon.com',
  },
  {
    name: 'Barnes & Noble',
    src: '/logos/barnesnoble.svg',
    url: 'https://www.barnesandnoble.com',
  },
  { name: 'Skims', src: '/logos/skims.svg', url: 'https://skims.com' },
  { name: 'MoMA', src: '/logos/moma.svg', url: 'https://www.moma.org' },
  {
    name: 'Psycho Bunny',
    src: '/logos/psychobunny.svg',
    url: 'https://www.psychobunny.com',
  },
  {
    name: "Peet's Coffee",
    src: '/logos/peets.svg',
    url: 'https://www.peets.com',
  },
  { name: 'Indigo', src: '/logos/indigo.svg', url: 'https://www.indigo.ca' },
] as const

export const process = [
  {
    heading: 'Code: AI-assisted with human oversight.',
    fillPercent: 25,
    fillColor: 'accent' as const,
  },
  {
    heading:
      'Think/Plan/Review: Project structure, developer experience, system architecture, technology decisions, future maintainability.',
    fillPercent: 75,
    fillColor: 'accent' as const,
  },
]

export const skills = [
  {
    category: 'Tech',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Vue.js',
      'Shopify/Liquid',
      'Tailwind CSS',
      'HTML',
      'Sass',
      'CSS',
      'PHP',
      'Git',
      'Cursor',
      'Claude Code',
      'GSAP',
      'Express.js',
      'Vite',
      'Docker',
    ],
  },
  {
    category: 'Topics',
    items: [
      'AI-assisted workflows',
      'Frontend Frameworks',
      'Frontend Tooling',
      'Core Web Vitals',
      'Accessibility',
      'RESTful APIs',
      'GraphQL',
      'Unit Testing',
      'E2E Testing',
      'CI/CD',
    ],
  },
  {
    category: 'Design',
    items: ['Figma', 'Photoshop', 'Illustrator'],
  },
]

export const projects = [
  {
    title: "Peet's Coffee",
    description:
      'Built dynamic product and landing page templates on Shopify/Liquid, focused on retail and subscription conversion flows.',
    tags: [
      'Shopify',
      'E-Commerce',
      'Liquid',
      'JavaScript',
      'API Integrations',
      'Animations',
    ],
    link: {
      type: 'website',
      url: 'https://peets.com',
    },
  },
  {
    title: 'SYRN',
    description:
      'Greenfield Shopify build. Established repo structure and build pipeline. Built out initial sections, product pages, and global patterns for the team that followed.',
    tags: [
      'Shopify',
      'E-Commerce',
      'Liquid',
      'JavaScript',
      'TypeScript',
      'Vite',
      'Animations',
    ],
    link: {
      type: 'website',
      url: 'https://syrn.com',
    },
  },
  {
    title: 'Next.js Starter Kit',
    description:
      'Opinionated Next.js starter kit. The baseline I use to ship new projects quickly.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'E2E Testing',
      'Unit Testing',
      'GitHub Actions',
      'CI',
    ],
    link: {
      type: 'repo',
      url: 'https://github.com/ronsj/nextjs-starter-2026',
    },
  },
  {
    title: 'Robot Car Simulator',
    description:
      'Browser-based 3D sim with Three.js and a WebSocket-controlled server. A playground for real-time client/server interaction.',
    tags: ['Three.js', 'WebSockets', 'Vite', 'TypeScript', 'Node.js'],
    link: {
      type: 'repo',
      url: 'https://github.com/ronsj/robot-car-sim',
    },
  },
]

export const experience = [
  {
    title: 'Frontend Engineer',
    company: 'SDG',
    companyUrl: 'https://sdg.la',
    period: '2022 — 2025',
    description:
      'Built responsive Shopify and custom storefronts for major e-commerce brands at agency pace. Translated design prototypes into production UI, integrated CMS and third-party APIs, and shipped experiences ready for high-traffic retail.',
  },
  {
    title: 'Frontend Engineer (Supervisor)',
    company: 'Einstein Industries',
    companyUrl: 'https://einsteinindustries.com',
    period: '2016 — 2022',
    description:
      'Supervised frontend development and helped steer a proprietary React/Next.js CMS. Shipped SEO-focused, content-rich sites and drove Core Web Vitals improvements across the portfolio. Built an internal analytics dashboard for sales and modernized build tooling to improve team velocity and code quality.',
  },
]

export const footer = {
  github: githubUrl,
  linkedin: linkedinUrl,
  figma: figmaUrl,
  email,
  tagline: '#opentowork',
  copyright: `${myName}`,
}
