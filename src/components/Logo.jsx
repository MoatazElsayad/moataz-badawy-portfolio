import React from 'react'

const Logo = ({ animated = true, className = '' }) => (
  <svg
    className={`logo-icon mb-logo ${animated ? '' : 'logo-static'} ${className}`.trim()}
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
  >
    {/* Solid plate */}
    <rect width="96" height="96" rx="22" fill="var(--secondary-color)" />

    {/* MB carved out */}
    <g
      transform="translate(48 48) scale(0.74) translate(-44.5 -48)"
      fill="none"
      stroke="#0A1220"
      strokeWidth="10"
      strokeLinecap="butt"
      strokeLinejoin="miter"
    >
      <path className="mb-stroke mb-m" pathLength="100" d="M14 67 V29 L27 51 L40 29 V67" />
      <path className="mb-stroke mb-b1" pathLength="100" d="M52 67 V29 H63 Q74 29 74 38.75 Q74 48.5 63 48.5 H52" />
      <path className="mb-stroke mb-b2" pathLength="100" d="M52 48.5 H64 Q75 48.5 75 57.75 Q75 67 64 67 H52" />
    </g>
  </svg>
)

export default Logo
