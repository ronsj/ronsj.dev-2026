'use client'

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { THEME_COOKIE, themeCookieValue, type Theme } from '@/lib/theme'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

function persistTheme(theme: Theme) {
  applyTheme(theme)
  try {
    window.localStorage.setItem(THEME_COOKIE, theme)
    document.cookie = themeCookieValue(theme)
  } catch {
    // Ignore storage failures in restricted environments.
  }
}

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(THEME_COOKIE)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Ignore storage failures in restricted environments.
  }
  return null
}

export function ThemeProvider({
  children,
  initialTheme,
}: {
  children: React.ReactNode
  initialTheme: Theme
}) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useLayoutEffect(() => {
    const storedTheme = readStoredTheme()

    if (storedTheme && storedTheme !== initialTheme) {
      persistTheme(storedTheme)
      queueMicrotask(() => setTheme(storedTheme))
      return
    }

    applyTheme(initialTheme)
  }, [initialTheme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      persistTheme(next)
      return next
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
