import cookie from "js-cookie";
import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";

import styles from '../styles/components/Profile.module.css'

export function Profile() {

  const { level } = useContext(ChallengeContext);

  const name = cookie.get('name');
  const image = cookie.get('image');

  
  const url = `https://github.com/${image}.png`

  return(
    <div className={styles.profile}>
      <img src={url} alt="Profile image"/>
      <div>
        <strong>
          {name}
        </strong>
        <p>
          <img src="icons/level.svg" alt="up"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}