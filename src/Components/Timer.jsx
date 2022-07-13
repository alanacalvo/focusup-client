import React, { useState, useRef, useEffect, useContext } from 'react'
import { TimerContext } from '../Context/TimerContext';
  
const Timer = () => {

  const timer = useContext(TimerContext);
  
  
//   const msToTimer = () => {

//     const minutesMath = Math.floor((total / 1000 / 60) % 60);
//     const hoursMath = Math.floor((total / 1000 / 60 / 60) % 24);
//     return {
//         total, hoursMath, minutesMath
//     }
// }

// const startTimer = () => {

// }

    return (
        <div className="Timer">
            <h2>{timer.secondsRemaining}</h2>
            <button >Reset</button>
        </div>
    )
}
  
export default Timer;