'use client'

import dynamic from 'next/dynamic'

export const HeroCanvas = dynamic(
  () => import('@/components/hero-canvas').then((mod) => mod.HeroCanvas),
  { ssr: false }
)
