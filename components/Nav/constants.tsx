import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import styles from '../../styles/Nav.module.scss'

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/mikwis01/',
    child: <FaLinkedinIn size="20" className={styles.icons} />
  },
  {
    href: 'https://github.com/mikwis01',
    child: <FaGithub size="20" className={styles.icons} />
  }
]
