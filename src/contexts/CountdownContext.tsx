import { create } from "domain";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ChallengeContext";

interface CountdowContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCicle: () => void,
  resetCicle: () => void
}

interface ContextProviderPrors {
  children: ReactNode;
}


export const CountdownContext = createContext({} as CountdowContextData);

let countdownTimeOut: NodeJS.Timeout

export function ContdownProvider({children}: ContextProviderPrors) {

  const [time, setTime] = useState(0.1 * 60);
  const [ isActive, setIsActive ] = useState(false);
  const [ hasFinished, setHasFinished ] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const { startNewChallenge } = useContext(ChallengeContext)

  function resetCicle() {
    clearTimeout(countdownTimeOut)
    setIsActive(false);
    setHasFinished(false);
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

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCicle,
      resetCicle
    }}>
      {children}
    </CountdownContext.Provider>
  )
}