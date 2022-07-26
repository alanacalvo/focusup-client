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

function NewSession({ setOpenNewSessionModal, setOpenTimerModal, setCurrentSessionId }) {
  const navigate = useNavigate();
  const { setActive, setSecondsRemaining } = useTimer(TimerContext);

  const initialDetails = {
    name: '',
    type: '',
    length: {
      hours: '00',
      minutes: '00',
      seconds: '00'
    },
    preSessionTodos: []
  }

  const [duration, setDuration] = useState({ hours: '00', minutes: '00', seconds: '00' })
  const [details, setDetails] = useState(initialDetails);
  const [todo, setTodo] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState('')

  const handleChange = (duration) => {
    setDuration(duration)
  };

  const handleAddToDo = (e) => {
    e.preventDefault()
    const temp = details;
    temp.preSessionTodos.push({ todo: todo });
    setDetails(temp);
    setTodo('');
  }
  console.log('de', details.preSessionTodos)
  const handleSubmit = () => {
    console.log('color', color)
    const data = {
      name: name,
      type: type,
      preSessionTodos: todo,
      length: {
        hours: duration.hours,
        minutes: duration.minutes,
        seconds: duration.seconds
      },
      colorRating: 'red'
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}/sessions/NewSession`, data)
      .then(res => {
        console.log(res.data._id)
        const timerToSecs = (duration.hours * 60 * 60 + duration.minutes * 60)
        setSecondsRemaining(timerToSecs)
        setOpenNewSessionModal(false)
        setActive(true)
        setCurrentSessionId(res.data._id)
        setDetails(data)
        setColor('')
      })
  }

  // const renderToDoList = () => {
  //   return (
  //     <div>
  //       {details.preSessionTodos && (
  //         details.preSessionTodos.map((item) => {
  //           <h1 style={{backgroundColor: "blue"}}>{item.todo}</h1>
  //         })
  //       )}
  //     </div>
  //   )
  // }
  const handleColorChange = (e) => {
    setColor(e.target.value)
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
          onChange={(e) => setName(e.target.value)}
          value={name}
          name='name'
        />
        <br></br>
        <select
          type="text"
          name="type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option>Pomodoro</option>
          <option>Regular</option>
        </select>
        <br></br>
        <label htmlFor="length">Session Length: </label>
        <div className='duration'>
          <DurationPicker
            initialDuration={{ hours: '00', minutes: '00', seconds: '00' }}
            name="length"
            onChange={handleChange} />
        </div>
        <br></br>
        <label htmlFor="length">To Do List: </label>
        <Input
          label='To Do List'
          placeholder='To Do List'
          color='secondary'
          onChange={(e) => setTodo(e.target.value)}
          // on keypress map through todos
          value={todo}
          name='todos'
        />
        <Input
          label='color'
          placeholder='color'
          color='secondary'
          onChange={handleColorChange}
          // on keypress map through todos
          value={color}
          name='colorRating'
        />
        <br></br>
        {/* <Autocomplete
      id='todos'
      />
      <br></br> */}

        <button
          onClick={() => {
            setOpenTimerModal(true)
          }}
          className='getStartedBtn'
          type="submit"
        >Let's get started!</button>
        {/* <button
          onClick={(e) => {
            handleAddToDo(e)
          }}
          className='getStartedBtn'
          type="submit"
        >Test</button>
        <div>
          {details.preSessionTodos.length > 0 && (
            renderToDoList()
          )}
        </div> */}
      </Box>
    </div>
  )
}

export default NewSession