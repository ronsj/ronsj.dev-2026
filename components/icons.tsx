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
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9 1.5C4.86 1.5 1.5 4.92 1.5 9.08c0 3.35 2.17 6.19 5.18 7.19.38.07.52-.17.52-.37 0-.18-.01-.78-.01-1.42-2.11.39-2.56-.82-2.56-.82-.35-.9-.86-1.14-.86-1.14-.7-.48.05-.47.05-.47.78.05 1.19.8 1.19.8.69 1.18 1.81.84 2.25.64.07-.5.27-.84.49-1.03-1.69-.19-3.46-.84-3.46-3.74 0-.83.3-1.5.78-2.03-.08-.19-.34-.96.07-2 0 0 .64-.21 2.1.78a7.2 7.2 0 0 1 1.92-.26c.65 0 1.31.09 1.92.26 1.46-1 2.1-.78 2.1-.78.41 1.04.15 1.81.07 2 .49.53.78 1.2.78 2.03 0 2.91-1.78 3.55-3.47 3.74.27.23.51.68.51 1.37 0 .99-.01 1.79-.01 2.03 0 .2.14.44.53.37 3.01-1 5.18-3.84 5.18-7.19C16.5 4.92 13.14 1.5 9 1.5Z" />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.05 6.75H1.8v7.5h2.25v-7.5ZM2.925 2.25A1.305 1.305 0 0 0 1.5 3.57c0 .72.585 1.305 1.425 1.305.72 0 1.305-.585 1.305-1.305A1.305 1.305 0 0 0 2.925 2.25ZM15.75 14.25v-4.65c0-2.475-1.32-3.63-3.075-3.63-1.417 0-2.047.783-2.4 1.335h-.045V6.75H8.1c.03.675 0 7.2 0 7.5h2.13V10.8c0-.195-.015-.39.075-.53.165-.285.54-.585 1.17-.585 1.125 0 1.575.765 1.575 1.875v3.69h2.7Z" />
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
