import axios from 'axios';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimerContext } from '../Context/TimerContext';


function NewSession({getAllSessions}) {
  const { timer, setTimer, msg} = useContext(TimerContext);
  console.log(timer)
  const navigate = useNavigate();
  const sessionInitForm = {
    name: '',
    type: '',
    length: '',
  }

  const [sessionForm, setSessionForm] = useState(sessionInitForm);
  const [session, setSession] = useState();
  // const [sessionLength, setSessionLength] = useState();

  const newSessionChange = (e) => {
    setSessionForm({ ...sessionForm, [e.target.id]: e.target.value})
    setTimer(sessionForm.length)
  }
  const newSessionSubmit = async (e) => {
    e.preventDefault();
    setSession(sessionForm)
  }
  if(session) {
    console.log(session)
    axios.post('http://localhost:5000/NewSession', {
      name: session.name,
      type: session.type,
      length: session.length,
    })
    .then(res => {
      navigate('/')
    })
    setSession()
  }
  useEffect(() => {
    getAllSessions();
  }, [setSession])


  return (
    <>
    <form onSubmit={newSessionSubmit}>
            <label htmlFor="name">Name: </label>
            <input 
              type="text"
              id="name"
              value={sessionForm.name}
              onChange={newSessionChange}
              />
            <br></br>


            <label htmlFor="Length">Length (in hours): </label>
            <input 
              type="text" //?? change later??
              id="length"
              value={sessionForm.length}
              onChange={newSessionChange}
              />


            <br></br>
            <label>Select Type: </label>
            <select
            type="text" 
            id="type" 
            value={sessionForm.type} 
            onChange={newSessionChange}
            > 
            <option>Pomodoro</option>
            <option>Regular</option>
            </select>
            <br></br>
            
            <button 
            type="submit"
           // onSubmit={() => getAllSessions()} //?
            >Let's get started!</button>

        </form>
    </>
  )
}

export default NewSession