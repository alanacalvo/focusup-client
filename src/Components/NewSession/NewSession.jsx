import axios from 'axios';
import React, { useState } from 'react';
import { useTimer, TimerContext } from '../../Context/TimerContext';
import DurationPicker from 'react-duration-picker';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import './NewSession.scss';
import PostSessionForm from '../PostSessionForm/PostSessionForm';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

function NewSession({ setOpenNewSessionModal }) {
  const navigate = useNavigate();
  const { timer, setSecondsRemaining } = useTimer(TimerContext);
  // const [sessionStarted, setSessionStarted] = useState();
  const [openTimerModal, setOpenTimerModal] = useState(false);

  const initialDetails = {
    name: '',
    type: '',
    length: {
      hours: '00',
      minutes: '00',
      seconds: '00'
    },
    preSessionTodos: ''
  }

  const [duration, setDuration] = useState({ hours: '00', minutes: '00', seconds: '00' })
  const [details, setDetails] = useState(initialDetails);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value })
    console.log(details)
  }

  const onChange = (duration) => {
    setDuration(duration)
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5000/sessions/NewSession', {
      name: details.name,
      type: details.type,
      preSessionTodos: details.preSessionTodos,
      length: {
        hours: duration.hours,
        minutes: duration.minutes,
        seconds: duration.seconds
      },
    })
      .then(res => {
        // need to close modal
        // need to open timer modal
        // reset initial details
        console.log(res.data)
        const timerToSecs = (duration.hours * 60 * 60 + duration.minutes * 60)
        setSecondsRemaining(timerToSecs)
        // setSessionStarted(true)        
        setDetails(initialDetails)
        // navigate('/home') // need on click close modal function
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
          <button onClick={() => setOpenNewSessionModal(false)}> X </button>
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
            initialDuration={{ hours: '00', minutes: '00', seconds: '00' }}
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
          onClick={(e) => {
            // e.preventDefault()
            setOpenTimerModal(true)
            // setOpenNewSessionModal(false) // this messes with the submit
          }}
          className='getStartedBtn'
          type="submit"
        >Let's get started!</button>
      </Box>
      {openTimerModal && <CountdownTimer />}
    </div>
  )
}

export default NewSession