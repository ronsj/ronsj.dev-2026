import type { MetadataRoute } from 'next'
import { siteName, siteTitle } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteTitle,
    short_name: siteName,
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#161618',
    background_color: '#161618',
    display: 'standalone',
  }
}
