import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '../components/theme-provider'
import Page from '../app/page'

function renderPage() {
  return render(
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}

test('home page renders hero heading', () => {
  renderPage()

  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'Ron San Jose',
    })
  ).toBeDefined()
})

test('home page renders primary navigation links', () => {
  renderPage()

  expect(screen.getByRole('link', { name: 'About' })).toBeDefined()
  expect(screen.getByRole('link', { name: 'Skills' })).toBeDefined()
  expect(screen.getByRole('link', { name: 'Projects' })).toBeDefined()
  expect(screen.getByRole('link', { name: 'Experience' })).toBeDefined()
})

test('home page renders get in touch link', () => {
  renderPage()

  expect(screen.getByRole('link', { name: 'Get in touch' })).toBeDefined()
})
