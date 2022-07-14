import axios from 'axios';
import React, { useState } from 'react';
import { useTimer, TimerContext } from '../Context/TimerContext';
import DurationPicker from 'react-duration-picker';
// import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import { ClassNames } from '@emotion/react';

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: 'block'
//   }
// })
const style = {
  color: 'green'
}
function NewSession({ getAllSessions }) {
  // const classes = useStyles();
  const { timer, setTimer, setSecondsRemaining } = useTimer(TimerContext);

  const initialDetails = {
    name: '',
    type: '',
    length: {
      hours: '00',
      minutes: '00'
    },
  }

  const [duration, setDuration] = useState({ hours: '00', minutes: '00' })
  const [details, setDetails] = useState(initialDetails);
  
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value })
  }
  
  const onChange = (duration) => {
    // console.log()
    setDuration(duration)
    console.log('onChange duration:', duration)
    // .then( RESET DURATION PICKER )
  };

  const handleSubmit = () => {
    // e.preventDefault();
    console.log('duration.hours:', duration.hours, 'duration.minutes:', duration.minutes)
    axios.post('http://localhost:5000/NewSession', {
      name: details.name,
      type: details.type,
      length: {
        hours: duration.hours,
        minutes: duration.minutes
      }
    })
      .then(res => {
        console.log(res.data)

        const hours = duration.hours;
        // console.log(hours)
        const minutes = duration.minutes;
        // console.log(minutes)
        const timerToSecs = (hours * 60 * 60 + minutes * 60)
        // console.log(timerToSecs, 'toms')
        const total = timerToSecs
        setTimer(duration)
        setSecondsRemaining(timerToSecs)
        // console.log('details.length: ',details.length) // '00' '00' no matter where this is placed
        console.log('timer', timer) // TIMER IS ONE STEP BEHIND
        console.log('post .then duration:', duration) // DURATION IS ACCURATE TO WHAT IS IN DURATION PICKER WHEN SUBMITTED
        getAllSessions()
        setDetails(initialDetails)
        // setTimer(details.length)
        // console.log(timer)
      })
  }


  return (
    <Box
      component='form'
      autoComplete="off"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >

      <Input
        required
        // className={classes.field}
        label='Session Name'
        placeholder='Session Name'
        color='secondary'
        onChange={handleChange}
        value={details.name}
        id='name'
      />
      {/* <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={details.name}
          // onChange={handleChange}
  /> */}


      <label>Select Type: </label>
      <select
        type="text"
        id="type"
        value={details.type}
        onChange={handleChange}
      >
        <option>Pomodoro</option>
        <option>Regular</option>
      </select>
      <br></br>
      <label htmlFor="length">Length (in hours): </label>
      <DurationPicker
        initialDuration={{ hours: '00', minutes: '00' }}
        id="length"
        onChange={onChange}
      />

      <button
        type="submit"
      >Let's get started!</button>



    </Box>
  )
}

export default NewSession