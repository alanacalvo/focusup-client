import { useNavigate } from 'react-router-dom';
import NewSession from '../Components/NewSession';
import '../assets/AllSessions.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import SessionCard from '../Components/SessionCards';
import SessionCards from '../Components/SessionCards';

function AllSessions({sessions}) {
  const navigate = useNavigate();
  if (sessions.length === 0) {
    return <h1>no sessions</h1>
  }
  return (
    <Container>
      <Grid container spacing={1}>
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
        <button onClick={() => navigate('/newsession')}>New Session</button>
      }
    </Container>
  )
}

export default AllSessions