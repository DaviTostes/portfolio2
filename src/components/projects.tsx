import styles from '@/styles/projects.module.css'

const Projects = ({name, homepage, language}: {name: string, homepage: string, language: string}) => {
  return (
    <div className={styles.project}>
      <p className={styles.name}>{name}</p>
      <p className={styles.homepage}><a target='_blank' href={homepage}>{homepage}</a></p>
      <p className={styles.language}>{language}</p>
    </div>
  )
}

export default Projects