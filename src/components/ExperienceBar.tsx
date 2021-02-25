import { useContext } from "react";

import { ChallengeContext } from "../contexts/ChallengeContext";

import style from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <div className={style.experienceBar}>
      <strong>0 xp</strong>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}/>
        <span className={style.currentExperience} style={{ left: `${percentToNextLevel}%` }}> {currentExperience} xp</span>
      </div>
      <strong>{experienceToNextLevel} xp</strong>
    </div>
  )
}