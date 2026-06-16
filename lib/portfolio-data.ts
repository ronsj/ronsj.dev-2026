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
    `I'm a Frontend Engineer with 10+ years of experience shipping polished, performant interfaces across e-commerce, SaaS, and agency work. I'm comfortable owning projects end to end from scoping and architecture to production, even some UI/UX. I'm experienced with modern frontend tech including React, TypeScript, Next.js, Node.js, and also have experience with API design and development on the backend. Currently exploring AI-assisted development workflows with Claude, Cursor, and other tools.`,
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
    title: "Peet's Coffee",
    description:
      "Shopify storefront for Peet's Coffee. Built dynamic product pages. Connected content management systems, retail systems, and vendor APIs.",
    tags: ['Shopify', 'E-Commerce', 'Liquid', 'JavaScript', 'APIs'],
    link: {
      type: 'website',
      url: 'https://peets.com',
    },
  },
  {
    title: 'Next.js Starter Kit',
    description:
      'My current go-to starter kit for new frontend Next.js projects. Includes my preferred tech stack and development workflows.',
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
      'A simple simulator for a robot car that can be controlled with the arrow keys. Uses Three.js for the 3D graphics and WebSockets for the communication between the client and server.',
    tags: ['Three.js', 'WebSockets', 'Vite', 'TypeScript', 'Node.js'],
    link: {
      type: 'repo',
      url: 'https://github.com/ronsj/robot-car-sim',
    },
  },
  {
    title: 'SYRN',
    description:
      "Scaffolded project from scratch for SYRN's new Shopify store. Improved build tooling and developer workflows. Laid foundational groundwork for future development.",
    tags: [
      'Shopify',
      'E-Commerce',
      'Liquid',
      'JavaScript',
      'TypeScript',
      'Vite',
    ],
    link: {
      type: 'website',
      url: 'https://syrn.com',
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
      "At SDG I built dynamic, responsive storefronts for some of the world's largest e-commerce brands. I worked across the full frontend stack, translated design prototypes into code, integrated content management systems, and worked with third-party APIs to deliver polished, production-ready experiences.",
  },
  {
    title: 'Frontend Engineer (Supervisor)',
    company: 'Einstein Industries',
    companyUrl: 'https://einsteinindustries.com',
    period: '2016 — 2022',
    description:
      'At Einstein Industries I supervised frontend development and helped shape the technical direction of a proprietary CMS built in React and Next.js. I developed SEO-focused, content-rich websites, drove performance improvements to meet Core Web Vitals benchmarks, built an internal analytics dashboard to support the sales team, and modernized our build tooling and developer workflows to improve productivity and code quality.',
  },
]

export const footer = {
  github: githubUrl,
  linkedin: linkedinUrl,
  copyright: `${myName}`,
}
