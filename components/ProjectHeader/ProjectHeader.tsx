import styles from '../../styles/ProjectHeader.module.scss'

interface Props {
  href: string
  header: string
}

export const ProjectHeader = (props: Props) => {
  const { href, header } = props

  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${styles.project_title} `}>
      <h2>{header}</h2>
    </a>
  )
}
