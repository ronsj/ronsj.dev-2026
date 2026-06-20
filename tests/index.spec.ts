import { test, expect } from '@playwright/test'

test('home page has hero heading', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', {
      name: 'Ron San Jose',
    })
  ).toBeVisible()
})

test('desktop navigation links are visible on large screens', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/')

  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible()
})

test('mobile menu opens on small screens', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  await page.getByRole('button', { name: 'Open menu' }).click()
  await expect(page.getByRole('navigation', { name: 'Mobile' })).toBeVisible()
})

test('desktop nav marks About as active when its heading is in the top half', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/')

  await page.evaluate(() => {
    const heading = document.querySelector('[data-section-id="about"]')
    if (!heading) return
    const rect = heading.getBoundingClientRect()
    window.scrollBy(0, rect.top - 200)
  })

  await expect(
    page
      .getByRole('navigation', { name: 'Primary' })
      .getByRole('link', { name: 'About' })
  ).toHaveAttribute('aria-current', 'location')
})

test('desktop nav has no active link when hero is visible', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/')

  const nav = page.getByRole('navigation', { name: 'Primary' })

  for (const name of ['About', 'Process', 'Skills', 'Projects', 'Experience']) {
    await expect(nav.getByRole('link', { name })).not.toHaveAttribute(
      'aria-current',
      'location'
    )
  }
})
