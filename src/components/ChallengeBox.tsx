import { useContext } from 'react'

import { ChallengeContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { isActiveChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCicle } = useContext(CountdownContext)

  function handleChallengeFail() {
    resetChallenge();
    resetCicle();
  }

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCicle();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {
        isActiveChallenge ? (
          <div className={styles.challengeActive}>
            <header>
              Ganhe {isActiveChallenge.amount} xp
            </header>
            <main>
              <img src={`icons/${isActiveChallenge.type}.svg/`} />
              <strong>Novo desafio</strong>
              <p>{isActiveChallenge.description}</p>
            </main>
            <footer>
              <button 
                type="button"
                className={styles.challengeFailButton}
                onClick={handleChallengeFail}
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSucceededButton}
                onClick={handleChallengeSucceeded}
              >
                Completei
              </button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeNotActive}>
            <strong>
              Inicie um ciclo
              para receber desafios a
              serem completados
            </strong>
            <p>
              <img src="icons/level-up.svg"/>
              Complete-os e ganhe
              experiência e avance de level.
            </p>
          </div>
        )
      }
    </div>
  )
}