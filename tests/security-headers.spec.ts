import { test, expect } from '@playwright/test'

test('homepage responds with security headers', async ({ page }) => {
  const response = await page.goto('/')
  expect(response).not.toBeNull()

  const headers = response!.headers()

  expect(headers['content-security-policy']).toContain("default-src 'self'")
  expect(headers['x-content-type-options']).toBe('nosniff')
  expect(headers['x-frame-options']).toBe('DENY')
  expect(headers['strict-transport-security']).toBeTruthy()
  expect(headers['x-powered-by']).toBeUndefined()
})
