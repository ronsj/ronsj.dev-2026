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
  summary:
    'I build fast, accessible, and beautifully crafted interfaces. Six years of shipping production React at companies where UI quality is a first-class concern.',
  github: githubUrl,
  linkedin: linkedinUrl,
}

export const about = {
  paragraphs: [
    "I'm a Frontend Engineer with a sharp eye for detail and a long track record of shipping interfaces people love to use. My work sits at the intersection of engineering rigour and design sensibility.",
    "I care deeply about performance, accessibility, and the craft of building component systems that scale. I've led Frontend chapters at two growth-stage startups and contributed to open-source projects with 10k+ GitHub stars.",
    'Outside of work I write about CSS architecture on my blog, occasionally speak at React conferences, and maintain a small open-source animation library.',
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
    title: 'Design System Core',
    description:
      'A comprehensive React component library with 60+ components, Storybook docs, and automated visual regression testing via Chromatic.',
    tags: ['React', 'TypeScript', 'Storybook', 'Chromatic'],
    repo: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Realtime Collaboration Board',
    description:
      'Figma-inspired whiteboard with operational transformation for conflict-free concurrent edits. Supports 50+ simultaneous users per session.',
    tags: ['React', 'WebSockets', 'Canvas API', 'Node.js'],
    repo: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Performance Dashboard',
    description:
      'Lighthouse-backed performance monitoring tool with Core Web Vitals tracking, automated reports, and regression alerts via GitHub Actions.',
    tags: ['Next.js', 'Recharts', 'PostgreSQL', 'GitHub Actions'],
    repo: 'https://github.com',
    live: 'https://example.com',
  },
]

export const experience = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Vercel',
    period: '2022 — Present',
    description:
      "Lead the redesign of the dashboard's core navigation and analytics views. Reduced bundle size by 42% through code-splitting and tree-shaking audits.",
  },
  {
    title: 'Frontend Engineer',
    company: 'Linear',
    period: '2020 — 2022',
    description:
      'Built the keyboard shortcut system and command palette from scratch. Shipped the mobile-responsive issue view used by 100k+ daily active users.',
  },
  {
    title: 'UI Engineer',
    company: 'Intercom',
    period: '2018 — 2020',
    description:
      'Maintained and extended the Polaris design system. Delivered the Help Center editor rewrite, cutting p95 load time from 4.2s to 0.8s.',
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
