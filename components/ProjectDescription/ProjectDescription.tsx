import styles from '../../styles/ProjectDescription.module.scss'

interface Props {
  project_desc: string
  stack_desc: string
}

export const ProjectDescription = (props: Props) => {
  const { project_desc, stack_desc } = props

  return (
    <div className={`${styles.project_description}`}>
      <p>
        {project_desc}
        <br />
        <br />
        {stack_desc}
      </p>
    </div>
  )
}
