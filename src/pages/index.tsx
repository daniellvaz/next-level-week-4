import styles from "../styles/pages/Home.module.css";

export default function Home() {

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <img src="logo-full.svg" alt=""/>
        <form action="">
          <label>Email</label>
          <input type="email"/>
          <label>Senha</label>
          <input type="password"/>
          <button 
            type="button" 
            className={styles.homeButton}
          >
            Entrar
          </button>
          <strong>
            Ou
          </strong>
          <button 
            type="button"
            className={styles.homeButtonGitHub}
          >
            <a href="/api/login/github">
            Entrar com Github
            <img src="github.svg"/>
            </a>
          </button>
        </form>
      </div>
    </div>
  )
}
