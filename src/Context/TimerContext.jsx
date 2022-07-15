import { useEffect } from 'react';
import { React, createContext, useContext, useState } from 'react';

export const TimerContext = createContext();
// const TimerUpdateContext = createContext();

export function useTimer() {
  return useContext(TimerContext)
}

// export function TimerUpdateContext() {
//   return useContext(TimerContext)
// }

export const TimerProvider = ({ children }) => {
  
  const [timer, setTimer] = useState({ hours: 0, minutes: 0 });
  
  const [secondsRemaining, setSecondsRemaining] = useState(0)

  const [sessionStarted, setSessionStarted] = useState();

  const interval = () => setTimeout(() => {
    if (secondsRemaining) {
      setSecondsRemaining(secondsRemaining - 1)
    }
  }, 1000)

  useEffect(() => {
    if (secondsRemaining) {
      interval()
      // console.log(secondsRemaining)
    }
  }, [secondsRemaining])
  
  // const [duration, setDuration] = useState({ hours: '00', minutes: '00' })

  // const onChange = (duration) => {
  //   setDuration(
  //     (duration.hours > 9 ? duration.hours : '0' + duration.hours) + ':' +
  //     (duration.minutes > 9 ? duration.minutes : '0' + duration.minutes)
  //     )
  //     console.log(duration)
  //   // .then( RESET DURATION PICKER )
  // };

  return (
    <TimerContext.Provider value={{timer, setTimer, setSecondsRemaining, secondsRemaining, sessionStarted, setSessionStarted}}>
      {/* <TimerUpdateContext.Provider value={}> */}
        {children}
      {/* </TimerUpdateContext.Provider> */}
    </TimerContext.Provider>
  )
}

