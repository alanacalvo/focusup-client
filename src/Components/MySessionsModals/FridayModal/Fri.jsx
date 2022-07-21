import React from 'react'

function Fri({ closeModal, fri }) {
  if (fri.length === 0) {
    return <h1>No sessions for this day.</h1>
  }
  return (
    <div>
      {fri ? fri.map((fri, i) => {
        return (
          <div className='cards' key={i}>
            <h2>{fri.name}</h2>
          </div>
        )
      })
        : <h2>searching for sessions</h2>
      }
    </div>
  )
}

export default Fri