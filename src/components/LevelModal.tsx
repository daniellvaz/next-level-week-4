import { useContext } from "react";
import { GrTwitter } from "react-icons/gr";
import { ChallengeContext } from "../contexts/ChallengeContext";

import styles from "../styles/components/LevelModal.module.css";

export function LevelModal() {
  const { level, setIsLevelModalUp } = useContext(ChallengeContext)

  return (
    <div className={styles.levelModelContainer}>
      <div>
        <header>
          <button onClick={() => setIsLevelModalUp(false)}>
            <img src="/icons/close.svg"/>
          </button>
        </header>
        <main>
          <div>   
            <h1>{level}</h1>
          </div>
          <strong>Parabéns</strong>
          <p>Você alcanço um novo level.</p>
        </main>
        <footer>
          <button>Compartilhar no Twitter {<GrTwitter/>}</button>
        </footer>
      </div>
    </div>
  )
}