import React from 'react'
import './DayButton.scss'

function DayButton() {

  // const timeStampedSessions = () => {

  // }

  return (
    <div className='DayButtonContainer'>


      <h2>My Sessions</h2>

      <div className='InnerContainer'>
      <button className='dayButton'
        // onClick={(() => 
          
        //   )}
      >Sunday</button>
      <button className='dayButton'>Monday</button>
      <button className='dayButton'>Tuesday</button>
      <button className='dayButton'>Wednesday</button>
      <button className='dayButton'>Thursday</button>
      <button className='dayButton'>Friday</button>
      <button className='dayButton'>Saturday</button>
      </div>
    </div>
  )
}

export default DayButton