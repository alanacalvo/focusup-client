import React, { useState } from 'react'
import Calendar from '../../Components/Calendar/Calendar'
import DayButton from '../../Components/DayButton/DayButton'
import NavDrawer from '../../Components/NavDrawer/NavDrawer'
import StartSessionButton from '../../Components/StartSessionButton/StartSessionButton'
import CountdownTimer from '../../Components/CountdownTimer/CountdownTimer'
import AllSessions from '../../Components/AllSessions/AllSessions'
import WeekView from '../../Components/AllWeekView/WeekView'
import MonthView from '../../Components/AllMonthView/MonthView'
import { TimerContext, useTimer } from '../../Context/TimerContext';
import PostSessionForm from '../../Components/PostSessionForm/PostSessionForm'

import './MainPage.scss'

function MainPage({ sessions, onLogout }) {
  const { openPostSessionForm } = useTimer(TimerContext);

  const [openTimerModal, setOpenTimerModal] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState()

  return (
      <div className='MainPage1'>
        <div className='container2'>
          <NavDrawer onLogout={onLogout} />
        </div>
        <div className='containerWrapper'>
          <div className='container3'>
            <MonthView sessions={sessions} />
            {/* <AllSessions sessions={sessions}/> */}
            {/* <DayButton sessions={sessions} /> */}
            <Calendar />
          </div>
          <div className='container4'>
            <StartSessionButton 
            setCurrentSessionId={setCurrentSessionId} 
            setOpenTimerModal={setOpenTimerModal}
            />
          </div>
        </div>
        {openTimerModal && <CountdownTimer 
        setOpenTimerModal={setOpenTimerModal}/>}
        
        {openPostSessionForm && <PostSessionForm 
        currentSessionId={currentSessionId} 
        setCurrentSessionId={setCurrentSessionId}
        session={sessions}/>}
      </div>
  )
}

export default MainPage