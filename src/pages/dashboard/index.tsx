import { useRouter } from "next/router";
import cookie from "js-cookie";

import { CompleteChallanges } from '../../components/CompleteChallenge';
import { Countdown } from '../../components/Countdown';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { ChallengeBox } from '../../components/ChallengeBox';

import styles from '../../styles/pages/Dashboard.module.css'
import Head from 'next/head'

export default function Dashboard() {
  const router = useRouter()

  const { name, image, twitter } = router.query;

  cookie.set('name', name);
  cookie.set('image', image);
  cookie.set('twitter', twitter);

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