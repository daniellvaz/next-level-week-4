import { FaArrowRight } from "react-icons/fa";

import styles from "../styles/pages/Home.module.css";

export default function Home() {

  return (
    <div className={styles.homeContainer}>
      <head>
        <title>Login | move.it</title>
      </head>
      <div className={styles.homeContent}>
        <div>

        </div>
        <div className={styles.login}>
          <img src="Logo-white.svg" alt=""/>
          <strong>Bem-vindo</strong>
          <div>
            <img src="/icons/github.svg"/>
            <p>
              Faça login com seu Github<br/>
              para começar
            </p>
          </div>
          <a href="/api/login/github">
            <button 
              type="button"
              className={styles.homeButtonGitHub}
            >
              ir para o GitHub 
              <FaArrowRight/>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
