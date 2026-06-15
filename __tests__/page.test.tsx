import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Page from '../app/page'

function renderPage() {
  return render(<Page />)
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

test('home page renders GitHub link', () => {
  renderPage()

  const hero = screen
    .getByRole('heading', { level: 1, name: 'Ron San Jose' })
    .closest('section')

  expect(hero).toBeTruthy()
  expect(within(hero!).getByRole('link', { name: 'GitHub' })).toBeDefined()
})

test('home page renders LinkedIn link', () => {
  renderPage()

  const hero = screen
    .getByRole('heading', { level: 1, name: 'Ron San Jose' })
    .closest('section')

  expect(hero).toBeTruthy()
  expect(within(hero!).getByRole('link', { name: 'LinkedIn' })).toBeDefined()
})
