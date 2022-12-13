'use client'

import { useRef } from 'react'
import { useSlider } from './useSlider'
import { ProjectDescription } from '../ProjectDescription/ProjectDescription'
import { ProjectHeader } from '../ProjectHeader/ProjectHeader'
import { ProjectPhoto } from '../ProjectPhoto/ProjectPhoto'
import { ProjectSliderNavigation } from '../ProjectSliderNavigation/ProjectSliderNavigation'
import bg from '../../assets/galaxyhub_showcase.png'
import bg2 from '../../assets/chatly_showcase.png'

import styles from '../../styles/MainSection.module.scss'

export const MainSection = () => {
  const article1 = useRef<HTMLElement>(null!)
  const article2 = useRef<HTMLElement>(null!)
  const articles = [article1, article2]
  const [handleLeftArrow, handleRightArrow] = useSlider(articles)

  return (
    <main className={styles.container}>
      <article className={styles.slide} ref={article1} data-status={'active'}>
        <ProjectPhoto background={bg} />

        <ProjectDescription
          project_desc="Galaxyhub project agregates the latest posts from three different websites, and displays
            them in a user-friendly way."
          stack_desc="I created this website by using MERN stack and REDUX."
        />

        <ProjectHeader
          href="https://melodic-pika-7a1818.netlify.app"
          header="CRYPTOCURRENCY NEWS HUB"
        />

        <ProjectSliderNavigation
          handleLeftArrow={handleLeftArrow}
          handleRightArrow={handleRightArrow}
        />
      </article>

      <article className={styles.slide} ref={article2} data-status={'inactive'}>
        <ProjectPhoto background={bg2} />

        <ProjectDescription
          project_desc='Chatly is a messenger "clone" desktop web app.'
          stack_desc="I created this website using React and Firebase. I used Context API for my state
          manager."
        />

        <ProjectHeader
          href="https://endearing-valkyrie-40e436.netlify.app/"
          header="MESSENGER CLONE CHAT APP"
        />

        <ProjectSliderNavigation
          handleLeftArrow={handleLeftArrow}
          handleRightArrow={handleRightArrow}
        />
      </article>
    </main>
  )
}
