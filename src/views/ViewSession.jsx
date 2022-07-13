import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'


function ViewSession({getAllSessions}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [session, setSession] = useState([]);
  const [removeSession, setRemoveSession] = useState();

  const fetchOneSession = async () => {
    const { data } = await axios.get(`http://localhost:5000/${id}`)
    setSession(data)
  }
  useEffect(() => {
    fetchOneSession()
  }, [])

  const handleRemove = async () => {
    await axios.delete(`http://localhost:5000/${id}`);
    getAllSessions();
    navigate('/')
  }
  
  return (
    <div>
      <p>{session.name}</p>
      <p>{session.todos}</p>
      {/* <p>{session.length}</p> */}
      <p>{session.type}</p>
      {/* <form > */}
      <button 
      type='submit'
      onClick={(e) => handleRemove(e)}
      >Delete</button>
      {/* </form> */}
    </div>
  )
}

export default ViewSession