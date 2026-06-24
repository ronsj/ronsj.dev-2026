const myName = 'Ron San Jose'
const githubUrl = 'https://github.com/ronsj'
const linkedinUrl = 'https://linkedin.com/in/ronsanjose'
const figmaUrl = 'https://www.figma.com/@ronsj'
const email = 'ronsj1@gmail.com'

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'process', label: 'Process' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
]

export const hero = {
  label: 'Frontend Engineer',
  name: myName,
  summary: `UX enthusiast, building visual and programmatic interfaces for the web 🌐 and beyond 🤖.`,
  github: githubUrl,
  linkedin: linkedinUrl,
  figma: figmaUrl,
}

export const about = {
  paragraphs: [
    `🙋‍♂️ I'm a self taught developer. I like running 🏃 and single player video games 🎮. Been building static websites, content management systems, dynamic front end apps, and e-commerce stores, for over ten years.`,
    `I'm not a computer scientist, but I know how to find the right solutions, am willing to learn, and will use whatever tools I need to use to get things done.`,
    `I enjoy making high quality experiences for end users, weather they are external customer, clients, or internal teams/coworkers. I want the thing I make to be a joy to use.`,
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

import type { LogoId } from '@/components/logos'

export const clientLogos = [
  {
    name: 'Glossier',
    logo: 'glossier',
    url: 'https://www.glossier.com',
  },
  {
    name: 'Shinola',
    logo: 'shinola',
    url: 'https://www.shinola.com',
  },
  {
    name: 'Netflix',
    logo: 'netflix',
    url: 'https://www.netflix.shop/',
  },
  {
    name: 'Dermaflash',
    logo: 'dermaflash',
    url: 'https://www.dermaflash.com',
  },
  {
    name: 'Baublebar',
    logo: 'baublebar',
    url: 'https://www.baublebar.com',
  },
  {
    name: 'Filson',
    logo: 'filson',
    url: 'https://filson.com',
  },
  {
    name: 'Rare Beauty',
    logo: 'rare',
    url: 'https://www.rarebeauty.com',
  },
  {
    name: 'Society6',
    logo: 'society6',
    url: 'https://www.society6.com',
  },
  { name: 'SYRN', logo: 'syrn', url: 'https://www.syrn.com' },
  { name: 'Haus', logo: 'haus', url: 'https://www.hauslabs.com' },
  {
    name: 'Magic Spoon',
    logo: 'magicspoon',
    url: 'https://magicspoon.com',
  },
  {
    name: 'Barnes & Noble',
    logo: 'barnesnoble',
    url: 'https://www.barnesandnoble.com',
  },
  { name: 'Skims', logo: 'skims', url: 'https://skims.com' },
  { name: 'MoMA', logo: 'moma', url: 'https://store.moma.org' },
  {
    name: "Peet's Coffee",
    logo: 'peets',
    url: 'https://www.peets.com',
  },
  { name: 'Indigo', logo: 'indigo', url: 'https://www.indigo.ca' },
] as const satisfies ReadonlyArray<{
  name: string
  logo: LogoId
  url: string
}>

export const process = [
  {
    label: 'Communicating',
    description:
      'Talking with stakeholders, designers, users, and other developers. Ensuring everyone is on the same page and aligned on the project goals and requirements.',
  },
  {
    label: 'Thinking & Planning',
    description:
      'Thinking about the project structure, developer experience, system architecture, technology choices, and maintainability.',
  },
  {
    label: 'Coding',
    description:
      'Using AI-assisted tools with human oversight. Breaking down problems into smaller, manageable chunks for agents to understand and implement.',
  },
] as const

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
      'Established repo structure and build pipeline. Built out initial sections, product pages, and global patterns for the team that followed.',
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
    description: `Opinionated Next.js starter kit. The baseline I use to ship new projects quickly. I don't know why I like making these so much.`,
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
