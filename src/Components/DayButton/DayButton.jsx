import React from 'react'
import './DayButton.scss'

function DayButton({ sessions }) {

 // map through all sessions 
 // const DayNamesArray = []
 
 // sessions.map(item =. DayNamesArr[item.date.getDay()])
 //sessions.getDay()
 // if (sessions.createdAt === 1 - 7) {
  // 
  //}
console.log(sessions)


  const timeStampedSessions = (sessions) => {
    const DayNamesArr = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    sessions.map(item => DayNamesArr[item.date.getDay()])
  }

  return (
    <div className='DayButtonContainer'>
      <h2>My Sessions</h2>
      <div className='InnerBtnContainer'>
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