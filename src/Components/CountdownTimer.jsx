import './countdowntimer.css'
import { useState, useEffect, useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';
import axios from 'axios';

function CountdownTimer() {

  const {timer} = useContext(TimerContext);

  const [remainingTime, setRemainingTime] = useState();


  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(timer);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  function updateRemainingTime(){
    console.log('hello world')
  }

  return (
    <div className='countdown-timer'>
      <div>Time Length{console.log(timer)}</div>
      {/* <span>{remainingTime.hours}</span>
      <span>:</span>
      <span>{remainingTime.minutes}</span> */}
    </div>
  )
}

export default CountdownTimer;