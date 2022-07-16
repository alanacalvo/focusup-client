import React from 'react'
import Calendar from '../../Components/Calendar/Calendar'
import DayButton from '../../Components/DayButton/DayButton'
import AllSessions from '../../Components/AllSessions/AllSessions'
import './MainPage.scss'

function MainPage({sessions}) {
  return (
    <div className='MainPage'>
     {/* // add in nav component here <nav></nav> */}
      <DayButton />
      {/* <Day sessions={sessions}/> */}
      <AllSessions sessions={sessions}/>
      <Calendar />
    </div>
  )
}

export default MainPage