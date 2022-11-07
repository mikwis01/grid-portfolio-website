'use client'

import { useRef, useEffect } from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

import styles from '../styles/Nav.module.scss'

const Nav = () => {
	const svgRef: any = useRef()
	const eyeBallRef: any = useRef()

	const angleCount = (
		mouseX: number,
		mouseY: number,
		eyeBallAchorX: number,
		eyeBallAnchorY: number
	) => {
		const dY: number = eyeBallAnchorY - mouseY
		const dX: number = eyeBallAchorX - mouseX

		const rad = Math.atan2(dY, dX)
		const deg = (rad * 180) / Math.PI

		return deg
	}

	const handleMouseMove = (e: any) => {
		const mouseX: number = e.clientX
		const mouseY: number = e.clientY

		const rekt = svgRef.current.getBoundingClientRect()
		const eyeBallAnchorX: number = rekt.left + rekt.width / 2
		const eyeBallAnchorY: number = rekt.top + rekt.height / 2

		const angle = angleCount(mouseX, mouseY, eyeBallAnchorX, eyeBallAnchorY)

		eyeBallRef.current.style.transform = `rotate(${90 + angle}deg)`
	}

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	})

	return (
		<nav className={styles.container}>
			<div className={styles.logo} onMouseMove={handleMouseMove}>
				<svg
					ref={svgRef}
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
				<div ref={eyeBallRef} className={styles.eyeball}></div>
			</div>
			<div className={styles.whoami}>
				<p>MIKOŁAJ WIŚNIEWSKI</p>
				<p>Front-end developer</p>
			</div>
			<ul className={styles.socials}>
				<li>
					<a
						href="https://www.linkedin.com/in/mikwis01/"
						target="_blank"
						rel="noreferrer">
						<FaLinkedinIn size="20" className={styles.icons} />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/mikwis01"
						target="_blank"
						rel="noreferrer">
						<FaGithub size="20" className={styles.icons} />
					</a>
				</li>
				<li>
					<a href="mailto:mikolajwisniewski01@gmail.com">
						<FaEnvelope size="20" className={styles.icons} />
					</a>
				</li>
			</ul>
			<div className={styles.contact}>
				<a href="mailto:mikolajwisniewski01@gmail.com">CONTACT ME</a>
			</div>
		</nav>
	)
}

export default Nav
