type IconProps = {
  className?: string
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.75 2.625h10.5v8.75H1.75V2.625Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="m1.75 3.5 5.25 3.937 5.25-3.937"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 98 96"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M41.44 69.385C28.807 67.853 19.906 58.762 19.906 46.99c0-4.785 1.723-9.953 4.594-13.398-1.244-3.158-1.053-9.858.383-12.633 3.828-.479 8.996 1.531 12.058 4.307 3.637-1.149 7.465-1.723 12.155-1.723s8.517.574 11.963 1.627c2.966-2.68 8.23-4.69 12.058-4.211 1.34 2.584 1.531 9.283.287 12.537 3.063 3.637 4.69 8.518 4.69 13.494 0 11.772-8.9 20.672-21.725 22.3 3.254 2.104 5.455 6.698 5.455 11.962v9.953c0 2.871 2.393 4.498 5.264 3.35C84.41 87.95 98 70.629 98 49.19 98 22.107 75.988 0 48.904 0S0 22.107 0 49.191c0 21.246 13.494 38.856 31.678 45.46 2.584.956 5.072-.766 5.072-3.35v-7.657c-1.34.575-3.062.958-4.594.958-6.316 0-10.049-3.446-12.728-9.858-1.053-2.584-2.201-4.115-4.403-4.402-1.148-.096-1.53-.574-1.53-1.149 0-1.148 1.913-2.01 3.827-2.01 2.776 0 5.168 1.723 7.657 5.264 1.914 2.776 3.923 4.02 6.316 4.02s3.924-.861 6.125-3.063c1.627-1.627 2.871-3.062 4.02-4.02"
      />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0M7.12 20.452H3.558V8.995H7.12zM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125m15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457z"
      />
    </svg>
  )
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5.625 2.5H3.125A.625.625 0 0 0 2.5 3.125v9.375c0 .345.28.625.625.625h9.375a.625.625 0 0 0 .625-.625V10.625"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M7.5 2.5h5v5M12.5 2.5 6.875 8.125"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 12.75V3.25M8 3.25 4.25 7M8 3.25l3.75 3.75"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 9 9 3M9 3H4.5M9 3v4.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m4 4 8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="2.75"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M8 1.75v1.5M8 12.75v1.5M1.75 8h1.5M12.75 8h1.5M3.46 3.46l1.06 1.06M11.48 11.48l1.06 1.06M3.46 12.54l1.06-1.06M11.48 4.52l1.06-1.06"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.25 2.1a5.75 5.75 0 1 0 7.65 7.65A4.75 4.75 0 1 1 6.25 2.1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
