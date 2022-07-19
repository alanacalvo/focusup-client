import React, { useState } from 'react'
import './StartSessionButton.scss'

function StartSessionButton({ setOpenModal }) {

  return (
    <div className='StartSessionBtnContainer'>   {
      <div className='StartSessionBtn' onClick={() => setOpenModal(true)}>
        <h1>Ready to get started, user?</h1>
        </div>
    }</div>
  )
}

export default StartSessionButton