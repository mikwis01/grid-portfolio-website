'use client'

import { useMouseMove } from './useMouseMove'
import { useRef } from 'react'
import { SOCIAL_LINKS } from './constants'
import { NavEye } from '../NavEye/NavEye'

import styles from '../../styles/Nav.module.scss'

export const Nav = () => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const eyeBallRef = useRef<HTMLDivElement | null>(null)
  const handleMouseMove = useMouseMove(svgRef, eyeBallRef)
  const mouseMoveHandler = () => handleMouseMove

  return (
    <nav className={styles.container}>
      <div className={styles.logo} onMouseMove={mouseMoveHandler}>
        <NavEye ref={svgRef} />
        <div ref={eyeBallRef} className={styles.eyeball}></div>
      </div>
      <div className={styles.whoami}>
        <p>MIKOŁAJ WIŚNIEWSKI</p>
        <p>Front-end developer</p>
      </div>
      <ul className={styles.socials}>
        {SOCIAL_LINKS.map((link) => (
          <li key={link.href}>
            <a target="_blank" rel="noreferrer">
              {link.child}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.contact}>
        <a href="mailto:mikolajwisniewski01@gmail.com">CONTACT ME</a>
      </div>
    </nav>
  )
}
