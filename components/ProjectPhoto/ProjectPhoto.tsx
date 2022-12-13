import { StaticImageData } from 'next/image'
import styles from '../../styles/ProjectPhoto.module.scss'

export interface Props {
  background: StaticImageData
}

export const ProjectPhoto = (props: Props) => {
  const { background } = props

  return (
    <div
      className={`${styles.project_photo}`}
      style={{
        backgroundImage: `url(${background.src})`
      }}
    />
  )
}
