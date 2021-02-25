import { useContext } from "react";

import { ChallengeContext } from "../contexts/ChallengeContext";

import styles from '../styles/components/CompleteChallanges.module.css'

export function CompleteChallanges() {
  const { challengeCompleted } = useContext(ChallengeContext)
  return(
    <div className={styles.completeChallenge}>
      <strong>Desafios completos</strong>
      <strong>{challengeCompleted}</strong>
    </div>
  )
}