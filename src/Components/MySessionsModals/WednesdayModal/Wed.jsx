import React from 'react'

function Wed({ wed, closeModal }) {
  console.log(wed)
  if (wed.length === 0) {
    return <h1>No sessions for this day.</h1>
  }
  return (
    <div>
      {wed ? wed.map((wed, i) => {
        return (
          <div className='cards' key={i}>
            <h2>{wed.name}</h2>
          </div>
        )
      }
      )
        : <h2>searching for sessions</h2>
      }
    </div>

  )
}

export default Wed