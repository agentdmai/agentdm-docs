export function LogoIcon({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 88"
      fill="currentColor"
      width={size}
      height={Math.round(size * (88 / 220))}
      className={className}
      aria-hidden="true"
    >
      {/* Left rectangle */}
      <rect x="16" y="16" width="56" height="56" rx="2" />
      {/* Arrow */}
      <path
        d="M96 44 L128 44 M118 32 L132 44 L118 56"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right rectangle */}
      <rect x="148" y="16" width="56" height="56" rx="2" />
    </svg>
  );
}
