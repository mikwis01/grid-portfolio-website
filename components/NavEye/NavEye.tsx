import { forwardRef } from 'react'

export const NavEye = forwardRef<SVGSVGElement | null>((props, ref) => {
  return (
    <svg
      ref={ref}
      width="79"
      height="36"
      viewBox="0 0 79 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 19C35.5258 -19.0284 26.2689 16.5661 78.1827 17.817C26.2689 19.068 35.5258 55.8455 1 17.817"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M33.525 18.0127C33.525 22.9993 29.5364 27.0202 24.6426 27.0202C19.7489 27.0202 15.7603 22.9993 15.7603 18.0127C15.7603 13.0261 19.7489 9.00525 24.6426 9.00525C29.5364 9.00525 33.525 13.0261 33.525 18.0127Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
})

NavEye.displayName = 'NavEye'
