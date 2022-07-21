import axios from 'axios';
import React, { useState } from 'react';
import { useTimer, TimerContext } from '../../Context/TimerContext';
import DurationPicker from 'react-duration-picker';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import './NewSession.scss';

function NewSession({ closeModal }) {
  const navigate = useNavigate();
  const { setHours, hours, setMinutes, minutes, setSecondsRemaining, seconds, setSessionStarted } = useTimer(TimerContext);

  const initialDetails = {
    name: '',
    type: '',
    length: {
      hours: '00',
      minutes: '00'
    },
    preSessionTodos: ''
  }

  const [duration, setDuration] = useState({ hours: '00', minutes: '00' })
  const [details, setDetails] = useState(initialDetails);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value })
    console.log(details)
  }

  const onChange = (duration) => {
    setDuration(duration)
    console.log(duration)
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5000/sessions/NewSession', {
      name: details.name,
      type: details.type,
      preSessionTodos: details.preSessionTodos,
      length: {
        hours: duration.hours,
        minutes: duration.minutes
      },
    })
      .then(res => {
        console.log(res.data)
        const hours = duration.hours;
        const minutes = duration.minutes;
        const timerToSecs = (hours * 60 * 60 + minutes * 60)
        setSecondsRemaining(timerToSecs)
        setSessionStarted(true)
        setDetails(initialDetails)
        // navigate('/')
      })
  }

  return (
    <div className='modalContainer'>
      <Box
        className='modalFormBox'
        component='form'
        autoComplete="off"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className='closeModal'>
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <label htmlFor="name">Session Name: </label>
        <Input
          required
          label='Session Name'
          placeholder='Session Name'
          color='secondary'
          onChange={handleChange}
          value={details.name}
          id='name'
        />
        <br></br>
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
        <label htmlFor="length">Session Length: </label>
        <div className='duration'>
          <DurationPicker
            initialDuration={{ hours: '00', minutes: '00' }}
            id="length"
            onChange={onChange}/>
        </div>
        <br></br>
        <label htmlFor="length">Session Length: </label>
        <Input
          label='To Do List'
          placeholder='To Do List'
          color='secondary'
          onChange={handleChange}
          value={details.preSessionTodos}
          id='todos'
        />
        <br></br>
        {/* <Autocomplete
      id='todos'
      />
      <br></br> */}
        <button
          className='getStartedBtn'
          type="submit"
        >Let's get started!</button>
      </Box>
    </div>
  )
}

export default NewSession