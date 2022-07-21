import './CountdownTimer.scss'
import { useContext } from 'react';
import { TimerContext, useTimer } from '../../Context/TimerContext';
import PostSessionForm from '../PostSessionForm/PostSessionForm';

function CountdownTimer() {
  const {timer} = useTimer(TimerContext);
  return (
    <div className='countdown-timer'>
      {timer}
      {timer === '00:00:01' && <PostSessionForm />}
    </div>
  )
}

export default CountdownTimer;