export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
] as const

const myName = 'Ron San Jose'
const githubUrl = 'https://github.com/ronsj'
const linkedinUrl = 'https://linkedin.com/in/ronsanjose'

export const hero = {
  label: 'Frontend Engineer',
  name: myName,
  summary: '',
  github: githubUrl,
  linkedin: linkedinUrl,
}

export const about = {
  paragraphs: [
    `I'm a Front End Engineer with 10+ years of experience shipping polished, performant interfaces across e-commerce, SaaS, and agency work. I'm comfortable owning projects end to end from scoping and architecture to production, even some UI/UX. I'm experienced with modern front end tech including React, TypeScript, Next.js, Node.js, and also have experience with API design and development on the backend. Currently exploring AI-assisted development workflows with Claude, Cursor, and other tools.`,
  ],
  stats: [
    { label: 'Location', value: 'Torrance, CA' },
    { label: 'Experience', value: '10+ years' },
    { label: 'Focus', value: 'Frontend, APIs, Performance, a11y, UX' },
    {
      label: 'Open to',
      value: 'Mid-senior roles, remote or on-site',
    },
  ],
}

export const skills = [
  {
    category: 'Languages',
    items: [
      'TypeScript',
      'JavaScript',
      'PHP',
      'Liquid',
      'Sass',
      'CSS',
      'HTML',
      'Markdown',
    ],
  },
  {
    category: 'Tech/Tools',
    items: [
      'AI-Assisted Development',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Vue.js',
      'Vite',
      'Vitest',
      'Testing Library',
      'Playwright',
      'Tailwind CSS',
      'Sass',
      'CI/CD',
      'RESTful APIs',
      'GraphQL',
      'Docker',
      'Git',
      'VS Code',
      'Cursor',
      'Claude',
      'GitHub',
      'Figma',
      'Photoshop',
      'Illustrator',
    ],
  },
]

export const projects = [
  {
    title: 'Next.js Starter Kit',
    description:
      'My current go-to starter kit for new front end Next.js projects.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Playwright',
      'Vitest',
      'Testing Library',
      'GitHub Actions',
      'CI',
    ],
    repo: 'https://github.com/ronsj/nextjs-starter-2026',
  },
  {
    title: 'Robot Car Simulator',
    description:
      'A simple simulator for a robot car that can be controlled with the arrow keys. Uses Three.js for the 3D graphics and WebSockets for the communication between the client and server.',
    tags: ['Three.js', 'WebSockets', 'Vite', 'TypeScript', 'Node.js'],
    repo: 'https://github.com/ronsj/robot-car-sim',
  },
]

export const experience = [
  {
    title: 'Frontend Engineer',
    company: 'SDG',
    period: '2022 — 2025',
    description:
      "At SDG I built dynamic, responsive storefronts for some of the world's largest e-commerce brands. I worked across the full front end stack, translated design prototypes into code, integrated content management systems, and worked with third-party APIs to deliver polished, production-ready experiences.",
  },
  {
    title: 'Frontend Engineer (Supervisor)',
    company: 'Einstein Industries',
    period: '2016 — 2022',
    description:
      'At Einstein Industries I supervised front end development and helped shape the technical direction of a proprietary CMS built in React and Next.js. I developed SEO-focused, content-rich websites, drove performance improvements to meet Core Web Vitals benchmarks, built an internal analytics dashboard to support the sales team, and modernized our build tooling and developer workflows to improve productivity and code quality.',
  },
]

export const footer = {
  tagline: [
    `Checkin' my email, checkin' my email, checkin-checkin-checkin' my email.`,
    `Let's mosey.`,
    `This is the way.`,
  ],
  github: githubUrl,
  linkedin: linkedinUrl,
  copyright: `${myName}`,
}
