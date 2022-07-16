import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './sessionBox.scss';

function SessionBox({ session }) {
  const navigate = useNavigate(); 

  return (
    <div className='sessionBox' onClick={() => navigate(`/${session._id}`)}>
      <span>{session.name}</span>
    </div>
   )
}

export default SessionBox