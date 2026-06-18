import { ImageResponse } from 'next/og'
import { hero } from '@/lib/portfolio-data'
import { siteUrl } from '@/lib/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadGoogleFont(
  family: string,
  weight: number
): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    }
  ).then((res) => res.text())

  const resource = css.match(
    /src: url\((.+)\) format\('(?:opentype|truetype)'\)/
  )

  if (!resource?.[1]) {
    throw new Error(`Failed to load font: ${family}`)
  }

  return fetch(resource[1]).then((res) => res.arrayBuffer())
}

const playfairBold = loadGoogleFont('Playfair+Display', 700)
const jetBrainsMono = loadGoogleFont('JetBrains+Mono', 400)
const inter = loadGoogleFont('Inter', 400)

export default async function Image() {
  const [playfairData, monoData, interData] = await Promise.all([
    playfairBold,
    jetBrainsMono,
    inter,
  ])

  const domain = new URL(siteUrl).hostname

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#161618',
        padding: 80,
      }}
    >
      <div
        style={{
          fontFamily: 'JetBrains Mono',
          fontSize: 28,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#5ec4b6',
        }}
      >
        {hero.label}
      </div>
      <div
        style={{
          fontFamily: 'Playfair Display',
          fontSize: 96,
          fontWeight: 700,
          color: '#e8e6e1',
          marginTop: 32,
          lineHeight: 1,
        }}
      >
        {hero.name}
      </div>
      <div
        style={{
          fontFamily: 'Inter',
          fontSize: 28,
          color: '#8a8a9a',
          marginTop: 40,
        }}
      >
        {domain}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Playfair Display',
          data: playfairData,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'JetBrains Mono',
          data: monoData,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: interData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  )
}
