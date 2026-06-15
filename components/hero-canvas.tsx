'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js'

const WIRE_FRAME_LINE_WIDTH = 1
const WIRE_FRAME_OPACITY_BASE = 0.18
const WIRE_FRAME_OPACITY_STEP = 0.06

const SHAPES = [
  () => new THREE.BoxGeometry(1.45, 1.45, 1.45),
  () => new THREE.TetrahedronGeometry(1.3),
  () => new THREE.OctahedronGeometry(1.1),
  () => new THREE.IcosahedronGeometry(1),
  () => new THREE.DodecahedronGeometry(0.95),
] as const

const POSITIONS: [number, number, number][] = [
  [-4.2, 2.6, 0.4],
  [-3.2, -2.4, -0.7],
  [1.8, 0.6, 1.0],
  [5.4, -2.0, -1.2],
  [6.8, 2.4, 0.3],
]

function getAccentColor() {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue('--site-accent')
      .trim() || '#2a9d8f'
  )
}

function createWireframeMesh(
  geometry: THREE.BufferGeometry,
  accent: string,
  opacity: number,
  resolution: THREE.Vector2
) {
  const edges = new THREE.EdgesGeometry(geometry)
  const lineGeometry = new LineSegmentsGeometry()
  lineGeometry.setPositions(new Float32Array(edges.attributes.position.array))

  const line = new LineSegments2(
    lineGeometry,
    new LineMaterial({
      color: new THREE.Color(accent),
      transparent: true,
      opacity,
      linewidth: WIRE_FRAME_LINE_WIDTH,
      depthWrite: false,
      resolution,
    })
  )

  geometry.dispose()
  edges.dispose()
  return line
}

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.set(0, 0, 9)
    camera.lookAt(1.3, 0, 0)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    const canvas = renderer.domElement
    canvas.style.display = 'block'
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    container.appendChild(canvas)

    const group = new THREE.Group()
    scene.add(group)

    const shapes: LineSegments2[] = []
    const baseX: number[] = []
    const resolution = new THREE.Vector2()

    const buildShapes = () => {
      const accent = getAccentColor()

      SHAPES.forEach((createGeometry, index) => {
        const geometry = createGeometry()
        const opacity =
          WIRE_FRAME_OPACITY_BASE + (index % 3) * WIRE_FRAME_OPACITY_STEP
        const shape = createWireframeMesh(geometry, accent, opacity, resolution)
        const [x, y, z] = POSITIONS[index] ?? [0, 0, 0]

        shape.position.set(x, y, z)
        shape.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        )

        baseX[index] = x
        group.add(shape)
        shapes.push(shape)
      })
    }

    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      if (width === 0 || height === 0) return

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
      resolution.set(width, height)
      shapes.forEach((shape) => {
        ;(shape.material as LineMaterial).resolution.copy(resolution)
      })
    }

    resize()
    buildShapes()
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    const pointer = { x: 0, y: 0 }
    const rotateGroupY = gsap.quickTo(group.rotation, 'y', {
      duration: 0.9,
      ease: 'power3.out',
    })
    const rotateGroupX = gsap.quickTo(group.rotation, 'x', {
      duration: 0.9,
      ease: 'power3.out',
    })
    const moveGroupY = gsap.quickTo(group.position, 'y', {
      duration: 0.7,
      ease: 'power2.out',
    })
    const moveGroupZ = gsap.quickTo(group.position, 'z', {
      duration: 0.7,
      ease: 'power2.out',
    })

    const meshParallax = shapes.map((shape) =>
      gsap.quickTo(shape.position, 'x', { duration: 1.1, ease: 'power2.out' })
    )

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)

      rotateGroupY(pointer.x * 0.45)
      rotateGroupX(pointer.y * 0.25)

      shapes.forEach((shape, index) => {
        const depth = shape.position.z
        meshParallax[index](baseX[index] + pointer.x * (0.35 + depth * 0.08))
      })
    }

    const onScroll = () => {
      const scrollY = window.scrollY
      moveGroupY(scrollY * 0.004)
      moveGroupZ(-scrollY * 0.0015)
      rotateGroupX(pointer.y * 0.25 + scrollY * 0.00008)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    const themeObserver = new MutationObserver(() => {
      const accent = getAccentColor()
      shapes.forEach((shape) => {
        ;(shape.material as LineMaterial).color.set(accent)
      })
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      shapes.forEach((shape, index) => {
        gsap.to(shape.position, {
          y: `+=${0.25 + (index % 3) * 0.1}`,
          duration: 2.6 + index * 0.35,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        })
        gsap.to(shape.rotation, {
          y: `+=${Math.PI * 2}`,
          duration: 16 + index * 2.5,
          repeat: -1,
          ease: 'none',
        })
      })
    })

    let frameId = 0
    const render = () => {
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
      themeObserver.disconnect()
      mm.revert()

      shapes.forEach((shape) => {
        shape.geometry.dispose()
        ;(shape.material as THREE.Material).dispose()
        group.remove(shape)
      })

      renderer.dispose()
      if (canvas.parentElement === container) {
        container.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full min-h-150 overflow-hidden"
    />
  )
}
