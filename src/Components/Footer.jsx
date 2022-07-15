import React from 'react'

function Footer({ setOpenModal }) {
  
  return (
    
      <div className='newSessionBtn' onClick={() => setOpenModal(true)}>
        <h1>Ready to get started, user?</h1>
        </div>
    
  )
}

export default Footer