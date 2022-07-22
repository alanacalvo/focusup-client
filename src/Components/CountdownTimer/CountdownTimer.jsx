import './CountdownTimer.scss'
import { useState } from 'react';
import { TimerContext, useTimer } from '../../Context/TimerContext';
import PostSessionForm from '../PostSessionForm/PostSessionForm';
import { useCallback } from 'react';
import { useEffect } from 'react';

function CountdownTimer({ setOpenTimerModal, setOpenPostSessionForm, openPostSessionForm }) {

  const {timer} = useTimer(TimerContext);

  const checkTimerEnd = useCallback(() => {
    console.log(timer)
    if (timer === '00:00:01') {
      setOpenTimerModal(false)
      setOpenPostSessionForm(true)
    }
  }, [timer])
  console.log(openPostSessionForm)

  useEffect(() => {
    checkTimerEnd();
  }, [timer])

  return (
    <div className='countdown-timer'>
      {timer}

      { openPostSessionForm && <PostSessionForm setOpenPostSessionForm={setOpenPostSessionForm}/> }
    </div>
  )
}

export default CountdownTimer;