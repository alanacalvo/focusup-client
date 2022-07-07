

import { Link } from 'react-router-dom';
import NewSession from '../NewSession';

function AllSessions({sessions}) {

  if (sessions.length === 0) {
    return <h1>no sessions</h1>
  }
  return (
    <>
      {sessions ? sessions.map((session, i) => {
        // console.log(session._id)
        return (
          <ul>
          <li key={i}>
            <Link to={`/${session._id}`} >
              {session.name}
              {session.todos}
            </Link>
          </li>
          </ul>
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