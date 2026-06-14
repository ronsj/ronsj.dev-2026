import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { parseTheme, THEME_COOKIE } from '@/lib/theme'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ron San Jose — Frontend Engineer',
  description:
    'Portfolio of Ron San Jose, a Frontend Engineer focused on fast, accessible React interfaces.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const theme = parseTheme(cookieStore.get(THEME_COOKIE)?.value)

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} ${jetBrainsMono.variable} ${theme === 'dark' ? 'dark' : ''} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-site-bg text-site-body min-h-full">
        <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  )
}
