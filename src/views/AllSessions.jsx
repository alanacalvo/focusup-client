import { useNavigate } from 'react-router-dom';
import NewSession from '../Components/NewSession';
import '../assets/AllSessions.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import SessionCards from '../Components/SessionCards';
import { useTimer, TimerContext } from '../Context/TimerContext';
import { useContext, useState } from 'react';
import PostSessionForm from '../Components/PostSessionForm';
import CountdownTimer from '../Components/CountdownTimer';
import { Modal } from '@mui/material';
import '../assets/AllSessions.css'

function AllSessions({sessions}) {
  const timer = useContext(TimerContext);
  const [openModal, setOpenModal] = useState(false)

  if (sessions.length === 0) {
    return <h1>no sessions</h1>
  }
  return (
    <>
    <div className='gridContainer'>
    {sessions ? sessions.map((session, i) => {
        return (
          <div className='cards' key={i}>
            <SessionCards session={session}/>
          </div>
        )
      })
        : <h2>searching for sessions</h2>
      }
    {/* <Container >
      <Grid className='gridContainer' container spacing={1}>
      {sessions ? sessions.map((session, i) => {
        return (
          <Grid item xs={4} sm={3} md={1.75} key={i}>
            <SessionCards session={session}/>
          </Grid>
        )
      })
        : <h2>searching for sessions</h2>
      }
      </Grid>
      {openModal && <NewSession closeModal={setOpenModal}/>}
      { timer.secondsRemaining === 0 
        ? <PostSessionForm />
        : <CountdownTimer />
      }  
    </Container> */}
    </div>
      {
        <div className='newSessionBtn' onClick={() => setOpenModal(true)}>
          <h1>Ready to get started, user?</h1>
          </div>
      }
      </>
  )
}

export default AllSessions