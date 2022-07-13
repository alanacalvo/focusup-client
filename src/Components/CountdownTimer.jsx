import '../assets/countdowntimer.css'
import { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';



function CountdownTimer() {
  const timer = useContext(TimerContext);
  return (
    <div className='countdown-timer'>
      <h2>{timer.secondsRemaining}</h2>
    </div>
  )
}

export default CountdownTimer;