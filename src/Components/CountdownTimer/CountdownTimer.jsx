import './CountdownTimer.scss'
import { useContext } from 'react';
import { TimerContext, useTimer } from '../../Context/TimerContext';



function CountdownTimer() {
  const {timer} = useTimer(TimerContext);
  return (
    <div className='countdown-timer'>
      <h2>{timer}</h2>
    </div>
  )
}

export default CountdownTimer;