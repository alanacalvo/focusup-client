import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './ViewSession.scss'


function ViewSession({getAllSessions}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [session, setSession] = useState([]);
  // const [removeSession, setRemoveSession] = useState();

  const fetchOneSession = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/sessions/${id}`)
    setSession(data)
  }
  useEffect(() => {
    fetchOneSession()
    console.log(session)
    console.log('hello')
  }, [])

  const handleRemove = async () => {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/sessions/${id}`);
    getAllSessions();
    navigate('/home')
  }
  
  return (
    <div className='view'>
      <p>{session.name}</p>
      <p>{session.preSessionTodos}</p>
      <p>{session.postSessionTodos}</p>
      <p>{session.length}</p>
      <p>{session.type}</p>
      <p>{session.notes}</p>
      <button
      onClick={() => navigate(-1)}>Back</button>
      <button 
      type='submit'
      onClick={(e) => handleRemove(e)} // not working.. can I only use navigate once per page?
      >Delete</button>
      
    </div>
  )
}

export default ViewSession