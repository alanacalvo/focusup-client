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

function AllSessions({sessions}) {
  const timer = useContext(TimerContext);
  const [openModal, setOpenModal] = useState(false)

  if (sessions.length === 0) {
    return <h1>no sessions</h1>
  }
  return (
    <Container >
      <Grid className='gridContainer' container spacing={1}>
      {sessions ? sessions.map((session, i) => {
        return (
          <Grid item xs={4} sm={3} md={1.75} key={i}>
            {/* <Link to={`/${session._id}`} > */}
            <SessionCards session={session}/>
            {/* </Link> */}
          </Grid>
        )
      })
        : <h2>searching for sessions</h2>
      }
      </Grid>
      {
        <div className='newSessionBtn' onClick={() => setOpenModal(true)}>New Session</div>
      }
      {openModal && <NewSession closeModal={setOpenModal}/>}

      { timer.secondsRemaining === 0 
        ? <PostSessionForm />
        : <CountdownTimer />
      }
            
    </Container>
  )
}

export default AllSessions