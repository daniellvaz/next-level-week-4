import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={styles.profile}>
      <img src="https://github.com/daniellvaz.png" alt="Profile image"/>
      <div>
        <strong>
          Daniel Murilo Vaz
        </strong>
        <p>
          <img src="icons/level.svg" alt="up"/>
          Level 1
        </p>
      </div>
    </div>
  )
}