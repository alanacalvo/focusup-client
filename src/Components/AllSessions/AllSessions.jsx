import { useNavigate } from 'react-router-dom';
import NewSession from '../NewSession/NewSession';
import SessionBox from '../SessionBox/SessionBox';
import { useTimer, TimerContext } from '../../Context/TimerContext';
import { useContext, useState } from 'react';
import PostSessionForm from '../PostSessionForm/PostSessionForm';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import './AllSessions.scss';
import StartSessionButton from '../StartSessionButton/StartSessionButton';
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css';

function AllSessions({ sessions }) {

  if (sessions.length === 0) {
    return <h1>no sessions</h1>
  }
  console.log(sessions)
  return (
    <>
      {/* <CalendarHeatmap
        startDate={new Date('2022-04-01')}
        endDate={new Date('2012-06-01')}
        values={[
          { date: '2016-01-01', count: 12 },
          { date: '2016-01-22', count: 122 },
          { date: '2016-01-30', count: 38 },
        ]}
        horizontal={true}
      /> */}
      <div className='sessionContainer'>
        {sessions ? sessions.map((session, i) => {
          return (
            <div className='cards' key={i}>
              <SessionBox session={session} />
            </div>
          )
        })
          : <h2>searching for sessions</h2>
        }
      </div>
    </>
  )
}

export default AllSessions