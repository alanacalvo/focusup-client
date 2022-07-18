import { useNavigate } from 'react-router-dom';
import NewSession from '../NewSession/NewSession';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import SessionBox from '../SessionBox/SessionBox';
import { useTimer, TimerContext } from '../../Context/TimerContext';
import { useContext, useState } from 'react';
import PostSessionForm from '../PostSessionForm/PostSessionForm';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { Modal } from '@mui/material';
import './sessionContainer.scss';
import StartSessionButton from '../StartSessionButton/StartSessionButton';

function AllSessions({sessions}) {
  const timer = useContext(TimerContext);
  const [openModal, setOpenModal] = useState(false)

  if (sessions.length === 0) {
    return <h1>no sessions</h1>
  }
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

      {openModal && <NewSession closeModal={setOpenModal}/>}
      { timer.secondsRemaining === 0 
        ? <PostSessionForm />
        : <CountdownTimer />
      }  
      <StartSessionButton setOpenModal={setOpenModal}/>
    </div>
      </>
  )
}

export default AllSessions