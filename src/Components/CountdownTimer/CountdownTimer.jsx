import './CountdownTimer.scss'
import { useState } from 'react';
import { TimerContext, useTimer } from '../../Context/TimerContext';
import PostSessionForm from '../PostSessionForm/PostSessionForm';
import { useCallback } from 'react';
import { useEffect } from 'react';

function CountdownTimer({ setOpenTimerModal }) {

  const { timer, active, setActive, secondsRemaining, setOpenPostSessionForm } = useTimer(TimerContext);

  // const checkTimerEnd = useCallback(() => {
  //   console.log(timer)
  //   if (!secondsRemaining) {
  //     setOpenTimerModal(false)
  //     setOpenPostSessionForm(true)
  //   }
  // }, [secondsRemaining])
  // console.log(openPostSessionForm)

  useEffect(() => {
    console.log('active', active)
    console.log(secondsRemaining, 'seconds')
    if (active && !secondsRemaining) {
      setOpenTimerModal(false)
      setOpenPostSessionForm(true)
    }
  }, [secondsRemaining, active])

  return (
    <div className='countdown-timer'>
      {timer}
    </div>
  )
}

export default CountdownTimer;