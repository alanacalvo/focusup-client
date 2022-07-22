import React, { useState } from 'react'
import Calendar from '../../Components/Calendar/Calendar'
import DayButton from '../../Components/DayButton/DayButton'
import NavDrawer from '../../Components/NavDrawer/NavDrawer'
import StartSessionButton from '../../Components/StartSessionButton/StartSessionButton'
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer'
import AllSessions from '../../Components/AllSessions/AllSessions'

import './MainPage.scss'

function MainPage({ sessions }) {
  const [openTimerModal, setOpenTimerModal] = useState(false);
  const [openPostSessionForm, setOpenPostSessionForm] = useState(false);

  return (
      <div className='MainPage1'>
        <div className='container2'>
          <NavDrawer />
        </div>
        <div className='containerWrapper'>
          <div className='container3'>
            {/* <AllSessions sessions={sessions}/> */}
            <DayButton sessions={sessions} />
            <Calendar />
          </div>
          <div className='container4'>
            <StartSessionButton setOpenTimerModal={setOpenTimerModal}/>
          </div>
        </div>
        {openTimerModal && <CountdownTimer setOpenTimerModal={setOpenTimerModal}
        setOpenPostSessionForm={setOpenPostSessionForm} openPostSessionForm={openPostSessionForm}
        />}
      </div>
  )
}

export default MainPage