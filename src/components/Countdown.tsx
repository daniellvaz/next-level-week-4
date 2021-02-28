import { useContext } from "react";

import { CountdownContext } from "../contexts/CountdownContext";

import styles from '../styles/components/Countdown.module.css';


export function Countdown() {

  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCicle,
    startCicle 
  } = useContext(CountdownContext)
  

  const [ minutLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
  const [ secondLeft, secondeRight ] = String(seconds).padStart(2, '0').split('');


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