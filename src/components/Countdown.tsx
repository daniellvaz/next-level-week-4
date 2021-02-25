import { useState, useEffect, useContext } from "react";

import { ChallengeContext } from "../contexts/ChallengeContext";

import styles from '../styles/components/Countdown.module.css';


let countdownTimeOut: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60);
  const [ isActive, setIsActive ] = useState(false);
  const [ hasFinished, setHasFinished ] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [ minutLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
  const [ secondLeft, secondeRight ] = String(seconds).padStart(2, '0').split('');

  const { startNewChallenge } = useContext(ChallengeContext)

  function resetCicle() {
    clearTimeout(countdownTimeOut)
    setIsActive(false);
    setTime(0.1*60);
  }

  function startCicle() {
    setIsActive(true);
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge()
    }
  }, [isActive, time])

  return( 
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondeRight}</span>
        </div>
      </div>
      {
        hasFinished ? (
          <button 
            disabled
            className={styles.countdownButton}
          >
            Ciclo encerrado
            <img src="ok.svg"/>
          </button>
        ) : (
          <>
            {
              isActive ? (
                <button 
                  type="button" 
                  onClick={resetCicle} 
                  className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                >
                  Abandonar ciclo
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={startCicle} 
                  className={styles.countdownButton}
                >
                  Iniciar um ciclo
                </button>
              )
            }
          </>
        )
      }
      
    </div>
  )
}