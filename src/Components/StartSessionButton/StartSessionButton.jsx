import React, { useState } from 'react'
import NewSession from '../NewSession/NewSession'
import { TimerContext, useTimer } from '../../Context/TimerContext'
import PostSessionForm from '../PostSessionForm/PostSessionForm'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import './StartSessionButton.scss'

function StartSessionButton() {
  const [openModal, setOpenModal] = useState(false)
  const { timer, setTimer,
    setSecondsRemaining, setSessionStarted } = useTimer(TimerContext);

  return (
    <>
      <button className='StartSessionBtn' onClick={() => setOpenModal(true)}>
        <h2>Ready to get started, Alana?</h2>
      </button>
      {openModal && <NewSession closeModal={setOpenModal} />}
      {timer === 0
        ? <PostSessionForm />
        : <CountdownTimer />
      }
    </>
  )
}

export default StartSessionButton