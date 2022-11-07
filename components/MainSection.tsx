'use client'

import { useState, useRef } from 'react'

import { TbArrowNarrowLeft, TbArrowNarrowRight } from 'react-icons/tb'
import bg from '../assets/galaxyhub_showcase.png'
import bg2 from '../assets/chatly_showcase.png'

import styles from '../styles/MainSection.module.scss'

const MainSection = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const article1 = useRef(null)
	const article2 = useRef(null)

	const articles = [article1, article2]

	const handleRightArrow = () => {
		const lastSlide = activeIndex === articles.length - 1
		const newIndex = lastSlide ? 0 : activeIndex + 1

		console.log(`ACTIVE INDEX: ${activeIndex} NEXT INDEX: ${newIndex}`)

		// @ts-ignore: Object is possibly 'null'.
		articles[activeIndex].current.dataset.status = 'inactive'

		// @ts-ignore: Object is possibly 'null'.
		articles[newIndex].current.dataset.status = 'active-from-right'

		setTimeout(() => {
			// @ts-ignore: Object is possibly 'null'.
			articles[newIndex].current.dataset.status = 'active'

			setActiveIndex(newIndex)
		})
	}

	const handleLeftArrow = () => {
		const firstSlide = activeIndex === 0
		const newIndex = firstSlide ? articles.length - 1 : activeIndex - 1

		console.log(`ACTIVE INDEX: ${activeIndex} NEXT INDEX: ${newIndex}`)

		// @ts-ignore: Object is possibly 'null'.
		articles[activeIndex].current.dataset.status = 'inactive'

		// @ts-ignore: Object is possibly 'null'.
		articles[newIndex].current.dataset.status = 'active-from-left'

		setTimeout(() => {
			// @ts-ignore: Object is possibly 'null'.
			articles[newIndex].current.dataset.status = 'active'

			setActiveIndex(newIndex)
		})

		setActiveIndex(newIndex)
	}

	return (
		<main className={styles.container}>
			<article
				className={styles.slide}
				ref={article1}
				data-status={'active'}>
				<div
					className={`${styles.project_photo} ${styles.slide_section}`}
					style={{
						backgroundImage: `url(${bg.src})`
					}}
				/>
				<div
					className={`${styles.project_description} ${styles.slide_section}`}>
					<p>
						Galaxyhub project agregates the latest posts from three
						different websites, and displays them in a user-friendly
						way.
						<br />
						<br />I created this website by using MERN stack and
						REDUX.
					</p>
				</div>
				<a
					href="https://melodic-pika-7a1818.netlify.app"
					target="_blank"
					rel="noreferrer"
					className={`${styles.project_title} ${styles.slide_section}`}>
					<h2>CRYPTOCURRENCY NEWS HUB</h2>
				</a>
				<div
					className={`${styles.project_navigation} ${styles.slide_section}`}>
					<div
						className={styles.project_navigation_left}
						onClick={handleLeftArrow}>
						<TbArrowNarrowLeft size="70" />
					</div>
					<div
						className={styles.project_navigation_right}
						onClick={handleRightArrow}>
						<TbArrowNarrowRight size="70" />
					</div>
				</div>
			</article>
			<article
				className={styles.slide}
				ref={article2}
				data-status={'inactive'}>
				<div
					className={`${styles.project_photo} ${styles.slide_section}`}
					style={{
						backgroundImage: `url(${bg2.src})`
					}}
				/>
				<div
					className={`${styles.project_description} ${styles.slide_section}`}>
					<p>
						Chatly is a messenger "clone" desktop web app.
						<br />
						<br />I created this website using React and Firebase. I
						used Context API for my state manager.
					</p>
				</div>
				<a
					href="https://endearing-valkyrie-40e436.netlify.app/"
					target="_blank"
					rel="noreferrer"
					className={`${styles.project_title} ${styles.slide_section}`}>
					<h2>MESSENGER CLONE CHAT APP</h2>
				</a>
				<div
					className={`${styles.project_navigation} ${styles.slide_section}`}>
					<div
						className={styles.project_navigation_left}
						onClick={handleLeftArrow}>
						<span className={styles.project_navigation_left_arrow}>
							<TbArrowNarrowLeft size="70" />
						</span>
					</div>
					<div
						className={styles.project_navigation_right}
						onClick={handleRightArrow}>
						<span className={styles.project_navigation_right_arrow}>
							<TbArrowNarrowRight size="70" />
						</span>
					</div>
				</div>
			</article>
		</main>
	)
}

export default MainSection
