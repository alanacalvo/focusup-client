import React, { useState } from 'react'
import NewSession from '../NewSession/NewSession'
import { TimerContext, useTimer } from '../../Context/TimerContext'
import PostSessionForm from '../PostSessionForm/PostSessionForm'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import './StartSessionButton.scss'

function StartSessionButton() {
  const [openNewSessionModal, setOpenNewSessionModal] = useState(false)
  // const { timer, setTimer,
  //   setSecondsRemaining, setSessionStarted } = useTimer(TimerContext);

  return (
    <>
      <button className='StartSessionBtn' onClick={() => setOpenNewSessionModal(true)}>
        <h2>Ready to get started, Alana?</h2>
      </button>
      {openNewSessionModal && <NewSession setOpenNewSessionModal={setOpenNewSessionModal} />}

    </>
  )
}

export default StartSessionButton