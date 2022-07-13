import { Link } from 'react-router-dom';
import NewSession from '../Components/NewSession';
import '../assets/AllSessions.css'

function AllSessions({sessions}) {

  if (sessions.length === 0) {
    return <h1>no sessions</h1>
  }
  return (
    <>
      {sessions ? sessions.map((session, i) => {
        return (
          <div className='gridContainer'>
          <ul >
          <li className='cards' key={i}>
            <Link to={`/${session._id}`} >
              {session.name}
              {session.todos}
              {/* {`${session.length.hours}+${session.length.minutes}`} */}
            </Link>
          </li>
          </ul>
          </div>
        )
      })
        : <h2>searching for sessions</h2>
      }
      {
        <button onClick={() => <NewSession />}>New Session</button>
      }
    </>
  )
}

export default AllSessions