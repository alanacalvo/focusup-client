import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './sessionBox.scss';

function SessionBox({ session }) {
  const navigate = useNavigate(); 

  return (
    <div onClick={() => navigate(`/${session._id}`)}>
      {session.name}
    </div>
   )
}

export default SessionBox