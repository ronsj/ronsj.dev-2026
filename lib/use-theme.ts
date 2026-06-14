'use client'

import { useCallback, useSyncExternalStore } from 'react'
import {
  persistTheme,
  readStoredTheme,
  subscribeTheme,
  type Theme,
} from '@/lib/theme'

function getServerSnapshot(): Theme {
  return 'light'
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    readStoredTheme,
    getServerSnapshot
  )

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    persistTheme(next)
  }, [theme])

  return { theme, toggleTheme }
}
