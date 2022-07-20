import React from 'react'
import Calendar from '../../Components/Calendar/Calendar'
import DayButton from '../../Components/DayButton/DayButton'
import AllSessions from '../../Components/AllSessions/AllSessions'
import NavDrawer from '../../Components/NavDrawer/NavDrawer'
import StartSessionButton from '../../Components/StartSessionButton/StartSessionButton'

import './MainPage.scss'

function MainPage({ sessions }) {
  return (
      <div className='MainPage1'>
        <div className='container2'>
          <NavDrawer />
        </div>
        <div className='containerWrapper'>
          <div className='container3'>
            <DayButton sessions={sessions} />
            <Calendar />
          </div>
          <div className='container4'>
            <StartSessionButton />
          </div>
        </div>
      </div>
  )
}

export default MainPage