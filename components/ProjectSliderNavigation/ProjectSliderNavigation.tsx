import { TbArrowNarrowLeft, TbArrowNarrowRight } from 'react-icons/tb'

import styles from '../../styles/ProjectSliderNavigation.module.scss'

interface Props {
  handleLeftArrow: () => void
  handleRightArrow: () => void
}

export const ProjectSliderNavigation = (props: Props) => {
  const { handleLeftArrow, handleRightArrow } = props

  return (
    <div className={`${styles.project_navigation}`}>
      <div className={styles.project_navigation_left} onClick={handleLeftArrow}>
        <TbArrowNarrowLeft size="70" />
      </div>
      <div className={styles.project_navigation_right} onClick={handleRightArrow}>
        <TbArrowNarrowRight size="70" />
      </div>
    </div>
  )
}
