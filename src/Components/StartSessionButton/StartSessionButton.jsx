import React, { useState } from 'react'
import './StartSessionButton.scss'

function StartSessionButton({ setOpenModal }) {

  return (
    <button className='StartSessionBtn' onClick={() => setOpenModal(true)}>
      <h2>Ready to get started, Alana?</h2>
    </button>
  )
}

export default StartSessionButton