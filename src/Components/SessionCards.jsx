import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SessionCards({ session }) {
  const navigate = useNavigate(); 

  return (
    <Card 
    className='cards'
    elevation={2} 
    sx={{width: 150, height: 150}}
    sm={{width: 100, height: 100}}
    >
      <CardContent>
        <Typography 
        variant={'h5'}
        sm={{ fontSize: 14 }}
        align='center'
        >
          {session.name}
          <button onClick={() => navigate(`/${session._id}`)}>Details</button>
        </Typography>

      </CardContent>

    </Card>
   )
}

export default SessionCards