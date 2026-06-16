My over-engineered single page portfolio site. 😅

Based mostly off my own [Next.js Starter Kit](https://github.com/ronsj/nextjs-starter-2026).

## Prerequisites

- [Node.js](https://nodejs.org/) (see `.nvmrc` for version)
- [npm](https://www.npmjs.com/) (comes with Node)

If using [Node Version Manager](https://github.com/nvm-sh/nvm):

```bash
nvm install
nvm use
```

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Tooling

| Tool                                                      | Purpose                              |
| --------------------------------------------------------- | ------------------------------------ |
| [Next.js](https://nextjs.org/)                            | React framework                      |
| [React](https://react.dev/)                               | UI library                           |
| [TypeScript](https://www.typescriptlang.org/)             | Static typing                        |
| [Tailwind CSS](https://tailwindcss.com/)                  | Utility-first styling                |
| [ESLint](https://eslint.org/)                             | Linting                              |
| [Prettier](https://prettier.io/)                          | Code formatting                      |
| [Husky](https://typicode.github.io/husky/)                | Git hooks                            |
| [lint-staged](https://github.com/lint-staged/lint-staged) | Run linters on staged files          |
| [Vitest](https://vitest.dev/)                             | Unit/component tests                 |
| [Testing Library](https://testing-library.com/)           | React testing utilities              |
| [Playwright](https://playwright.dev/)                     | End-to-end browser tests             |
| [GitHub Actions](https://github.com/features/actions)     | CI (lint, format, tests, build, e2e) |

## Scripts

| Script                 | Description                   |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Start the development server  |
| `npm run build`        | Create a production build     |
| `npm run start`        | Serve the production build    |
| `npm run lint`         | Run ESLint                    |
| `npm run format`       | Format code with Prettier     |
| `npm run format:check` | Check formatting (used in CI) |
| `npm run test`         | Run Vitest in watch mode      |
| `npm run test:run`     | Run Vitest once (used in CI)  |
| `npm run test:e2e`     | Run Playwright e2e tests      |
| `npm run test:e2e:ui`  | Run Playwright with UI mode   |

## Git hooks

Git hooks are installed automatically when you run `npm install` (via the `prepare` script).

On every commit, a pre-commit hook runs [lint-staged](https://github.com/lint-staged/lint-staged) on staged files only:

- **Prettier** formats `*.{js,jsx,ts,tsx,mjs,cjs,json,css,md}`
- **ESLint** auto-fixes `*.{js,jsx,ts,tsx,mjs,cjs}` (runs after Prettier on those files)

Fixed files are re-staged before the commit completes. If ESLint reports errors it cannot fix, the commit is blocked.

To skip hooks for a single commit:

```bash
HUSKY=0 git commit -m "your message"
```

CI still runs full-repo `lint` and `format:check` as a safety net.
