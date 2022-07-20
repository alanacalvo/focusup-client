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

  function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}
  const interval = () => setTimeout(() => {
    if (secondsRemaining) {
      setSecondsRemaining(secondsRemaining - 1)
    }
  }, 1000)

  useEffect(() => {
    if (secondsRemaining) {
      interval()
      console.log(secondsRemaining)
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

