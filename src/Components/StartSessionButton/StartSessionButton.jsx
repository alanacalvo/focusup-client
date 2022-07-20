import React, { useState } from 'react'
import NewSession from '../NewSession/NewSession'
import './StartSessionButton.scss'

function StartSessionButton() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      {openModal && <NewSession closeModal={setOpenModal} />}
      <button className='StartSessionBtn' onClick={() => setOpenModal(true)}>
        <h2>Ready to get started, Alana?</h2>
      </button>
    </>
  )
}

export default StartSessionButton