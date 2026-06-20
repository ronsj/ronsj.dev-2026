import type { Page, TestInfo } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { test, expect } from './fixtures/axe-test'

async function gotoWithTheme(page: Page, theme: 'light' | 'dark') {
  // Skip GSAP intro animations so axe scans stable, fully-opaque content.
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.addInitScript((t) => {
    localStorage.setItem('theme', t)
    document.documentElement.classList.toggle('dark', t === 'dark')
  }, theme)
  await page.goto('/')
}

async function scanPage(
  page: Page,
  makeAxeBuilder: () => AxeBuilder,
  theme: 'light' | 'dark',
  testInfo: TestInfo
) {
  await gotoWithTheme(page, theme)
  await expect(page.locator('main')).toBeVisible()

  const accessibilityScanResults = await makeAxeBuilder().analyze()

  await testInfo.attach(`accessibility-scan-results-${theme}`, {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: 'application/json',
  })

  expect(accessibilityScanResults.violations).toEqual([])
}

test.describe('homepage accessibility', () => {
  test('should not have WCAG violations (dark theme)', async ({
    page,
    makeAxeBuilder,
  }, testInfo) => {
    await scanPage(page, makeAxeBuilder, 'dark', testInfo)
  })

  test('should not have WCAG violations (light theme)', async ({
    page,
    makeAxeBuilder,
  }, testInfo) => {
    await scanPage(page, makeAxeBuilder, 'light', testInfo)
  })
})
