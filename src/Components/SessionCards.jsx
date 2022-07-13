import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SessionCards({ session }) {

  return (
    <Card elevation={2} onClick={() => console.log('id', session._id)}>
      <CardContent>

      {session.name}

      </CardContent>

    </Card>
   )
}

export default SessionCards