
import { CompleteChallanges } from '../components/CompleteChallenge';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>inícion | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div className={styles.lefContainer}>
          <Profile />
          <CompleteChallanges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
