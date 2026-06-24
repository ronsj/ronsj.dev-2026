'use client'

import { useCallback, useEffect, useState } from 'react'
import { navItems } from '@/lib/portfolio-data'
import {
  ArrowUpIcon,
  CloseIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from '@/components/icons'
import { useTheme } from '@/lib/use-theme'
import { useActiveSection } from '@/lib/use-active-section'
import { HEADER_HEIGHT_PX } from '@/lib/site'

const underlineBase =
  'after:bg-site-accent relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:transition-transform after:duration-300 after:ease-out motion-reduce:after:transition-none'

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
  const [showCompactTitle, setShowCompactTitle] = useState(false)
  const activeId = useActiveSection()

  useEffect(() => {
    const heroTitle = document.getElementById('hero-title')
    if (!heroTitle || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCompactTitle(!entry.isIntersecting)
      },
      {
        rootMargin: `-${HEADER_HEIGHT_PX}px 0px 0px 0px`,
        threshold: 0,
      }
    )

    observer.observe(heroTitle)
    return () => observer.disconnect()
  }, [])

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
          <a
            href="#"
            className={`text-site-body absolute left-6 rounded-lg p-4 pl-0 transition-opacity duration-200 hover:opacity-80 motion-reduce:transition-none ${
              showCompactTitle ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={!showCompactTitle}
            aria-label="Back to top"
            tabIndex={showCompactTitle ? 0 : -1}
          >
            <ArrowUpIcon className="size-5" />
          </a>

          <nav
            aria-label="Primary"
            className="hidden gap-8 self-stretch lg:flex"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`group inline-flex h-full items-center font-mono text-sm transition-colors ${
                    isActive
                      ? 'text-site-heading'
                      : 'text-site-body hover:text-site-heading'
                  }`}
                >
                  <span
                    className={`${underlineBase} ${
                      isActive
                        ? 'after:scale-x-100'
                        : 'after:scale-x-0 group-hover:after:scale-x-100'
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              )
            })}
          </nav>

          <div className="absolute right-6 flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="text-site-body hover:text-site-heading rounded-lg py-2 pr-0 pl-4 transition-colors lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <CloseIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
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
            {navItems.map((item) => {
              const isActive = activeId === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`font-mono text-lg transition-colors ${
                    isActive
                      ? 'text-site-heading'
                      : 'text-site-body hover:text-site-heading'
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>
      ) : null}
    </>
  )
}
