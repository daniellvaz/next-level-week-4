import { GetServerSideProps } from "next";
import router from "next/router";

import { CompleteChallanges } from '../../components/CompleteChallenge';
import { Countdown } from '../../components/Countdown';
import { ExperienceBar } from '../../components/ExperienceBar';
import { Profile } from '../../components/Profile';
import { ChallengeBox } from '../../components/ChallengeBox';
import { ContdownProvider } from "../../contexts/CountdownContext";

import styles from '../../styles/pages/Dashboard.module.css'
import Head from 'next/head'
import { ChallengeProvider } from "../../contexts/ChallengeContext";
import { AuthnContext } from "../../contexts/AuthContext";
import { SideBar } from "../../components/SideBar";
import { useContext, useEffect } from "react";
import axios from "axios";


interface IProps {
  level: number;
  experience: number;
  challengeCompleted: number;
}

export default function Dashboard(props: IProps) {
  
  return (
    <ChallengeProvider
      level={props.level}
      experience={props.experience}
      challengeCompleted={props.challengeCompleted}
    >  
    <SideBar /> 
    <div className={styles.container}>
      <Head>
        <title>início | move.it</title>
      </Head>
      <ExperienceBar />
      <ContdownProvider>
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
      </ContdownProvider>
    </div>
    </ChallengeProvider>
    
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, experience, challengeCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      experience: Number(experience),
      challengeCompleted: Number(challengeCompleted),
    }
  }
}