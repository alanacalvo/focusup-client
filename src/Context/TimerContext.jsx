import { useEffect } from 'react';
import { React, createContext, useContext, useState } from 'react';

export const TimerContext = createContext();

export function useTimer() {
  return useContext(TimerContext)
}

export const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState();
  const [secondsRemaining, setSecondsRemaining] = useState()


function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours   = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  // if (seconds === 0) {seconds = "00"}
  return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}
const interval = () => setTimeout(() => {
  if (secondsRemaining) {
    setSecondsRemaining(secondsRemaining - 1)
  } 
}, 1000)

const timerDisplay = convertHMS(secondsRemaining)
useEffect(() => {
    if (timerDisplay) {
      // const timerdddd = timerDisplay -1
      setTimer(timerDisplay)
      console.log(timer)
      interval()
    }
  }, [secondsRemaining])
  
  return (
    <TimerContext.Provider value={{ timer, setSecondsRemaining, secondsRemaining }}>
        {children}
    </TimerContext.Provider>
  )
}

