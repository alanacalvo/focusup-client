import { useNavigate } from 'react-router-dom';
import NewSession from '../NewSession/NewSession';
import SessionBox from '../SessionBox/SessionBox';
import { useTimer, TimerContext } from '../../Context/TimerContext';
import { useContext, useState } from 'react';
import PostSessionForm from '../PostSessionForm/PostSessionForm';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import './AllSessions.scss';
import StartSessionButton from '../StartSessionButton/StartSessionButton';

function AllSessions({sessions}) {
  const timer = useContext(TimerContext);

  if (sessions.length === 0) {
    return <h1>no sessions</h1>
  }
  console.log(sessions)
  return (
    <>
      <div className='sessionContainer'>
      {sessions ? sessions.map((session, i) => {
          return (
            <div className='cards' key={i}>
              <SessionBox session={session}/>
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