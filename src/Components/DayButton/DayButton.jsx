import React, { useState } from 'react'
import axios from 'axios'
import './DayButton.scss'
import { useEffect } from 'react'

function DayButton({ sessions }) {
  const [dayOfWeek, setDayOfWeek] = useState('')


  // for (let i =0; i < sessions.length; i ++) {
  //   console.log(sessions[i].createdAt())
  // }

  // const getDay = () => {
  // const DayNamesArr = [
  //   'Sunday',
  //   'Monday',
  //   'Tuesday',
  //   'Wednesday',
  //   'Thursday',
  //   'Friday',
  //   'Saturday'
  // ]
  //   sessions.map((session) => DayNamesArr[session.createdAt.getDay()])
  //   // setDayOfWeek(day)
  //   // console.log(day)

  // }

  return (
    <div className='DayButtonContainer'>
      <h2>My Sessions</h2>
      <div className='InnerBtnContainer'>
        <button className='dayButton'
        // onClick={() => getDay()}
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