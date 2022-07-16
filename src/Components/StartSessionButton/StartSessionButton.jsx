import React, { useState } from 'react'

function StartSessionButton({ setOpenModal }) {

  return (
    <div>   {
      <div className='StartSessionBtn' onClick={() => setOpenModal(true)}>
        <h1>Ready to get started, user?</h1>
        </div>
    }</div>
  )
}

export default StartSessionButton