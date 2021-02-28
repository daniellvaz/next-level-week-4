import { createContext,
 ReactNode, useEffect, useState } from 'react';
import Cookie from 'js-cookie'

import challenges from "../../challenges.json";
import { LevelModal } from '../components/LevelModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  isActiveChallenge: Challenge;
  experienceToNextLevel: number;
  challengeCompleted: number;
  isLevelModalUp: boolean;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  setIsLevelModalUp: (value: boolean) => void;
}

interface ChallengeProviderPrors {
  children: ReactNode;
  level: number;
  experience: number;
  challengeCompleted: number;
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallengeProvider({ children, ...rest } : ChallengeProviderPrors) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.experience ?? 0);
  const [isActiveChallenge, setisActiveChallenge] = useState(null);
  const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0);
  const [isLevelModalUp, setIsLevelModalUp] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);


  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookie.set('level', level.toString());
    Cookie.set('experience', currentExperience.toString());
    Cookie.set('challengeCompleted', challengeCompleted.toString())
  }, [level, currentExperience, challengeCompleted])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelModalUp(true)
  }

  function startNewChallenge(){
    const randonChallenge = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randonChallenge];
    
    setisActiveChallenge(challenge);

    new Audio('/notification.mp3').play()

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio 🔥', {
        body: `valendo ${challenge.amount}xp!`
      });
    }
  }

  function resetChallenge() {
    setisActiveChallenge(null);
  }

  function completeChallenge() {
    if(!isActiveChallenge) {
      return
    }

    const { amount } = isActiveChallenge;    

    let finalExperience =   currentExperience + amount;

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    setisActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);
  }

  return (
    <ChallengeContext.Provider value={{ 
      level,
      levelUp,
      currentExperience,
      experienceToNextLevel,
      challengeCompleted,
      startNewChallenge,
      isActiveChallenge,
      resetChallenge,
      completeChallenge,
      isLevelModalUp,
      setIsLevelModalUp
    }}
    >
      {children}
      { isLevelModalUp && <LevelModal/> }
      
    </ChallengeContext.Provider>
  )
}