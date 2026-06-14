'use client'

import { useCallback, useState } from 'react'
import { navItems } from '@/lib/portfolio-data'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from '@/components/icons'
import { useTheme } from '@/components/theme-provider'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="text-site-body hover:text-site-heading rounded-lg p-2 transition-colors"
      aria-label={
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
    >
      {theme === 'dark' ? (
        <MoonIcon className="size-4" />
      ) : (
        <SunIcon className="size-4" />
      )}
    </button>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => {
      const next = !open
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }, [])

  const closeMenu = useCallback(() => {
    document.body.style.overflow = ''
    setMenuOpen(false)
  }, [])

  return (
    <>
      <header className="border-site-border bg-site-header/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
        <div className="relative mx-auto flex h-14 max-w-5xl items-center justify-center px-6">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-site-body hover:text-site-heading font-mono text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="absolute right-6 flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="text-site-body hover:text-site-heading rounded-lg p-2 transition-colors lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <CloseIcon className="size-4" />
              ) : (
                <MenuIcon className="size-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="bg-site-bg/95 fixed inset-0 z-40 pt-14 lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-6 px-6 py-8"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-site-heading font-mono text-lg"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  )
}
