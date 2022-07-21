import React from 'react'

function Sat({ closeModal, sat }) {
  if (sat.length === 0) {
    return <h1>No sessions for this day.</h1>
  }
  return (
    <div>
      {sat ? sat.map((sat, i) => {
        return (
          <div className='cards' key={i}>
            <h2>{sat.name}</h2>
          </div>
        )
      })
        : <h2>searching for sessions</h2>
      }
    </div>
  )
}

export default Sat