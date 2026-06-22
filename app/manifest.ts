import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ron San Jose | Frontend Engineer',
    short_name: 'Ron San Jose',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#161618',
    background_color: '#161618',
    display: 'standalone',
  }
}
