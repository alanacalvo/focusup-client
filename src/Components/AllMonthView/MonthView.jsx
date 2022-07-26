import { useEffect, useCallback, useState } from 'react';
import GetByDate from '../GetByDate/GetByDate';
import SessionBox from '../../Components/AllMonthView/MonthView';
import { useNavigate, useParams } from 'react-router-dom';
import './MonthView.scss';


function MonthView({ sessions }) {
  const [monthSessions, setMonthSessions] = useState([]);
  const navigate = useNavigate();
  // {
  //   sessions ? sessions.map((session, i) => {
  //     return (
  //       <li key={i}>
  //         {/* <SessionBox session={session} /> */}
  //         {session.colorRating}
  //       </li>
  //     )
  //   })
  //     : <h2>searching for sessions</h2>
  //   }

  // const grid = () => {
  //   const monthSessionsArr = []
  //   for (let i = 0; i <= 101; i++) {
  //     monthSessionsArr.push({ name: 'Hi' })
  //   }
  //   setMonthSessions(monthSessionsArr)
  //   console.log(monthSessionsArr)
  // }


  // const renderGrid = () => {
  //   return (
  //     <ul className='squares'>
  //       {
  //         monthSessions.map((session, i) => {
  //           <li key={i}>{session.name}</li>
  //         })
  //       }
  //     </ul>
  //   )
  // }

  // useEffect(() => {
  //   grid()
  // }, [])
  // if (sessions.length === 0) {
  //   return <h1>no sessions</h1>
  // }

  return (
    <div className='DayButtonContainer'>
      <div className="graph">
        <ul className="months">
          <h2>My Sessions</h2>
          {/* <li>May</li>
          <li>June</li>
          <li>July</li> */}
        </ul>
        <ul className='squares'>
          {
            sessions ? sessions.map((session, i) => {
              return (
                <li 
                style={{backgroundColor: session.colorRating}}
                key={i} 
                onClick={() => navigate(`/${session._id}`)}>
                  {/* {session.colorRating} */}
                </li>
              )
            })
              : <h2>searching for sessions</h2>
          }
        </ul>
      </div>
    </div>
  )
}

export default MonthView