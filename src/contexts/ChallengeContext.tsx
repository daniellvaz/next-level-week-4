import { createContext,
 ReactNode, useState } from 'react';

import challenges from "../../challenges.json";

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
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallend: () => void;
}

interface ChallengeProviderPrors {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallengeProvider({ children } : ChallengeProviderPrors) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [isActiveChallenge, setisActiveChallenge] = useState(null);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge(){
    const randonChallenge = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randonChallenge]
    
    setisActiveChallenge(challenge)
  }

  function resetChallend() {
    setisActiveChallenge(null)
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
      resetChallend
    }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}