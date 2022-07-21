import React from 'react'

function Mon({ closeModal, mon }) {
  if (mon.length === 0) {
    return <h1>No sessions for this day.</h1>
  }
  return (
    <div>
      {mon ? mon.map((mon, i) => {
        return (
          <div className='cards' key={i}>
            <h2>{mon.name}</h2>
          </div>
        )
      })
        : <h2>searching for sessions</h2>
      }
    </div>
  )
}

export default Mon