export const THEME_STORAGE_KEY = 'theme'

export type Theme = 'light' | 'dark'

const themeListeners = new Set<() => void>()

export function subscribeTheme(onStoreChange: () => void) {
  themeListeners.add(onStoreChange)

  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY || event.key === null) {
      onStoreChange()
    }
  }

  window.addEventListener('storage', onStorage)

  return () => {
    themeListeners.delete(onStoreChange)
    window.removeEventListener('storage', onStorage)
  }
}

function notifyThemeChange() {
  themeListeners.forEach((listener) => listener())
}

export function readStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Ignore storage failures in restricted environments.
  }
  return 'dark'
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function persistTheme(theme: Theme) {
  applyTheme(theme)
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Ignore storage failures in restricted environments.
  }
  notifyThemeChange()
}
